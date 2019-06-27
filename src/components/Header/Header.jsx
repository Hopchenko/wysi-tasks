import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { withRouter } from 'react-router-dom';

import { useAuth0 } from '../../auth/authProvider';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Header = props => {
  const classes = useStyles();

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () => {
    logout();
    // eslint-disable-next-line react/prop-types
    props.history.push('/');
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Jira 2.0
          </Typography>

          {!isAuthenticated && (
            <Button
              color="inherit"
              onClick={() =>
                loginWithRedirect({
                  redirect_uri: `${window.location.origin}`
                })
              }
            >
              Log in
            </Button>
          )}

          {isAuthenticated && (
            <Button color="inherit" onClick={() => logoutWithRedirect()}>
              Log out
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
