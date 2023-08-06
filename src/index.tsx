import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const client = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
      staleTime: Infinity,
    },
  },
});

root.render(
  // <React.StrictMode>
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>,
  // </React.StrictMode>
);
