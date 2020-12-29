import React from "react";
import ReactDom from "react-dom";
import { render } from "@testing-library/react";
import Logo from "../Images/OLX.png";
import Sell from "../Images/sell.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../Css/Header.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import QuestionAnswerRoundedIcon from "@material-ui/icons/QuestionAnswerRounded";
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


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
      <li className="nav-item search-bar2">
        <form className="form-inline2 my-2 my-lg-0">
          <SearchIcon className="search-btn" style={{ fontSize: 35, padding: 4, color: '#000', backgroundColor: '#fff', alignItems: 'center' }} />
          <input
            className="form-control2 mr-sm-2"
            type="search"
            placeholder="Pakistan"
            aria-label="Search"
          />
          <KeyboardArrowDownIcon className="search-btn2" style={{ fontSize: 35, padding: 4, color: '#000', backgroundColor: '#fff', alignItems: 'center' }} />
        </form>
      </li>
      <li className="nav-item search-bar">

        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Find Cars, Mobile Phones and more..."
            aria-label="Search"
          />
          <SearchIcon className="search-btn" style={{ fontSize: 35, padding: 4, color: '#fff', backgroundColor: '#000', fontWeight: 'bold', alignItems: 'center' }} />
        </form>
      </li>

      <li className="nav-item">
        <QuestionAnswerRoundedIcon
          className="fas"
          style={{ fontSize: 20 }}
          color="primary"
        />
        {/* <i class="fa fas fa-comment-o" aria-hidden="true"></i> */}
      </li>
      <li className="nav-item">
        {/* <i class="fa fas fa-bell" aria-hidden="true"></i>         */}
        <NotificationsIcon
          className="fas"
          style={{ fontSize: 30 }}
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
