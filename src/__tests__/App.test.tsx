import { render, screen } from "@testing-library/react";
import App from "../App";

describe('App', () => {
  test('Application will render RESTy header', () => {
    render(<App/>);
    const headerElement = screen.getByText(/RESTy/i);
    expect(headerElement).toBeInTheDocument();
  });
})