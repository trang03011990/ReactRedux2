import React, { Component } from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Header from './Header'
import Items from './Items'

export default class HomeComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <Header/>
                </header>
                <body>
                    <Banner/>
                    <Items/>
                </body>
                <footer>
                    <Footer/>
                </footer>
                
            </div>
        )
    }
}
