import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Explore(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={270} className={classes.gridList}>
                {props.tiles.map((tile) => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar title={tile.title} subtitle={<span>by: {tile.author}</span>} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
