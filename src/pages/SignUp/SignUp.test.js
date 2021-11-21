import { render, screen } from "@testing-library/react";
import SignUp from "./SignUp";
import {BrowserRouter} from 'react-router-dom';

it('Should be heading', () => {
    render(<BrowserRouter><SignUp/></BrowserRouter>);
    const heading = screen.getByText(/join/i);
    expect(heading).toBeInTheDocument();
})