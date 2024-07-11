import Table from "../components/details/Table.jsx";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppContext } from "../App.jsx";

const generateMockGrowth = (n) => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: n }, (_, i) => ({
    year: currentYear + i,
    value: i * 1000,
    months: [
      { month: "January", value: null },
      { month: "February", value: null },
      { month: "March", value: null },
      { month: "April", value: null },
      { month: "May", value: null },
      { month: "June", value: null },
      { month: "July", value: null },
      { month: "August", value: null },
      { month: "September", value: null },
      { month: "October", value: null },
      { month: "November", value: null },
      { month: "December", value: null },
    ],
  }));
};

describe("Table Component", () => {
  it("renders the correct number of TableItem components", () => {
    const mockGrowth = generateMockGrowth(3); // Generate 3 mock growth items

    const mockContextValue = {
      investment: { growth: mockGrowth },
    };

    render(
      <AppContext.Provider value={mockContextValue}>
        <Table />
      </AppContext.Provider>,
    );

    // Find all elements with the data-testid="table-item"
    const tableItems = screen.getAllByTestId("table-item");

    // Assert that the number of rendered items matches the length of the growth array
    expect(tableItems).toHaveLength(mockGrowth.length);
  });
});
