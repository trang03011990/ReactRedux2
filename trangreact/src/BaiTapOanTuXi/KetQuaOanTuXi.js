import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaOanTuXi extends Component {
    renderStatus() {
        let { banChon, mayChon, soBanChoi } = this.props.BaiTapOanTuXiReducer
        if (soBanChoi !== 0) {
            if (banChon === mayChon) {
                return "Hoa roi"
            } else {
                if ((banChon === "./img/imgGame1/Keo.png" && mayChon === "./img/imgGame1/Bao.png") || (banChon === "./img/imgGame1/Bua.png" && mayChon === "./img/imgGame1/Keo.png") || (banChon === "./img/imgGame1/Bao.png" && mayChon === "./img/imgGame1/Bua.png")) {
                    return "Thang roi"
                }else{return "Thua roi"}
            }
        }
    }
    render() {
        let { soBanThang, soBanChoi } = this.props.BaiTapOanTuXiReducer
        return (
            <div>
                <h1 className='text-danger'>{this.renderStatus()}</h1>
                <h1>SO BAN THANG: {soBanThang}</h1>
                <h1>SO BAN CHOI: {soBanChoi}</h1>
            </div>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return { BaiTapOanTuXiReducer: rootReducer.BaiTapOanTuXiReducer }
}
export default connect(mapStateToProps)(KetQuaOanTuXi)

