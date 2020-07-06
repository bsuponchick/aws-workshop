import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Box, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    avatar: (props) => ({
        width: theme.spacing(props.avatarSize === 'small' ? 4 : 7),
        height: theme.spacing(props.avatarSize === 'small' ? 4 : 7),
    }),
    username: {
        fontWeight: theme.typography.fontWeightBold,
    }
}));

function UserInfo(props) {
    const classes = useStyles(props);

    return (
        <Grid container spacing={1} alignItems="center">
            <Grid item xs={props.avatarSize === 'small' ? 1 : 2} className={classes.flush}>
                <Avatar className={classes.avatar} src={props.avatarUrl} />
            </Grid>
            <Grid item xs={10}>
                <Box pl={2}>
                    <Typography variant="subtitle2" className={classes.username}>
                        {props.username}
                    </Typography>
                    <Typography variant="subtitle2">{props.fullName}</Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

UserInfo.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    avatarSize: PropTypes.oneOf(['small', 'large']),
};

export default UserInfo;
