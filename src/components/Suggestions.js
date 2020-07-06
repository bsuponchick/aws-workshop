import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid, Link } from '@material-ui/core';
import UserInfo from './UserInfo';

const useStyles = makeStyles((theme) => ({
    link: {
        cursor: 'pointer'
    }
}));

function Suggestion(props) {
    const classes = useStyles();

    return (
        <Grid container justify="center">
            <Grid item xs={10}>
                <UserInfo username={props.username} fullName={props.fullName} avatarSize='small' avatarUrl={props.avatarUrl}/>
            </Grid>
            <Grid container item xs={2} alignItems="center">
                <Link>
                    <Typography variant="caption" className={classes.link}>Follow</Typography>
                </Link>
            </Grid>
        </Grid>
    );
}

export default function Suggestions(props) {
    return (
        <React.Fragment>
            <Box mb={1}>
                <Typography variant="h6">Suggestions For You</Typography>
            </Box>
            {
                props.suggestions.map((suggestion) => {
                    return <Suggestion username={suggestion.username} fullName={suggestion.fullName} avatarUrl={suggestion.avatarUrl}/>;
                })
            }
        </React.Fragment>
    );
}
