# predictor-fe# predictor-fe

Frontend service for the Predictor app.

- Next.js 14 (App Router)
- React 18
- TypeScript
- Jest + React Testing Library
- ESLint + Prettier
- pnpm
- Docker (dev + prod)
- GitHub Actions CI/CD
- GHCR image publishing

## Local Development (Docker-only)

Make sure Docker Desktop is running in **Linux containers** mode.

Start dev server:

    docker compose -f docker-compose.dev.yml up --build

Frontend will be available at:

    http://localhost:3000

Stop:

    docker compose -f docker-compose.dev.yml down

## Run Tests in Docker

    docker compose -f docker-compose.dev.yml run --rm predictor-fe pnpm test

## Run Lint in Docker

    docker compose -f docker-compose.dev.yml run --rm predictor-fe pnpm lint

## Build Production Output in Docker

    docker compose -f docker-compose.dev.yml run --rm predictor-fe pnpm build

## Production Docker Image

Build locally:

    docker build -t predictor-fe:local .

Run:

    docker run --rm -p 3000:3000 predictor-fe:local

## CI/CD

GitHub Actions workflow:

- Installs dependencies
- Lints
- Runs tests
- Builds Next.js production app
- Builds and pushes Docker image to GHCR:

    ghcr.io/<github-username>/predictor-fe:<tag>
