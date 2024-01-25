import { describe, test,expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './../Header';
describe(" Header", () => {

    test("header testing ... #1 ", () => {
        render(<Header title="React App" />);
        const h1Element = screen.getByText(/react/i);
        expect(h1Element).toBeInTheDocument();
    })
    
    test("header testing ... #2 ", () => {
        render(<Header title="React App" />);
        const h1Element = screen.getByRole("heading",{name: /react/i});
        expect(h1Element).toBeInTheDocument();
    })
    test("header testing ... #3 ", () => {
        render(<Header title="React App" />);
        const h1Element = screen.getByTitle("header");
        expect(h1Element).toBeInTheDocument();
    })

})
