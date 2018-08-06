import React from 'react'
import { withStyles } from '@material-ui/core'
import classNames from 'classnames'

import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import FolderIcon from '@material-ui/icons/Folder'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import CommentIcon from '@material-ui/icons/Comment'

import StarRating from './StarRating'


const styles = theme => ({
    about: {
        height: 500,
        marginTop: 100
    },
    avatar: {
        height: 350,
        width: 350,
        backgroundColor: 'red',
        margin: '0 auto'
    },
    listItem: {
        textAlign: 'left',
    }
})


const AboutMe = (props) => {
    const { classes } = props
    const skills = [
        {name: 'python', progress: 5},
        {name: 'python', progress: 5},
        {name: 'python', progress: 5},
        {name: 'python', progress: 5},
        {name: 'python', progress: 5},
        {name: 'python', progress: 5}
    ]
    return (
        <div className={classNames(classes.about, "about-me")}>
            <Grid container>
                <Grid xs={4}>
                    <Avatar className={classes.avatar}>
                        <FolderIcon />
                    </Avatar>
                    <br />
                    <Typography variant="headline">
                        It's me :)
                    </Typography>
                </Grid>
                <Grid xs={8}>
                    <List>
                        {skills.map((skill, i) => (
                            <ListItem
                                key={i}
                                role={undefined}
                                dense
                                button
                                className={classes.listItem}
                            >
                                <ListItemText disableTypography primary={<Typography variant="title">{skill.name}</Typography>}/>
                                <ListItemSecondaryAction>
                                    <StarRating active={skill.progress} nonActive={5 - skill.progress} />
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(AboutMe)