import React from 'react'
import { withStyles } from '@material-ui/core'
import classNames from 'classnames'


const styles = theme => ({
    background: {
        // backgroundColor: 'grey'
    },
    stars: {

    },
    listItem: {
        display: 'inline',
        margin: theme.spacing.unit
    },
    active: {
        color: 'purple',
        zoom: 2
    },
    nonActive: {
        color: 'grey',
        zoom: 2
    }
})

const StarRating = (props) => {
    const { classes } = props
    const stars = Array.apply(null, Array(props.active)).map(function () {})
    const nonActive = Array.apply(null, Array(props.nonActive)).map(function () {})
    return (
        <div className={classes.background}>
            <ul className={classes.stars} >
                {
                    stars.map((star, i) => {
                        return (
                            <li className={classes.listItem}><span className={classNames("fa fa-star", classes.active)}></span></li>
                        )
                    })
                }
                {
                    nonActive.map((star, i) => {
                        return (
                            <li className={classes.listItem}><span className={classNames("fa fa-star", classes.nonActive)}></span></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default withStyles(styles)(StarRating)