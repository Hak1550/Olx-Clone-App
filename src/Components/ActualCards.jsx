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

class ActualCards extends Component {


  render() {

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

    console.log(this.props)

    return (
      <div>

        <div className="row">
          <Card onClick={() => this.props.selectedProduct()} className="card col-lg-10">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={this.props.image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.props.price}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {this.props.details}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                {this.props.area}
              </Button>
              <Button size="small" color="primary">
                {this.props.date}
              </Button>
            </CardActions>
            <div className="sideLine"></div>
          </Card>
        </div>

      </div>
    )
  };
}


// const mapStateToProps = (state) => ({
//   // CardDetails: state.CardDetails,
// })

// // function mapDispatchToProps(dispatch) {
// //   return bindActionCreators({ selectedProduct: selectedProduct }, dispatch)
// // }
export default ActualCards

// connect(mapStateToProps, null)



