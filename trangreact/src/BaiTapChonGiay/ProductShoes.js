import React, { Component } from 'react'

export default class ProductShoes extends Component {

    render() {
        let {sp,xem}=this.props;
        return (
            <div>
                <div className="card my-2">
                    <img src={sp.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{sp.name}</h5>
                        <p className="card-text">{sp.shortDescription}</p>
                        <a onClick={()=>{xem(sp)}} className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Xem chi tiet</a>
                    </div>
                </div>

            </div>
        )
    }
}
