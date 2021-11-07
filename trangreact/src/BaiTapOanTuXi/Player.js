import React, { Component } from 'react'
import {connect} from 'react-redux'

class Player extends Component {
    render() {
        let {banChon}=this.props.BaiTapOanTuXiReducer
        return (
            <div>
                <div className="speech-bubble">
                    <img className="itemOanTuXi" src={banChon} alt="" />
                </div>
                <br />
                <img src="./img/imgGame1/player.png" alt="" />
                <div >
                    <button onClick={()=>{
                        const action={
                            type:'CHON',
                            banChon:"./img/imgGame1/Keo.png"
                        }
                        this.props.dispatch(action)
                    }}>
                        <img className="itemOanTuXi" src="./img/imgGame1/Keo.png" alt="" />
                    </button>
                    <button onClick={()=>{
                        const action={
                            type:'CHON',
                            banChon:"./img/imgGame1/Bua.png"
                        }
                        this.props.dispatch(action)
                    }}>
                        <img className="itemOanTuXi" src="./img/imgGame1/Bua.png" alt="" />
                    </button>
                    <button onClick={()=>{
                        const action={
                            type:'CHON',
                            banChon:"./img/imgGame1/Bao.png"
                        }
                        this.props.dispatch(action)
                    }}>
                        <img className="itemOanTuXi" src="./img/imgGame1/Bao.png" alt="" />
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(rootReducer)=>{
    return {BaiTapOanTuXiReducer:rootReducer.BaiTapOanTuXiReducer}
}
export default connect(mapStateToProps)(Player)