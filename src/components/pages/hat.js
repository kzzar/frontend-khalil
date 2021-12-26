import React, { Component } from "react"

export default class Hat extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hats: [],
            loading: true,
            error: false
        }
    }

    componentDidMount(){
        fetch("https://khalilbackend.herokuapp.com/hat/get")
        .then(response => response.json())
        .then(data => {
            this.setState({
                hats: data,
            loading: false
            })
        })
        .catch(error => {
            console.log("error getting hats ", error)
            this.setState({
                error: true,
                loading: false
            })
        }) 
    }

    renderHats(){
        const hatsHtml = this.state.hats.map(hat =>(
            <div className="hat-wrapper" key={hat.id}>
                <h3>{hat.type}</h3>
                <p>${hat.price.toFixed(2)}</p>
                <img src={hat.image}></img>
            </div>
        ))
        return hatsHtml
    }

    render(){
        if (this.state.loading) {
            return (
                <div className="hats-page-wrapper">
                    <h2>Hats</h2>
                    <div className="hats-wrapper">
                        <div className="loading">Loading...</div>
                    </div>
                </div>
            )
        }

        else if (this.state.error) {
            return (
                <div className="hats-page-wrapper">
                    <h2>Hats</h2>
                    <div className="hats-wrapper">
                        <div className="error">An error had occured...</div>
                    </div>
                </div>
            )
        }

        else {
            return (
                <div className="hats-page-wrapper">
                    <h2>Hats</h2>
                    <div className="hats-wrapper">
                        {this.renderHats()}
                    </div>
                </div>
            )
        }
    }
}
