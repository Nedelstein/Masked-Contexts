import React, { useState } from "react";
import ConversationsMasonry from "../components/ConversationsMasonry";
//menu
import Burger from "../components/Burger";
import Menu from "../components/Menu";

const Conversations = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="App-header">
      <div className="Title-text">Masked Contexts</div>

      <ConversationsMasonry />
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </header>
  );
};

export default Conversations;
