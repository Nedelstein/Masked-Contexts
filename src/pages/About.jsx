import React, { useState } from "react";
import Burger from "../components/Burger";
import Menu from "../components/Menu";

const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="App-header">
      <div className="Title-text">Masked Contexts</div>
      <div className="Subtitle-text">This will be my about page</div>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </header>
  );
};

export default About;
