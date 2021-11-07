import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div>
                <div className="container card my-3 bg-light px-0">
                    <div className="card-body text-center">
                        <h1 className="card-title">A warm welcome!</h1>
                        <p className="card-text">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                        <a href="#" className="btn btn-primary">Call to action</a>
                    </div>
                </div>

            </div>
        )
    }
}
