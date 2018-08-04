import React from 'react'
import { withStyles } from '@material-ui/core'
import classNames from 'classnames'


const styles = theme => ({
    navbar: {
        border: 0,
        backgroundColor: '#fff',
        marginBottom: 20,
        boxShadow: '0 4px 18px 0 rgba(0,0,0,.12), 0 7px 10px -5px rgba(0,0,0,.15)',
        color: '#555'
    },
    name: {
        position: 'relative',
        color: 'inherit',
        height: '50px',
        lineHeight: '30px',
        fontSize: 24,
        padding: 5
    },
    navItem: {
        marginRight: 10
    },
    navLink: {
        color: '#555',
        '&:hover': {
            color: 'black'
        }
    }
})

const Navigation = (props) => {
    const { classes } = props
    return (
        <nav className={classNames(classes.navbar, 'navbar navbar-color-on-scroll fixed-top navbar-expand-lg')}>
            <div className="container">
                <div className="navbar-translate">
                    <span className={classes.name}>
                        Portfolio
                    </span>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className={classNames(classes.navItem, "nav-item")}>
                            <a href="#" className={classNames(classes.navLink, "nav-link")} id="projects">
                                Projects
                            </a>
                        </li>
                        <li className={classNames(classes.navItem, "nav-item")}>
                            <a href="#" className={classNames(classes.navLink, "nav-link")} id="about-me">
                                About me
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default withStyles(styles)(Navigation)