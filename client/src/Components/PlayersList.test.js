import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PlayersList from "./PlayersList";


afterEach(rtl.cleanup);

test("Show only this country! works", () => {
    const wrapper = rtl.render(<PlayersList />);
    const element = wrapper.queryByText(/Show only this country/i);
    expect(element).toHaveAttribute("onClick", "changeValue");
  })
