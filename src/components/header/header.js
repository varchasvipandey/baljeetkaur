import React from "react";

import "./header.css";

//components
import Button from "../../components/button/button";

const header = () => {
  return (
    <header className="header" id="home">
      <div className="header__text-box">
        <div className="heading-primary">
          <p className="heading-primary--title">Baljeet Kaur</p>
          <p className="heading-primary--sub">Fashion, fitness and blog</p>
        </div>
        <Button text="Explore profile" location="#section-introduction" />
      </div>
    </header>
  );
};

export default header;
