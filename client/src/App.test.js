import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

afterEach(rtl.cleanup);

test("Render app", () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.queryByText(`Women's World Cup Players`);
  expect(element).toBeVisible();
});
