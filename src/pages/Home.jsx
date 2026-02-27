import React from "react";
import { Button } from "../components";
import { useAppContext } from "../context/AppContext";

const Home = () => {
  const { state } = useAppContext();

  return (
    <div className="home-container">
      <h1>React Vite Application</h1>
      <p>Welcome to your new modular React application!</p>
      <Button onClick={() => console.log("Button clicked!")}>Click Me</Button>
    </div>
  );
};

export default Home;
