import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NearByStop, RouteQuery, Home } from "./pages";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/near-by-stop" element={<NearByStop />}></Route>
          <Route path="/route-query" element={<RouteQuery />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
