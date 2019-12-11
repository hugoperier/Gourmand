import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import EditIcon from "@material-ui/icons/Edit";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support


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

export default function EditUserModal (props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [typeId, setTypeId] = React.useState("");

  console.log(props)
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = event => {
    setTypeId(event.target.value);
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
        <EditIcon />
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
            <h2 id="spring-modal-title">Hugo PERIER</h2>
            <hr></hr>

            <form className={classes.root} noValidate autoComplete="off">                      
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">
                  Grade
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={typeId}
                  onChange={handleChange}
                >
                  <MenuItem value={1}>User</MenuItem>
                  <MenuItem value={2}>Moderator</MenuItem>
                  <MenuItem value={3}>Administrator</MenuItem>
                </Select>
              </FormControl>
              <FormControlLabel
                style={{
                  marginTop: "20px",
                  marginBottom: "20px"
                }}
                value="top"
                control={<Checkbox color="primary" />}
                label="Email Validated"
                labelPlacement="top"
              />
              <FormControlLabel
                value="top"
                control={<Checkbox color="primary" />}
                label="Actif"
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
                Update
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
