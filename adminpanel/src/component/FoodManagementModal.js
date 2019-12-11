import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from "@material-ui/core/textfield";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support

const places = [
  { title: "Futurus" },
  { title: "Petit le pommier" },
  { title: "Moms Touch" },
  { title: "Hanshop" },
  { title: "GS-25" },
  { title: "GS-25 Futurus" },
  { title: "Benches'top" },
  { title: "Buffet Futurus" },
  { title: "Coffe Bean" },
  { title: "CityPop" },
  { title: "Bobby London" },
  { title: "BBQ food" },
  { title: "Veritas" }
];

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    }
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func
};

export default function FoodManagementModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        type="button"
        variant="contained"
        color="primary"
        style={{ marginBottom: "20px" }}
        onClick={handleOpen}
      >
        Add a food
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="spring-modal-title">Add a food</h2>
            <hr></hr>            
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                margin="normal"
                style={{ marginRight: "20px" }}
              />
              <FormControl                
                className={classes.margin}
                variant="outlined"
                style={{"marginTop":"16px"}}
              >
                <InputLabel htmlFor="outlined-adornment-amount">
                  Price
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">￦</InputAdornment>
                  }
                  labelWidth={60}
                />
              </FormControl>
              <Autocomplete
                id="debug"
                options={places}
                getOptionLabel={option => option.title}
                debug
                renderInput={params => (
                  <TextField
                    {...params}
                    label="Place of the food"
                    margin="normal"
                    fullWidth
                  />
                )}
                renderOption={option => <Fragment>{option.title}</Fragment>}
              />
              <TextField
                id="outlined-basic"
                label="Cal"
                variant="outlined"
                margin="normal"
              />
              <br></br>
              <FormControlLabel
                style={{
                  marginTop: "20px",
                  marginBottom: "20px"
                }}
                value="top"
                control={<Checkbox color="primary" />}
                label="Contain Meal"
                labelPlacement="top"
              />
              <FormControlLabel
                value="top"
                control={<Checkbox color="primary" />}
                label="Contain Alcohol"
                labelPlacement="top"
              />
              <FormControlLabel
                value="top"
                control={<Checkbox color="primary" />}
                label="Contain Pork"
                labelPlacement="top"
              />
              <br></br>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{ float: "right" }}
              >
                Add
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
