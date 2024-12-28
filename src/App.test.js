<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
=======
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
>>>>>>> 28b21a0 (クリア済み)
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
