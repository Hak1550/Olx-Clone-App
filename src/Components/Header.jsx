import React from "react";
import ReactDom from "react-dom";
import { render } from "@testing-library/react";
import Logo from "../Images/OLX.png";
import Sell from "../Images/sell.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../Css/Header.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import QuestionAnswerRoundedIcon from "@material-ui/icons/QuestionAnswerRounded";

function Header() {
  return (
    <ul className="nav fixed-top justify-content-center ">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          <Link to="/">
            <img src={Logo} width="50" />
          </Link>
        </a>
      </li>
      <li className="nav-item">
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </li>

      <li className="nav-item">
        <QuestionAnswerRoundedIcon
          className="fas"
          style={{ fontSize: 40 }}
          color="primary"
        />
        {/* <i class="fa fas fa-comment-o" aria-hidden="true"></i> */}
      </li>
      <li className="nav-item">
        {/* <i class="fa fas fa-bell" aria-hidden="true"></i>         */}
        <NotificationsIcon
          className="fas"
          style={{ fontSize: 40 }}
          color="primary"
        />
      </li>
      <li className="nav-item">
        <Link to="/sellform">
          <img src={Sell} className="sellBtn" />
        </Link>
        {/* <button type="button" className="btn btn-success btn-sm sellBtn">SELL</button>         */}
      </li>
    </ul>
  );
}
export default Header;
