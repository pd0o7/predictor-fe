export default function HomePage() {
  return (
    <main
      style={{
        padding: '2rem',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif'
      }}
    >
      <h1>Predictor UI</h1>
      <p style={{ marginTop: '1rem' }}>
        This is the frontend for the Predictor app. The backend service will eventually provide
        live matchup data, odds, injuries, and sentiment.
      </p>

      <p style={{ marginTop: '1.5rem' }}>
        Frontend is running and working independently. Visit{' '}
        <code>/health</code> to see a simple health check page.
      </p>
    </main>
  );
}
