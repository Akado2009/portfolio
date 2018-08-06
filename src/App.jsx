import React from 'react'

import Navigation from './Navigation/Navigation'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import AboutMe from './About/AboutMe'

import { withStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'


const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        margin: '0 auto',
        width: '90%',
        marginTop: -100,
        marginBottom: 50,
        borderRadius: 10,
    },
    wrapper: {
        textAlign: 'center',
    },
    divider: {
        height: 4
    }
})


const App = (props) => {
    const { classes } = props
    return (
        <div className={classes.wrapper}>
            <Header />
            <Navigation />
            <Paper className={classes.root} elevation={10} rounded={true}>
                <div style={{height: 700, backgroundColor: 'white'}} className="projects">
                </div>
                <Divider className={classes.divider}/>
                <AboutMe />
            </Paper>
            <Footer />
        </div>
    )
}


export default withStyles(styles)(App)