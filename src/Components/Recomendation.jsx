import React from "react";
import ActualCards from "./ActualCards";
import CardDetails from "./CardDetail";
import "../Css/Card.css";
import { Link } from "react-router-dom";

const Recomendation = () => {
  // const procduct = (data) => {
  //   onclick = console.log("hi");
  // };

  return (
    <>
      <h3>Fresh Recomendations</h3>

      <Link to="/product">
        <div className="CardsBunch">
          {CardDetails.map((val) => {
            return (
              <ActualCards
                image={val.image}
                price={val.price}
                details={val.details}
                area={val.area}
                date={val.date}
                procduct={val.procduct}
              />
            );
          })}
          ;
        </div>
      </Link>
    </>
  );
};
export default Recomendation;
