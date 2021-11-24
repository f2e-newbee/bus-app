import React from "react";
import { useSelector } from "react-redux";
import { selectFetch } from "./store/reducer/fetchReducer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NearByStop, RouteQuery, Home } from "./pages";
import { Loading } from "./components";

const App = () => {
  const { loading } = useSelector(selectFetch);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/near-by-stop" element={<NearByStop />}></Route>
          <Route path="/route-query" element={<RouteQuery />}></Route>
        </Routes>
      </BrowserRouter>
      {loading && <Loading />}
    </>
  );
};

export default App;
