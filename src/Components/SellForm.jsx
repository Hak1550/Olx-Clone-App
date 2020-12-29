import React, { useStyles, useState } from 'react'
import { Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../Css/SellForm.css";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import SaveIcon from "@material-ui/icons/Save";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "../App";
import Firebase from '../Config/Firebase'



// class SellForm extends Component {
//   render() {
//     const useStyles = makeStyles((theme) => ({
//       root: {
//         "& > *": {
//           margin: theme.spacing(1),
//           width: "75ch",
//         },
//       },
//       inputs: {
//         display: "none",
//       },
//       roots: {
//         padding: "2px 4px",
//         display: "flex",
//         alignItems: "center",
//         width: 645,
//         flexDirection: "row",
//       },
//       inputss: {
//         marginLeft: theme.spacing(1),
//         flex: 1,
//       },
//       iconButton: {
//         padding: 10,
//       },
//       divider: {
//         height: 28,
//         margin: 4,
//       },
//     }));

const SellForm = () => {



  const classes = useStyles();
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });



  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.root}>
          <label htmlFor="contained-button-file" >
            <input
              accept="image/*"
              className={classes.inputs}
              id="contained-button-file"
              multiple
              type="file"
            />
            <div className="ImageBox"></div>

            <Button
              variant="contained"
              color="default"
              className={classes.button}
              component="span"
              startIcon={<CloudUploadIcon />}
            >
              Upload
          </Button>
          </label>
        </div>

        <TextField id="outlined-basic" label="Add Title" variant="outlined" />

        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={values.amount}
            onChange={handleChange("amount")}
            startAdornment={<InputAdornment position="start">Rs.</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>

        <Paper component="form" className={classes.roots}>
          <IconButton className={classes.iconButton} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            className={classes.inputss}
            placeholder="Search Google Maps"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton
            color="primary"
            className={classes.iconButton}
            aria-label="directions"
          >
            <DirectionsIcon />
          </IconButton>
        </Paper>

        <TextField
          id="outlined-multiline-static"
          label="Add Description"
          multiline
          rows={4}
          defaultValue=""
          placeholder="Write some details about product.."
          variant="outlined"
        />

        <Link to="../">
          <div className="btns">
            <Button
              variant="contained"
              color="primary"
              // size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
            >
              Save
          </Button>

            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
            >
              Delete
          </Button>
          </div>
        </Link>
      </form>

    </div>
  )
}

export default SellForm;





