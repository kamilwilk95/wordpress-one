const { render } = (window as any).wp.element;
import * as React from "react";
import { App } from "./App";
const container = document.getElementById(`react-app`);

if (container) {
  render(<App />, container);
}
