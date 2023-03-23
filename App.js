import ReactDOM from "react-dom/client";
import React from "react";
import Head from "./src/components/Head";
import Body from "./src/components/Body";
import store from "./src/utils/store";
import WatchPage from "./src/components/WatchPage";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./src/components/MainContainer";

const App = () => {
  return (
    <Provider store={store}>
      <Head />
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
