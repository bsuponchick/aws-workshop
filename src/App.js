import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Paper } from '@material-ui/core';
import PrimaryNavigation from './components/PrimaryNavigation';
import Dashboard from './components/Dashboard';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#2f4f60',
            main: '#002736',
            dark: '#000010',
            contrastText: '#fff',
        },
        secondary: {
            light: '#6fadb7',
            main: '#3f7e87',
            dark: '#03525a',
            contrastText: '#fff',
        },
    },
});

const useStyles = makeStyles((theme) => ({
    content: {
        marginTop: theme.spacing(5),
    },
}));

export default function BasicExample() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <PrimaryNavigation />

                <Container className={classes.content} maxWidth="md">
                    <Paper elevation={0}>
                        <Switch>
                            <Route exact path="/">
                                <Dashboard />
                            </Route>
                            <Route path="/explore">
                                <Explore />
                            </Route>
                            <Route path="/profile">
                                <Profile />
                            </Route>
                        </Switch>
                    </Paper>
                </Container>
            </Router>
        </ThemeProvider>
    );
}

// You can think of these components as "pages"
// in your app.

function Explore() {
    return (
        <div>
            <h2>Explore</h2>
        </div>
    );
}

function Profile() {
    return (
        <div>
            <h2>Profile</h2>
        </div>
    );
}
