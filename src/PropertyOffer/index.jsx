import React from "react";
import ReactDOMClient from "react-dom/client";
import { Propertice } from "./screens/Propertice";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Propertice />);
