FROM node:20-alpine AS builder

# Enable pnpm via corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /usr/src/app

COPY package.json ./
COPY tsconfig.json ./
COPY next.config.js ./

RUN pnpm install --frozen-lockfile || pnpm install

COPY app ./app

RUN pnpm build

# --- Runtime image ---
FROM node:20-alpine

WORKDIR /usr/src/app

ENV NODE_ENV=production
ENV NEXT_PUBLIC_APP_ENV=prod
ENV PORT=3000

COPY --from=builder /usr/src/app/package.json ./
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/next.config.js ./next.config.js
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/app ./app

EXPOSE 3000

CMD ["pnpm", "start"]
