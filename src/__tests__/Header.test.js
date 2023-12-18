const { render } = require("@testing-library/react");

import Header from "../components/Header/Header";

describe("Header Test", () => {
  it("should contain witty title", () => {
    const header = render(<Header />);

    const text = header.getByRole("heading", {
      level: 1,
      name: "Red Frontier: Conquering the Martian Mystique",
    });

    expect(text).toBeInTheDocument();
  });
});
