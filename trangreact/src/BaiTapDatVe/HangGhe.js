import React, { Component } from 'react'
import { connect } from 'react-redux'

class HangGhe extends Component {
    renderHangGhe = () => {
        let { item, index, BaiTapDatVeReducer } = this.props
        return item.danhSachGhe.map((ghe, i) => {
            // ghe da chon 
            let cssGheDuocChon = ""
            let disabled = false
            if (ghe.daDat) {
                cssGheDuocChon = "gheDuocChon"
                disabled = true
            }
            // ghe dang chon
            let cssGheDangChon = ""
            // console.log(this.props.BaiTapDatVeReducer)
            let indexGhe = BaiTapDatVeReducer.findIndex((gheDuocChon) => {
                return gheDuocChon.soGhe === ghe.soGhe
            })
            //vi sao them ngoac nhon thi ko hieu=>thieu return
            if (indexGhe !== -1) {
                cssGheDangChon = "gheDangChon"
            }

            if (index === 0) {
                return <div className="rowNumber">
                    {ghe.soGhe}
                </div>
            } else {
                return <button onClick={() => {
                    const action = {
                        type: 'CHON',
                        ghe:ghe
                    }
                    this.props.dispatch(action)
                }} className={`ghe ${cssGheDuocChon} ${cssGheDangChon}`}>
                    {ghe.soGhe}
                </button >
            }
        })
    }

    render() {
        let { item } = this.props;
        return (
            <div>
                {item.hang}
                {this.renderHangGhe()}
            </div>
        )
    }
}
const mapStateToProps = (r) => {
    return { BaiTapDatVeReducer: r.BaiTapDatVeReducer }
}
export default connect(mapStateToProps)(HangGhe)
