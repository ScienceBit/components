import React from "react";
import { NavLink, Link } from "react-router-dom";
import './styles.css';
import Rota from "../../routes";

function Button() {
    return (
      <NavLink to='/'>
        <button className="btnContainer"> Sig UP</button>

      </NavLink>

    );

}

export default Button;