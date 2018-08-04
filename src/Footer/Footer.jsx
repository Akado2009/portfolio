import React from 'react'
import { withStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import classNames from 'classnames'


const styles = theme => ({
    footer: {
        marginBottom: 20
    },
    signature: {
        float: 'right',
        display: 'inline',
        marginTop: 10
    },
    ul: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
    },
    li: {
        display: 'inline'
    },
    facebook: {
        backgroundColor: '#365899',
        color: 'white',
        '&:hover': {
            backgroundColor: '#5452B0'
        }
    },
    github: {
        backgroundColor: 'black',
        color: 'white',
        '&:hover': {
            backgroundColor: '#323030'
        }
    },
    vk: {
        backgroundColor: '#566BA6',
        color: 'white',
        '&:hover': {
            backgroundColor: '#344279'
        }
    },
    gmail: {
        backgroundColor: '#EA4335',
        color: 'white',
        '&:hover': {
            backgroundColor: '#DD4B39'
        }
    },
    button: {
        margin: theme.spacing.unit
    },
    icon: {
        marginRight: theme.spacing.unit
    },
    copyright: {
        padding: '15px 0',
        fontSize: 20,
        verticalAlign: 'middle'
    },
    heart: {
        color: '#ff00bc',
        fontSize: 30
    }
})


const Footer = (props) => {
    const { classes } = props

    const socials = [ 'Facebook', 'Github', 'Vk', 'Gmail' ]

    return (
        <div className={classNames('container', classes.footer)}>
            <ul className={classes.ul}>
                {
                    socials.map((name, i) => {
                        return (
                            <li key={i} className={classes.li}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classNames(classes[name.toLowerCase()], classes.button)}
                                >
                                    {name}
                                </Button>
                            </li>
                        )
                    })
                }
                <li className={classNames(classes.li, classes.signature)}>
                    <span className={classes.copyright}>
                        © {new Date().getFullYear()}, made with <span className={classes.heart}>&#10084;</span> by Prosvirov Kirill
                    </span>
                </li>
            </ul>
        </div>
    )
}


export default withStyles(styles)(Footer)