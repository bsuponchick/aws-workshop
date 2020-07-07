import React from 'react';
import { Box, Grid } from '@material-ui/core';
import GettingStarted from './GettingStarted';
import PostList from './PostList';
import Suggestions from './Suggestions';
import UserInfo from './UserInfo';

export default function Dashboard() {
    const suggestions = [{
        username: 'markymark',
        fullName: 'Mark Griffis',
        avatarUrl: `https://www.aviture.us.com/hubfs/Headshots/Mark%20Griffis%20Headshot.png`
    }, {
        username: 'itskathy',
        fullName: 'Katherine Underwood',
        avatarUrl: `https://www.aviture.us.com/hubfs/KathyUnderwood_Square.jpg`
    }, {
        username: 'jerrykoske',
        fullName: 'Jerry Koske',
        avatarUrl: `https://www.aviture.us.com/hubfs/Headshots/Jerry%20Koske%20Headshot.png`
    }, {
        username: 'dailycrusade',
        fullName: 'Steve Miller',
        avatarUrl: `https://www.aviture.us.com/hubfs/SteveMiller.jpg`
    }, {
        username: 'melissacregar',
        fullName: 'Melissa Cregar',
        avatarUrl: `https://www.aviture.us.com/hubfs/Headshots/Melissa-4.jpg`
    }];

    const posts = [{
        username: 'aviture',
        avatarUrl: `https://www.aviture.us.com/hubfs/Website%20Rebrand%20-%202019/2019%20Rebrand%20Assets/AVT-Rebrand-Red-Favicon-01.svg`,
        likes: 3,
        imageUrl: 'https://www.covenantcare.com/wp-content/uploads/2018/06/CC_4thJuly2016.png',
        comments: [],
        message: 'Have a safe and happy 4th of July weekend!',
        timestamp: '2020-07-04T09:34:00'
    }, {
        username: 'decision_logic',
        avatarUrl: `https://decisionlogic.co/wp-content/uploads/2020/07/DCL-20-001-Social-Profile_Picture_Twitter_Av01-300x300.jpg`,
        likes: 12,
        imageUrl: 'https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/fr/e15/s1080x1080/106720291_109854710676735_6665314140780731576_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com&_nc_cat=103&_nc_ohc=Dt6i5duzLX8AX-hNNRe&oh=bd9bbb4a68a611f6c2a531f0e5ffa96f&oe=5F2DFD82',
        comments: [],
        message: 'Cheers to a wonderful 4th of July weekend!',
        timestamp: '2020-07-04T09:34:00'
    },{
        username: 'ashleighreeker',
        avatarUrl: `https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/242554_534997660364_120764_o.jpg?_nc_cat=109&_nc_sid=ba80b0&_nc_ohc=_EM2sGpJURkAX-knI3X&_nc_ht=scontent-dfw5-1.xx&oh=03661b24646918c84e719059267b523b&oe=5F28BCD8`,
        likes: 67,
        imageUrl: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        comments: [{
            username: 'bsuponchick',
            message: `I'll bring the fun!  By fun I mean my wife, you know I'm not the fun one...`
        }, {
            username: 'ashleighreeker',
            message: `We all knew what you meant.`
        }, {
            username: 'dasmixan',
            message: `Did someone say Cabo?`
        }],
        message: `Ocean, my friend, how I miss you!  Who's in for a 2021 beach party eh?  I'll bring the bacon!`,
        timestamp: '2020-07-05T09:34:00'
    }];

    return (
        <Grid container spacing={3}>
            <Grid item xs={8}>
                <Box mb={2}>
                    <GettingStarted/>
                </Box>
                <PostList posts={posts}/>
            </Grid>
            <Grid item xs={4}>
                <Box mb={2}>
                    <UserInfo
                        username="bsuponchick"
                        fullName="Brandon Suponchick"
                        avatarSize={7}
                        avatarUrl={`https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/49635227_2615791525104260_7169389594960461824_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=ksKbaxNyeJ0AX9tT0DD&_nc_ht=scontent-dfw5-2.xx&oh=e7d521ad0724aed48bdcb7ecfe529c0c&oe=5F296565`}
                    />
                </Box>
                <Suggestions suggestions={suggestions}/>
            </Grid>
        </Grid>
    );
}
