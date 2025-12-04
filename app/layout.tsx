import './globals.css';

export const metadata = {
  title: 'Predictor UI',
  description: 'Frontend for predictor application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
