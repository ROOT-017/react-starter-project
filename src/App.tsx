import React from "react";
import "./App.css";
import NavBar from "./components/navbar/navBar";
import Hero from "./components/landing/Hero";
import Card from "./components/card/Card";
import { siteData } from "./data";
const App = () => {
  return (
    <div className="main">
      <NavBar />
      <Hero />
      <div className="card-container">
        {siteData.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            color={item.color}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
