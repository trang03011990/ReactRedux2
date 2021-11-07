import React, { Component } from 'react'
import { connect } from 'react-redux'

class Computer extends Component {
    render() {
        // let keyFrame=`@keyframes mymove${Date.now()}{
        //     0% {top: -50px;}
        //     25% {top: 100px;}
        //     50%{top:-50px}
        //     100%{top:0}
        //   }`
       let {mayChon}=this.props.BaiTapOanTuXiReducer
        return (
            <div>
                {/* <style>
                    {keyFrame}
                </style> */}
                {/* <div className="speech-bubble" style={{position:'relative',height:'50px'}}> */}
                <div className="speech-bubble">
                    {/* <img className="itemOanTuXi" style={{position:'absolute', animation:`mymove${Date.now()} 0.5s`}} src={mayChon} alt="" /> */}
                    <img className="itemOanTuXi"  src={mayChon} alt="" />
                </div>
                <br />
                <img src="./img/imgGame1/playerComputer.png" alt="" />

            </div>
        )
    }
}

const mapStateToProps=(rootReducer)=>{
    return {BaiTapOanTuXiReducer:rootReducer.BaiTapOanTuXiReducer}
}
export default connect(mapStateToProps)(Computer)
