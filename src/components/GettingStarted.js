import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { Box, Card, Grid, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    actionContainer: {
        textAlign: 'center',
    },
    action: {
        fontWeight: theme.typography.fontWeightBold,
    },
    iconContainer: {
        textAlign: 'center',
        padding: theme.spacing(2),
    },
    icon: {
        height: theme.spacing(7),
        width: theme.spacing(7),
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: theme.palette.grey,
        borderRadius: theme.spacing(4),
    },
    caption: {
        textAlign: 'center',
    },
    buttonContainer: {
        textAlign: 'center',
        padding: theme.spacing(2),
    },
}));

export default function GettingStarted() {
    const classes = useStyles();

    return (
        <Box mb={4}>
            <Box mb={2}>
                <Typography variant="h6">Getting Started</Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Card variant="outlined">
                        <div className={classes.iconContainer}>
                            <PhoneEnabledIcon className={classes.icon} />
                        </div>
                        <div className={classes.actionContainer}>
                            <Typography className={classes.action}>Add Phone Number</Typography>
                        </div>
                        <div className={classes.caption}>
                            <Typography variant="caption">
                                Add your phone number so you can reset your password, find friends and more.
                            </Typography>
                        </div>
                        <div className={classes.buttonContainer}>
                            <Button variant="contained" color="primary">
                                Add Phone Number
                            </Button>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card variant="outlined">
                        <div className={classes.iconContainer}>
                            <PersonOutlineIcon className={classes.icon} />
                        </div>
                        <div className={classes.actionContainer}>
                            <Typography className={classes.action}>Complete Your Profile</Typography>
                        </div>
                        <div className={classes.caption}>
                            <Typography variant="caption">
                                Add the finishing touches to your profile so your friends know it's you.
                            </Typography>
                        </div>
                        <div className={classes.buttonContainer}>
                            <Button variant="contained" color="primary">
                                Complete Profile
                            </Button>
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}
