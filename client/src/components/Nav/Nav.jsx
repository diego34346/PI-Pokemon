import React from "react";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { getPokemons } from "../../redux/actions";
import style from './Nav.module.css'

const Nav = () => {
  // const dispatch = useDispatch();

  return (
    <nav className={style.nav}>
      {/* <img className={style.img} src="ram.png" alt="Rick" /> */}

      <div className={style.landing}>
        <Link to={"/"}>
          <button className={style.landing}>LANDING</button>
        </Link>
      </div>

      <div>
        <Link to={"/Home"}>
          <button
            className={style.btnHome}
            type="button"
          >HOME
          </button>
        </Link>
      </div>

      <div>
        <Link to={"/Form"}>
          <button>CREAR</button>
        </Link>
      </div>

    </nav>
  );
};

export default Nav;
