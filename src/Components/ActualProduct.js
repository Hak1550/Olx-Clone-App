import React, { Component } from 'react'
import "../Css/Product.css";
// import { render } from "@testing-library/react";
import "../Css/Product.css";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import BackBtn from "../Images/Back.png";



class ActualProduct extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Link to="/">
          <img src={BackBtn} className="backBtn" alt="back" />
        </Link>
        <div className="product">

          <div className="product-img" key={this.props.i}>
            <img src={this.props.image} className="product-image" alt="" />
          </div>
          <div className="product-detail">
            <ul className="">
              <li className="product-detail-list">
                <h3>
                  Name:{" "}
                  <span className="list-style" key={this.props.i}>
                    {this.props.details}
                  </span>{" "}
                </h3>
              </li>
              <li className="product-detail-list">
                <h3>
                  Price:{" "}
                  <span className="list-style" key={this.props.i}>
                    {this.props.price}
                  </span>{" "}
                </h3>
              </li>
              <li className="product-detail-list">
                <h3>
                  Area:{" "}
                  <span className="list-style" key={this.props.i}>
                    {this.props.area}
                  </span>{" "}
                </h3>
              </li>
              <li className="product-detail-list">
                <h3>
                  Date:{" "}
                  <span className="list-style" key={this.props.i}>
                    {this.props.date}
                  </span>{" "}
                </h3>
              </li>
              <li className="product-detail-list">
                <h3>
                  Details:{" "}
                  <span className="list-style" key={this.props.i}>
                    {this.props.details}
                  </span>{" "}
                </h3>
              </li>
              <li className="product-detail-list">
                <button className="chatbtn">Chat with seller</button>
              </li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
}



const mapStateToProps = (state) => ({
  CardDetails: state.CardDetails
  // productDatas: productDatas,

})
const mapDispatchToProps = (dispatch) => ({
  // selectedProduct: () => dispatch(selectedProduct())
})
export default connect(mapStateToProps, mapDispatchToProps)(ActualProduct)

