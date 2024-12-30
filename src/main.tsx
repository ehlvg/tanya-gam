import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme
      accentColor="bronze"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      radius="large"
    >
      <App />
    </Theme>
  </StrictMode>
);