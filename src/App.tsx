import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Detail from "./component/detail";
import Home from "./component/home";
import PrivateRoute from "./component/priveteRoute";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<PrivateRoute />}>
              <Route path="/detail/:id" element={<Detail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
