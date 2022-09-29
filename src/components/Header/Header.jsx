import React from "react";
import NewtodoForm from "./Form/NewtodoForm";

function Header() {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewtodoForm />
    </header>
  );
}

export default Header;
