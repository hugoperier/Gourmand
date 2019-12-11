import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import AssignmentIcon from "@material-ui/icons/Assignment";
import HistoryIcon from "@material-ui/icons/History";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import PlaceIcon from "@material-ui/icons/Place";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import PlaceManagementModal from "./PlaceManagementModal";
import PlaceTable from "./PlaceTable";
import FoodManagementModal from "./FoodManagementModal";
import UserManagementPage from "./UserManagement";
import {getAllPlaces} from '../services/api'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actualPage: "dashboard"
    };
  }

  handleMenuClickChangePage = async newPage => {
    const { actualPage } = this.state;

    if (newPage !== actualPage) {
      const placesData = await getAllPlaces();
      this.setState({ actualPage: newPage, placesData });
    }
  };

  Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit">Gourmand</Link> {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  render() {
    return <this.Dashboard />;
  }

  Dashboard = () => {
    const drawerWidth = 240;

    const useStyles = makeStyles(theme => ({
      root: {
        display: "flex"
      },
      toolbar: {
        paddingRight: 24 // keep right padding when drawer closed
      },
      toolbarIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        })
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      },
      menuButton: {
        marginRight: 36
      },
      menuButtonHidden: {
        display: "none"
      },
      title: {
        flexGrow: 1
      },
      drawerPaper: {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      },
      drawerPaperClose: {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(9)
        }
      },
      appBarSpacer: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto"
      },
      container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
      },
      paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column"
      },
      fixedHeight: {
        height: 240
      }
    }));

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Gourmand Aministrator Panel
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={0} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{this.mainListItems()}</List>
          <Divider />
          <List>{this.secondaryListItems()}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <this.dashboardPage
              classes={classes}
              fixedHeightPaper={fixedHeightPaper}
            />
            <this.placeManagementPage
              classes={classes}
              fixedHeightPaper={fixedHeightPaper}
            />
            <this.foodManagementPage
              classes={classes}
              fixedHeightPaper={fixedHeightPaper}
            />
            <this.userManagementPage classes={classes} />
          </Container>
        </main>
      </div>
    );
  };

  dashboardPage = ({ classes, fixedHeightPaper }) => {
    const { actualPage } = this.state;

    if (actualPage !== "dashboard") return null;

    return (
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>
              <Chart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <Deposits />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Orders />
            </Paper>
          </Grid>
        </Grid>
        <Box pt={4}>
          <this.Copyright />
        </Box>
      </Container>
    );
  };

  createData(name, long, lat, type) {
    return { name, long, lat, type };
  }

  placeManagementPage = ({ classes }) => {
    const { actualPage, placesData } = this.state;        
    const headCells = [
      { id: "name", numeric: false, disablePadding: false, label: "Name" },
      { id: "long", numeric: true, disablePadding: false, label: "Longitude" },
      { id: "lat", numeric: true, disablePadding: false, label: "Latitude" },
      {
        id: "type",
        numeric: false,
        disablePadding: false,
        label: "Type of place"
      }
    ];

    if (actualPage !== "placemanagement") return null;
    const data = placesData.map(elem => this.createData(elem.label, elem.longitude, elem.latitude, elem.type))

    return (
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <PlaceManagementModal />
          <PlaceTable data={data} headCells={headCells} />
        </Grid>
      </Container>
    );
  };

  createData2(name, place, price, meal) {
    return { name, place, price, meal };
  }

  foodManagementPage = ({ classes }) => {
    const { actualPage } = this.state;
    const headCells = [
      { id: "name", numeric: false, disablePadding: false, label: "Name" },
      { id: "place", numeric: true, disablePadding: false, label: "Place" },
      { id: "price", numeric: true, disablePadding: false, label: "Price" },
      {
        id: "meal",
        numeric: false,
        disablePadding: false,
        label: "Contain meal"
      }
    ];

    const data = [
      this.createData2("rice", "GS-25 Futurus", 1000, "no"),
      this.createData2("noodle", "GS-25 Futurus", 1200, "no"),
      this.createData2("chicken", "Citypop", 7000, "yes"),
      this.createData2("plat one", "futurus", 4000, "yes"),
      this.createData2("plat two", "futurus", 3500, "yes"),
      this.createData2("coffee", "Coffe bean", 2000, "no"),
      this.createData2("bibimbap", "hanshot", 1000, "yes"),
      this.createData2("curry", "hanshot", 3000, "yes"),
      this.createData2("salsa rico", "moms touch", 5000, "yes"),
      this.createData2("nemyang", "hanshot", 3000, "no"),
      this.createData2("beer", "Citypop", 2000, "no"),
      this.createData2("whisky", "Benches", 5000, "no"),
      this.createData2("green tea", "Coffe Bean", 1500, "no")
    ];

    if (actualPage !== "foodmanagement") return null;

    return (
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <FoodManagementModal />
          <PlaceTable data={data} headCells={headCells} />
        </Grid>
      </Container>
    );
  };

  userManagementPage = ({ classes }) => {
    const { actualPage } = this.state;
    if (actualPage !== "usermanagement") return null;

    return (
      <Container maxWidth="lg" className={classes.container}>
        <UserManagementPage />
      </Container>
    );
  };

  mainListItems = () => {
    return (
      <div>
        <ListItem
          button
          onClick={e => this.handleMenuClickChangePage("dashboard")}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary="Reporting" />
        </ListItem>
        <ListItem
          button
          onClick={e => this.handleMenuClickChangePage("placemanagement")}
        >
          <ListItemIcon>
            <PlaceIcon />
          </ListItemIcon>
          <ListItemText primary="Places Management" />
        </ListItem>
        <ListItem
          button
          onClick={e => this.handleMenuClickChangePage("foodmanagement")}
        >
          <ListItemIcon>
            <RestaurantIcon />
          </ListItemIcon>
          <ListItemText primary="Food Management" />
        </ListItem>
        <ListItem
          button
          onClick={e => this.handleMenuClickChangePage("usermanagement")}
        >
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="User Management" />
        </ListItem>
      </div>
    );
  };

  secondaryListItems = () => {
    return (
      <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Current month" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Last quarter" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Year-end sale" />
        </ListItem>
      </div>
    );
  };
}

export default Dashboard;
