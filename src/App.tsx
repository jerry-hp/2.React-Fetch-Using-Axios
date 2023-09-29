import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Detail from "./component/detail";
import Home from "./component/home";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
