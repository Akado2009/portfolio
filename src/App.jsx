import React from 'react'
import Navigation from './Navigation/Navigation'
import Header from './Header/Header'
import Footer from './Footer/Footer'


const App = () => {
    return (
        <div>
            <Header />
            <Navigation />
            <div style={{height: 500, backgroundColor: 'red'}} className="projects">
            </div>
            <div style={{height: 500, backgroundColor: 'blue'}} className="about-me">
            </div>
            <Footer />
        </div>
    )
}


export default App