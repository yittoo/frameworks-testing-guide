import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import { findByTestAttr } from "../test/testUtils";

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} initialState - Initial state for this setup - soon to be used by redux
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  return shallow(<App />)
};

describe("App", () => {
  it("renders without crashing", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-app")
    expect(component.length).toBe(1);
  });
});
