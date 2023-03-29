import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ModalProvider } from "./context/modal.context";
import { ProSidebarProvider } from "react-pro-sidebar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProSidebarProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </ProSidebarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
