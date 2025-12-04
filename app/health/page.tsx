export default function HealthPage() {
  const env = process.env.NEXT_PUBLIC_APP_ENV || 'dev';

  return (
    <main
      style={{
        padding: '2rem',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif'
      }}
    >
      <h1>Predictor UI Health</h1>
      <p style={{ marginTop: '1rem' }}>status: ok</p>
      <p>message: predictor-fe is alive and rendering ✅</p>
      <p>env: {env}</p>
    </main>
  );
}
