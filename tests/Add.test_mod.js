import { render, screen } from "@testing-library/react";
import React from 'react';
import Add from '../src/components/Add';

describe('addPage', () => {
    test('renders without crashing', () => {
        render(<Add />);
        expect(screen.getByText("Hello Worl")).toBeInTheDocument();
    });
});
