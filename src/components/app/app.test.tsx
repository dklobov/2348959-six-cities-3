import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {store} from '../../store';
import App from './app';

describe('Application Routing', () => {
  it('should render main page on root route', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
  });

  it('should render login page on login route', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/login']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByRole('heading', {name: 'Sign in'})).toBeInTheDocument();
  });

  it('should render not found page on unknown route', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/unknown']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});
