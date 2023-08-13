import React from "react";
import { Link } from "react-router-dom";
import style from './Nav.module.css'
import Exit from '../../assets/Exit.png'
import Create from '../../assets/Create.png'
import Home from '../../assets/Logo.png'

const Nav = () => {

  return (
    <nav className={style.nav}>

      <div >
        <Link to={"/"} className={style.contExit}>
          <span className={style.spanExit} >EXIT</span>
          <button 
          className={style.btnExit}
          ><img
          src={Exit}
          width={70}
          height={70}
          alt="exit" />
          </button>
        </Link>
      </div>

      <div>
        <Link to={"/Home"} className={style.contHome}>
          <button
            className={style.btnHome}
          ><img
          src={Home}
          width={260}
          height={100}
          alt="home" />
          </button>
        </Link>
      </div>

      <div>
        <Link to={"/Create"} className={style.contCreate}>
          <button
            className={style.btnCreate}
          ><img
          src={Create}
          width={60}
          height={70}
          alt="Create" />
          </button>
          <span className={style.spanCreate} >CREATE</span>
        </Link>
      </div>

    </nav>
  );
};

export default Nav;
