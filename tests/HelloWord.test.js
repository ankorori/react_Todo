import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HelloWorld from "../src/components/HelloWorld";

describe("HelloWorld", () => {
    test("renders without crashing", () => {
        render(
            <Router>
                <HelloWorld />
            </Router>
        );
        expect(screen.getByText("Hello World")).toBeInTheDocument();
    });
});