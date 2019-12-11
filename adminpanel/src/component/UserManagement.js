import React, { Fragment } from "react";
import TextField from "@material-ui/core/textfield";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { ReactComponent as Logo } from "../style/contact.svg";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import EditUserModal from './EditUserModal'
import { Paper } from "@material-ui/core";

const users = [
  {
    name: "hugo",
    surname: "perier",
    age: 21,
    pic: undefined,
    registration_date: "27/11/2019",
    email: "hugo.perier@epitech.eu",
    email_verified: true,
    ku_id: 2094910,
    is_actif: true,
    grade: "Administrator"
  },
  {
    name: "marin",
    surname: "brunel",
    age: 26,
    pic: undefined,
    registration_date: "01/12/2019",
    email: "marin.brunel@epitech.eu",
    email_verified: false,
    ku_id: 2094910,
    is_actif: true,
    grade: "User"
  },
  {
    name: "Othman",
    surname: "Moshine",
    age: 21,
    pic: undefined,
    registration_date: "07/11/2019",
    email: "othamn.moshine@epitech.eu",
    email_verified: true,
    ku_id: 2094910,
    is_actif: false,
    grade: "User"
  },
  {
    name: "Renaud",
    surname: "Pelet",
    age: 21,
    pic: undefined,
    registration_date: "27/11/2019",
    email: "hugo.perier@epitech.eu",
    email_verified: false,
    ku_id: 2094910,
    is_actif: true,
    grade: "User"
  }
];

function contactInformations(user) {
  if (user === null || user === undefined) return null;

  return (
    <Fragment>
      <Paper style={{ padding: "20px" }}>
        <Grid container spacing={3}>
          <Grid item>
            <Logo style={{ width: "200px" }} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={3}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {user.name} {user.surname}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {user.age} year old
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Registered the {user.registration_date}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {user.email}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: {user.ku_id}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={2} container direction="column" spacing={3}>
              <Grid item>
                <Typography variant="subtitle1">{user.grade}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  {user.is_actif ? "Actif" : "Unactive"}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  {user.email_verified
                    ? "Email Verified"
                    : "Email not verified"}
                </Typography>
              </Grid>
              <Grid item>
                <EditUserModal />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
}

export default function UserManagement(classes) {
  const [contact, setContact] = React.useState(null);
  const contactInfo = contactInformations(contact);

  const handleChangeContact = (event, newContact) => {
    setContact(newContact);
  };

  return (
    <Fragment>
      <Autocomplete
        id="debug"
        options={users}
        getOptionLabel={option => option.name}
        debug
        onChange={handleChangeContact}
        renderInput={params => (
          <TextField
            {...params}
            label="Search an User"
            margin="normal"
            style={{ width: "400px", marginBottom: "60px" }}
          />
        )}
        renderOption={option => <Fragment>{option.name}</Fragment>}
      />
      {contactInfo}
    </Fragment>
  );
}
