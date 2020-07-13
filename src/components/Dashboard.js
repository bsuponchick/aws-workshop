import React from 'react';
import { Box, Grid } from '@material-ui/core';
import GettingStarted from './GettingStarted';
import PostList from './PostList';
import Suggestions from './Suggestions';
import UserInfo from './UserInfo';

export default function Dashboard(props) {
    const { posts, suggestions, user} = props;
    return (
        <Grid container spacing={3}>
            <Grid item xs={8}>
                <Box mb={2}>
                    <GettingStarted />
                </Box>
                <PostList posts={posts} />
            </Grid>
            <Grid item xs={4}>
                <Box mb={2}>
                    <UserInfo
                        username={user.username}
                        fullName={user.fullName}
                        avatarSize="large"
                        avatarUrl={user.avatarUrl}
                    />
                </Box>
                <Suggestions currentUser={user} suggestions={suggestions} />
            </Grid>
        </Grid>
    );
}
