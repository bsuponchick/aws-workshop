import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Box, Button, Card, Grid, IconButton, TextField, Typography } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ReactMarkdown from 'react-markdown';
import Timestamp from 'react-timestamp';

const useStyles = makeStyles((theme) => ({
    post: {
        marginBottom: theme.spacing(8),
    },
    avatar: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    username: {
        fontWeight: theme.typography.fontWeightBold,
        marginLeft: theme.spacing(2),
    },
    header: {
        display: 'flex',
        alignItems: 'center',
    },
    image: {
        width: '100%',
    },
    interactionBar: {
        display: 'flex',
        alignItems: 'center',
    },
    timestamp: {
        color: theme.palette.grey,
    },
    text: {
        width: '100%',
    },
}));

function Post(props) {
    const classes = useStyles();
    const messageMarkdown = `**${props.username}** ${props.message}`;
    const messageDate = new Date(props.timestamp);

    const comments = props.comments.map((comment) => {
        const commentMarkdown = `**${comment.username}** ${comment.message}`;
        return <ReactMarkdown source={commentMarkdown} key={`${comment.username}-${new Date().getMilliseconds()}`}/>;
    });

    return (
        <Card variant="outlined" className={classes.post}>
            <Box p={3}>
                <div className={classes.header}>
                    <Avatar src={props.avatarUrl} className={classes.avatar} />
                    <Typography variant="subtitle2" className={classes.username}>
                        {props.username}
                    </Typography>
                </div>
            </Box>
            <Box>
                <img src={props.imageUrl} alt={props.message} className={classes.image} />
            </Box>
            <Box>
                <div className={classes.interactionBar}>
                    <IconButton>
                        <FavoriteBorderIcon />
                    </IconButton>
                    <IconButton ml={1}>
                        <ChatBubbleOutlineIcon />
                    </IconButton>
                </div>
            </Box>
            <Box pl={1} pr={3}>
                <ReactMarkdown source={messageMarkdown} />
                {comments}
            </Box>
            <Box pl={1} pr={1} pb={1}>
                <Typography variant="caption" className={classes.timestamp}>
                    <Timestamp relative date={messageDate} autoUpdate />
                </Typography>
            </Box>
            <Box pl={1} pr={1} pb={1}>
                <form noValidate autoComplete="off">
                    <Grid container alignItems="center">
                        <Grid item xs={10}>
                            <TextField label="Comment" variant="outlined" className={classes.text} />
                        </Grid>
                        <Grid item xs={2}>
                            <Box pl={2}>
                                <Button color="secondary" variant="text">
                                    Post
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Card>
    );
}

export default function PostList(props) {
    return (
        <React.Fragment>
            {props.posts.map((post) => {
                return (
                    <Post
                        username={post.username}
                        avatarUrl={post.avatarUrl}
                        likes={post.likes}
                        imageUrl={post.imageUrl}
                        message={post.message}
                        comments={post.comments}
                        timestamp={post.timestamp}
                        key={`${post.username}-${post.timestamp}`}
                    />
                );
            })}
        </React.Fragment>
    );
}
