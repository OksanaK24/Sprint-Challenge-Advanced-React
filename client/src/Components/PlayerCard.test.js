import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PlayerCard from "./PlayerCard";
 

afterEach(rtl.cleanup);

const TesterPlayer1 = {
    name: "Lieke Martens", 
    country: "Netherlands", 
    searches: 6 
}

test("test player's name", () => {
    const wrapper = rtl.render(<PlayerCard player={TesterPlayer1} />);
    const element = wrapper.getByText(TesterPlayer1.name);
    expect(element).toHaveTextContent("Lieke Martens");
  });

const TesterPlayer2 = {
    name: "Giulia Gwinn", 
    country: "Germany", 
    searches: 3 
}

test("test player's country", () => {
    const wrapper = rtl.render(<PlayerCard player={TesterPlayer2} />);
    const element = wrapper.getByText(TesterPlayer2.country);
    expect(element).toHaveTextContent("Germany");
  });

const TesterPlayer3 = {
    name: "Mallory Pugh", 
    country: "United States", 
    searches: 4 
}

test("test player's number of search", () => {
    const wrapper = rtl.render(<PlayerCard player={TesterPlayer3} />);
    const element = wrapper.getByText(TesterPlayer3.searches.toString());
    // expect(element).Number(toHaveTextContent("4"));
    expect(element).toHaveTextContent("4");
  });