import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from "@material-ui/core/textfield";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from '@material-ui/core/Button';
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import {addPlaces} from "../services/api"

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

export default function PlaceManagementModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [typeId, setTypeId] = React.useState("");
  const [name, setName] = React.useState("");
  const [lat, setLat] = React.useState("");
  const [long, setLong] = React.useState("");

  const handleName = event => {
    setName(event.target.value)
  }
  const handleLat = event => {
    setLat(event.target.value)
  }
  const handleLong = event => {
    setLong(event.target.value)
  }  
  const handleChange = event => {
    setTypeId(event.target.value);
  };

  const handleSubmit = async () => {
      addPlaces({label:name, latitude:lat, longitude:long, typeId})      
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="button" variant="contained" color="primary" style={{'marginBottom':'20px'}} onClick={handleOpen} >
        Add a place
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
            <h2 id="spring-modal-title">Add a place</h2>
            <hr></hr>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Name"
                onChange={handleName}
                fullWidth={true}
                variant="outlined"
                margin="normal"
              />
              <TextField
                id="outlined-basic"
                label="Lat"
                onChange={handleLat}
                variant="outlined"
                margin="normal"
                style={{ "marginRight": "20px" }}
              />
              <TextField
                id="outlined-basic"
                label="Long"
                onChange={handleLong}
                variant="outlined"
                margin="normal"
              />
              <br></br>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">
                  Type Place
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={typeId}                  
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Bar</MenuItem>
                  <MenuItem value={2}>Cafe</MenuItem>
                  <MenuItem value={3}>Restaurant</MenuItem>
                  <MenuItem value={4}>Conveniant Store</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <Button variant="contained" color="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="contained" color="primary" style={{"float":"right"}} onClick={handleSubmit}>
                Add
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
