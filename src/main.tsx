import ReactDOM from "react-dom/client";
import { Provider as StoreProvider } from "react-redux";
import App from "./App.tsx";
import "./index.css";
import { store } from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);
