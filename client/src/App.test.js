import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";


afterEach(rtl.cleanup);

test("Render the app", () =>{
  const wrapper = rtl.render(<App />)
  wrapper.debug()
})

// test("show text", () => {
//   const wrapper = rtl.render(<App />)
//   const element = wrapper.getByText(/meet our players/i) 
//   expect(element).toBeVisible()
// });
