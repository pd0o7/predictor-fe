import { render, screen } from '@testing-library/react';
import HealthPage from '../app/health/page';

describe('HealthPage', () => {
  it('renders health information', () => {
    render(<HealthPage />);

    expect(screen.getByText(/Predictor UI Health/i)).toBeInTheDocument();
    expect(screen.getByText(/status: ok/i)).toBeInTheDocument();
    expect(screen.getByText(/predictor-fe is alive/i)).toBeInTheDocument();
  });
});
