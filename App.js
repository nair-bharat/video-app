import ReactDOM from "react-dom/client";
import React from "react";
import Head from "./src/components/Head";
import Body from "./src/components/Body";
import store from "./src/utils/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Head />
      <Body />
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
