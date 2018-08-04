import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'


import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import blueGrey from '@material-ui/core/colors/blueGrey'
import pink from '@material-ui/core/colors/pink'



const theme = createMuiTheme({
    palette: {
        primary: {
            main: pink[300]
        },
        secondary: {
            main: blueGrey[300]
        }
    },
    typography: {
        fontSize: 14,
        htmlFontSize: 14
    }
})


ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>
    , document.getElementById('root'))
