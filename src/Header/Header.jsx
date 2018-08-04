import React from 'react'
import { withStyles } from '@material-ui/core';

import Image from './bg0.jpg'


const styles = theme => ({
    header: {
        height: '90vh',
        backgroundImage: `url(${Image})`,
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        alignItems: 'center',
        display: 'flex',
        border: 0,
        margin: 0,
        padding: 0,
        transform: 'translate3d(0px, 0px, 9px)',
        overflow: 'hidden',
        position: 'relative'
    },
    title: {
        textAlign: 'center'
    },
    h1: {
        color: 'white',
        fontSize: 60,
        fontWeight: 700
    },
    badge: {
        position: 'relative',
        textTransform: 'uppercase',
        right: -10,
        padding: '10px 18px',
        top: -30,
        background: '#fff',
        borderRadius: 3,
        color: '#000',
        lineHeight: 22,
        fontSize: 22,
        fontWeight: 700,
        boxShadow: '0 5px 5px -2px rgba(31,31,31,.4)'
    }
})

const Header = (props) => {
    const { classes } = props
    return (
        <div className={classes.header}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 ml-auto mr-auto">
                        <div className={classes.title}>
                            <h1 className={classes.h1}> Prosvirov Kirill
                                <span className={classes.badge}>
                                    Portfolio
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(Header)