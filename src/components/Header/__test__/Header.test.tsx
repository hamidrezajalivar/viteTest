import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import Header from './../Header';

/// doc https://testing-library.com/docs/queries/byrole
// doc2 https://github.com/testing-library/jest-dom
describe(" Header", () => {

    test("header testing ... #1 ", () => {
        render(<Header title="React App" />);
        const h1Element = screen.getByText(/react/i);
        expect(h1Element).toBeInTheDocument();
    })

    test("header testing ... #2 ", () => {
        render(<Header title="React App" />);
        const h1Element = screen.getByRole("heading", { name: /react/i });
        expect(h1Element).toBeInTheDocument();
    })
    test("header testing ... #3 ", () => {
        render(<Header title="React App" />);
        const h1Element = screen.getByTitle("header");
        expect(h1Element).toBeInTheDocument();
    })
    test("header testing ... #4 ", () => {
        render(<Header title="React App" />);
        const h1Element = screen.getByTestId("header-2");
        expect(h1Element).toBeInTheDocument();
    })

    /// find ==> async
    test("header testing ... #5 ", async () => {
        render(<Header title="React App" />);
        const h1Element = await screen.findByText(/react/i);
        expect(h1Element).toBeInTheDocument();
    })
    ///query => for not element
    test("header testing ... #6 ", () => {
        render(<Header title="React App" />);
        const h1Element = screen.queryByText(/vue/i);
        expect(h1Element).not.toBeInTheDocument();

    });

    test("header testing ... #7 ", () => {
        render(<Header title="React App" />);
        const headings = screen.getAllByRole("heading");
        expect(headings.length).toBe(2);

    });
    test("header testing ... #8 ", () => {
        render(<Header title="React App" />);
        const headings = screen.getAllByRole("heading", { level: 2 });
        expect(headings.length).toBe(1);

    });
    test("header testing ... #9 ", () => {
        render(<Header title="React App" />);
        const button = screen.getByRole("spinbutton", { value: { now: 5 } });
        expect(button).toBeInTheDocument();

    });
    test("header testing ... #10 ", () => {
        render(<Header title="React App" />);
        const button = screen.getAllByRole("spinbutton", { value: { min: 0 } });
        expect(button.length).toBe(2);

    });
    test("header testing ... #11", () => {
        render(<Header title="React App" />);
        const lableNode = screen.getByLabelText("Username2", { selector: 'textarea' });
        expect(lableNode).toBeInTheDocument();

    })
    test("header testing ... #12", () => {
        render(<Header title="React App" />);
        const lableNode = screen.getByPlaceholderText("firstName", { selector: 'input' });
        expect(lableNode).toBeInTheDocument();

    })
    test("header testing ... #13", () => {
        render(<Header title="React App" />);
        const node = screen.getByTestId("visibility-hidden");
        expect(node).not.toBeVisible();

    })
})
