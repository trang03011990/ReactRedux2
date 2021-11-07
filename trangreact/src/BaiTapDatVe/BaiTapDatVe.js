import React, { Component } from 'react'
import './BaiTapBookingTicket.css'
import dataGhe from './danhSachGhe.json'
import HangGhe from './HangGhe'
import { connect } from 'react-redux'
class BaiTapDatVe extends Component {
    renderHangGhe = () => {
        return dataGhe.map((item, index) => {
            return <div key={index}>
                <HangGhe item={item} index={index} />
            </div>
        })
    }
    renderData = () => {
        let {BaiTapDatVeReducer}=this.props;
        let soGheDaDat=BaiTapDatVeReducer.map((item)=>{
            return item.soGhe+","
        })
        let total=0
        BaiTapDatVeReducer.map((item)=>{
            return total+=item.gia
        })
        return <tr>
            <td className="col-4">{BaiTapDatVeReducer.length}</td>
            <td className="col-4">{soGheDaDat}</td>
            <td className="col-4">{total}</td>
        </tr>
    }

    render() {
        return (
            <div className="bgMovie">
                <div className="container text-white py-1">
                    <h1>MOVIE SEAT SELECTION</h1>
                    <div className="container bgDatVe my-2 py-2">
                        <div className="mx-5">
                            <h5 className="text-center text-warning">Fill The Required Details Below And Select Your Seats</h5>
                            {/* <div className="row">
                                <div className="col-6">
                                    <span>Name *</span>
                                    <input value="name" type="text" id="Username" required />
                                </div>
                                <div className="col-5">
                                    <span>Number of Seats *</span>
                                    <input value="number" type="number" id="Numseats" required min="1" />
                                </div>
                            </div> */}
                            {/* <br />
                            <button>Start Selecting</button> */}

                            <div className="row my-2">
                                <div className="col-5 text-right">
                                    <span className="oVuong bg-success"></span>
                                    <span className="px-2">Selected Seat</span>
                                </div>
                                <div className="col-2">
                                    <span className="oVuong bg-danger"></span>
                                    <span className="px-2">Reserved Seat</span>
                                </div>
                                <div className="col-2">
                                    <span className="oVuong bg-white"></span>
                                    <span className="px-2">Empty Seat</span>
                                </div>

                            </div>
                            {/* Dat ve  */}
                            {this.renderHangGhe()}

                            <table className="table text-white mt-3" border="2">
                                <thead>
                                    <tr>
                                        <th className="col-4 bg-info">Number of Seat</th>
                                        <th className="col-4 bg-info">Seats</th>
                                        <th className="col-4 bg-info">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* du lieu  */}
                                    {this.renderData()}
                                </tbody>
                            </table>
                        </div>



                    </div>



                </div>
            </div>
        )
    }
}
const mapStateToProps = (r) => {
    return { BaiTapDatVeReducer: r.BaiTapDatVeReducer }
}
export default connect(mapStateToProps)(BaiTapDatVe)

