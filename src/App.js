import "./App.css";
import React from "react";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
      <Footer />
    </div>
  );
}

export default App;
