import { render, screen, fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { App } from './App';

const response = { speaker: 'Speaker', quote: 'Test quote'};

const server = setupServer(
  rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
    return res(ctx.json(response));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the app whit a button, a quote and a button', () => {
    render(<App/>);

    const buttonEl = screen.getByRole('button');
    const imageEl = screen.getByRole('img');
    const textEl = screen.getByText(/Loading speaker/);

    expect(buttonEl).toBeInTheDocument();
    expect(imageEl).toBeInTheDocument();
    expect(textEl).toBeInTheDocument();
})

test('calls api on button click and update its test', async () => {
    render(<App/>);

    const buttonEl = screen.getByRole('button');

    fireEvent.click(buttonEl);

    const QuoteEl = await screen.findByText(response.quote);

    expect(QuoteEl).toBeInTheDocument();
})

test('calls api on startup and renders it response', async () => {
    render(<App />);
  
    const quoteEl = await screen.findByText(response.quote);
  
    expect(quoteEl).toBeInTheDocument();
  });

