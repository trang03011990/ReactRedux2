import React, { Component } from 'react'

export default class HomePage extends Component {
    state={
        glass:"./img/v1.png"
    }
    changeGlass=(glass)=>{
        this.setState({
            glass:`./img/${glass}.png`
        })
    }
    render() {
        return (
            <div>
                <img className="bg1" src="./img/background.jpg" alt="" />
                {/* Header  */}
                <h3 className="bg-dark text-light p-3">TRY GLASSES APP ONLINE</h3>
                {/* Body  */}
                <div className="container py-3">
                    <div className="row mt-5">
                        <div className="col-6">
                            <img className="model" src="./img/model.jpg" alt="" />
                            <img className="glass" src={this.state.glass} alt="" />
                        </div>
                        <div className="col-6">
                            <img className="model" src="./img/model.jpg" alt="" />
                        </div>
                    </div>
                </div>
                {/* Footer  */}
                <div className="bg-light container text-center mt-5 d-flex justify-content-center p-2">
                    <img className="item ml-2 p-2 border border-width-1" src="./img/g1.jpg" alt="" onClick={()=>{this.changeGlass("v1")}} />
                    <img className="item ml-2 p-2 border border-width-1" src="./img/g2.jpg" alt="" onClick={()=>{this.changeGlass("v2")}}/>
                    <img className="item ml-2 p-2 border border-width-1" src="./img/g3.jpg" alt="" onClick={()=>{this.changeGlass("v3")}}/>
                    <img className="item ml-2 p-2 border border-width-1" src="./img/g4.jpg" alt="" onClick={()=>{this.changeGlass("v4")}}/>
                    <img className="item ml-2 p-2 border border-width-1" src="./img/g5.jpg" alt="" onClick={()=>{this.changeGlass("v5")}}/>
                    <img className="item ml-2 p-2 border border-width-1" src="./img/g6.jpg" alt="" onClick={()=>{this.changeGlass("v6")}}/>
                    <img className="item ml-2 p-2 border border-width-1" src="./img/g7.jpg" alt="" onClick={()=>{this.changeGlass("v7")}}/>
                    <img className="item ml-2 p-2 border border-width-1" src="./img/g8.jpg" alt="" onClick={()=>{this.changeGlass("v8")}}/>
                    <img className="item ml-2 p-2 border border-width-1" src="./img/g9.jpg" alt="" onClick={()=>{this.changeGlass("v9")}}/>
                </div>
            </div>
        )
    }
}
