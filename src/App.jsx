import React from 'react'
import Header from './components/header/header'
import Showroom from './components/showroom/showroom'
import Home from './components/homes/home'
import Footer from './components/footer/footer'
const App = () => {
    return (
        <div>
            <Header/>
            <Showroom/>
            <Home/>
            <Footer/>
        </div>
    )
}

export default App