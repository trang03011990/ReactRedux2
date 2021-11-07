import React, { Component } from 'react'
import ProductShoes from './ProductShoes';

export default class ProductList extends Component {
    renderShoesList=()=>{
        let{arrShoes,xemChiTiet}=this.props;
        return arrShoes.map((item)=>{
            return <div className="col-4">
                <ProductShoes sp={item} xem={xemChiTiet}/>
            </div>
        })

    }
    render() {
        return (
           <div className="row py-5">
               {this.renderShoesList()}
           </div>
        )
    }
}
