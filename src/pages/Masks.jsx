import React, { useState } from "react";
import Burger from "../components/Burger";
import Menu from "../components/Menu";

const Masks = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="App-header">
      <div className="Title-text">Masked Contexts</div>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </header>
  );
};

export default Masks;
