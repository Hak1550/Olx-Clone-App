import React, { Component } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../Css/Card.css";
import { render } from "@testing-library/react";
import { connect } from 'react-redux'
import { selectedProduct } from '../Store/action';
import { bindActionCreators } from 'redux'
import ActualProduct from './ActualProduct'
import { Link } from 'react-router-dom';


function ActualCards(props) {



  // const selectedProduct = () =>{

  //   let productDatas = 
  //     {
  //       image:  this.props.image,
  //       details:  this.props.details,
  //       price: this.props.price,
  //       area: this.props.area,
  //       date: this.props.date
  //    }


  //    console.log('selected product====>',productDatas)
  // }
  //  const classes = useStyles();

  //  const useStyles = makeStyles({
  //    root: {
  //      maxWidth: 345,
  //    },
  //  });

  console.log(props)

  return (
    <div>

      <div className="row">
        <Link to="/actualproduct">
          <Card className="card col-lg-10">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={props.image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.price}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.details}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                {props.area}
              </Button>
              <Button size="small" color="primary">
                {props.date}
              </Button>
            </CardActions>
            <div className="sideLine"></div>
          </Card>
        </Link>
      </div>

    </div>
  )
};


const mapStateToProps = (state) => ({
  CardDetails: state.CardDetails,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectedProduct: selectedProduct }, dispatch)
}
export default connect(mapStateToProps, null)(ActualCards)





