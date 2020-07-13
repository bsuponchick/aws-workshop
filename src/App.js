import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Paper } from '@material-ui/core';
import PrimaryNavigation from './components/PrimaryNavigation';
import Dashboard from './components/Dashboard';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import useGlobal from './store';

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
    const [state, actions] = useGlobal();
    useEffect(() => {
        const loadData = async () => {
            await Promise.all([actions.getUser(), actions.getSuggestions(), actions.getPosts()]);
        };
        
        loadData();
    }, [actions]);

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <PrimaryNavigation user={state.user}/>

                <Container className={classes.content} maxWidth="md">
                    <Paper elevation={0}>
                        <Switch>
                            <Route exact path="/">
                                <Dashboard posts={state.posts} suggestions={state.suggestions} user={state.user}/>
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
