import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  const [progress, setProgress] = useState(0)

  return (
    <>
      <Router>
      <LoadingBar
        color="#f11946"
        progress={progress}
      />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                apikey="a32f9f52d425456496ade75a7cad5698"
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                apikey="a32f9f52d425456496ade75a7cad5698"
                country="in"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                apikey="a32f9f52d425456496ade75a7cad5698"
                country="in"
                category="sports"
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                apikey="a32f9f52d425456496ade75a7cad5698"
                country="in"
                category="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                apikey="a32f9f52d425456496ade75a7cad5698"
                country="in"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}
