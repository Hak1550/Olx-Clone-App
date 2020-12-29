// import React from "react";
// import ActualProduct from "./ActualProduct";
// import "../Css/Product.css";
// import BackBtn from "../Images/Back.png";
// import { Link } from "react-router-dom";
// import CardDetails from "./CardDetail";
// import { render } from "@testing-library/react";
// import {connect} from 'react-redux'
// import BackBtn from "../Images/Back.png";


// const Product = () => {
//   render();
//   return (
//     <>
//       <Link to="/">
//         <img src={BackBtn} className="backBtn" alt="back" />
//       </Link>
//       <div className="">
//         {CardDetails.map((val, i) => {
//           return (
//             <ActualProduct
//               key={i}
//               image={val.image}
//               details={val.details}
//               price={val.price}
//               area={val.area}
//               date={val.date}
//             />
//           );
//         })}
//         ;
//       </div>
//     </>
//   );
// };


// const mapStateToProps = (state) =>({
//   CardDetails: state.CardDetails
//   // productDatas: productDatas,
  
// })
// export default connect(mapStateToProps)(Product)
