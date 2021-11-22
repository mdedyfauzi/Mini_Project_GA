import { render, screen } from '@testing-library/react';
import Footer from './Footer';

it ("Should be render text", () => {
    render(<Footer/>);
    const text = screen.getByText(/see event/i);
    expect(text). toBeInTheDocument();
});