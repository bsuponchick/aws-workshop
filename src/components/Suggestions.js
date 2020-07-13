import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid, Link } from '@material-ui/core';
import UserInfo from './UserInfo';
import useGlobal from '../store';

const useStyles = makeStyles((theme) => ({
    link: {
        cursor: 'pointer',
    },
}));

function Suggestion(props) {
    const classes = useStyles();
    const [state, actions] = useGlobal();

    return (
        <Grid container justify="center">
            <Grid item xs={10}>
                <UserInfo
                    username={props.username}
                    fullName={props.fullName}
                    avatarSize="small"
                    avatarUrl={props.avatarUrl}
                />
            </Grid>
            <Grid container item xs={2} alignItems="center">
                <Link>
                    <Typography
                        variant="caption"
                        className={classes.link}
                        onClick={() => {
                            actions.follow(props.currentUser, props.username);
                        }}
                    >
                        Follow
                    </Typography>
                </Link>
            </Grid>
        </Grid>
    );
}

export default function Suggestions(props) {
    const suggestions = props.suggestions.filter((suggestion) => {
        return props.currentUser && props.currentUser.following ? props.currentUser.following.indexOf(suggestion.username) === -1 : false;
    });
    return (
        <React.Fragment>
            <Box mb={1}>
                <Typography variant="h6">Suggestions For You</Typography>
            </Box>
            {suggestions.map((suggestion) => {
                return (
                    <Suggestion
                        currentUser={props.currentUser.username}
                        username={suggestion.username}
                        fullName={suggestion.fullName}
                        avatarUrl={suggestion.avatarUrl}
                        key={suggestion.username}
                    />
                );
            })}
            {suggestions.length === 0 ? <div>No Suggestions</div> : null}
        </React.Fragment>
    );
}
