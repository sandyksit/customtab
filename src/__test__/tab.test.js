import { render, screen, fireEvent } from "@testing-library/react";
import TabPanel from "../components/tab/TabPanel";

// Mock tab data to verify dynamic content rendering
const tabs = [
  { id: 1, title: "Lorem ipsum", heading: "Lorem Ipsum Dolor", content: "Morbi non lacus nunc." },
  { id: 2, title: "Quisque at pretium", heading: "Quisque At Pretium", content: "Mauris blandit vitae." },
  { id: 3, title: "Nulla facilisi", heading: "Nulla Facilisi", content: "Nam lorem magna." },
];

describe("TabPanel Component", () => {
  test("renders TabPanel with initial content", () => {
    render(<TabPanel />);
    
    // Check if initial tab content is displayed
    expect(screen.getByText("consectetur adipiscing elit")).toBeInTheDocument();
    //expect(screen.getByText("Donec suscipit ex eu faucibus laoreet. Nulla non neque mauris.")).toBeInTheDocument();
  });

  test("switches tabs correctly", () => {
    render(<TabPanel />);
    
    // Click second tab
    fireEvent.click(screen.getByText("Quisque at pretium"));
    
    // Verify new content appears
    expect(screen.getByText("Quisque At Pretium")).toBeInTheDocument();
    expect(screen.getByText("Mauris blandit vitae libero vel tincidunt. Nam lorem magna, iaculis in ornare ut.")).toBeInTheDocument();
  });

  test("applies correct styles to active tab", () => {
    render(<TabPanel />);
    
    const firstTab = screen.getByText("Lorem ipsum");
    expect(firstTab).toHaveClass("active"); // Active tab should have blue text
  });
  
  test("renders all tabs correctly", () => {
    render(<TabPanel />);
    
    tabs.forEach(tab => {
      expect(screen.getByText(tab.title)).toBeInTheDocument();
    });
  });

  test("does not display inactive tab content", () => {
    render(<TabPanel />);
    
    // Click second tab
    fireEvent.click(screen.getByText("Quisque at pretium"));
    
    // Ensure first tab content is no longer displayed
    expect(screen.queryByText("Lorem Ipsum Dolor")).not.toBeInTheDocument();
  });
});
