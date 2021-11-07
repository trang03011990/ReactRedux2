import React, { Component } from 'react'
import './BTOanTuXi.css'
import Computer from './Computer'
import KetQuaOanTuXi from './KetQuaOanTuXi'
import Player from './Player'
import { connect } from 'react-redux'

class BaiTapOanTuXi extends Component {
    render() {
        return (
            <div className='container-fluid bgGame'>
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-3">
                            <Player />
                        </div>
                        <div className="col-6 text-success">
                            <KetQuaOanTuXi />
                            <br />
                            <button onClick={()=>{
                                let count=0
                                let random=setInterval(()=>{
                                    const action={
                                        type:'PLAY'
                                    }
                                    this.props.dispatch(action);
                                    count++;
                                    if (count>20){
                                        clearInterval(random)
                                        const action={
                                            type:'END'
                                        }
                                        this.props.dispatch(action)
                                    }
                                },20)
                                
                            }} className="btn btn-success">Play Game</button>
                        </div>
                        <div className="col-3">
                            <Computer />
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

const mapStateToProps=(rootReducer)=>{
    return {BaiTapOanTuXiReducer:rootReducer.BaiTapOanTuXiReducer}
}
export default connect(mapStateToProps)(BaiTapOanTuXi)