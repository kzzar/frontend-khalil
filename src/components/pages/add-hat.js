import React, { Component } from 'react'

export default class AddHat extends Component {
    constructor(props) {
        super(props)

        this.state ={
            typeInput: "",
            priceInput: "",
            imageInput: "",
            loading: false,
            error: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleChangeImage = this.handleChangeImage.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({ [event.target.name]: event.target.value })
    }

    handleChangeImage(event) {
        if ( ['jpg', 'png', 'jpeg'].some(char => event.target.value.endsWith(char))) {
            this.setState({ imageInput: event.target.value });
        } else {
            this.setState({ [event.target.name]: 'https://cdn.pixabay.com/photo/2012/04/18/22/17/cap-38061_1280.png' });
        }
    }

    handleSubmit(event){
        event.preventDefault()

        this.setState({
            loading: true,
            error: false
        })

        fetch("https://khalilbackend.herokuapp.com/hat/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                type: this.state.typeInput,
                price: parseFloat(this.state.priceInput),
                image: this.state.imageInput
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.id) {
                this.props.history.push("/")
            }
        })
        .catch(error => {
            console.log("error adding the hat", error)

            this.setState({
                loading: false,
                error: true
            })
        })
    }

    render() {
        return (
            <div className="add-hat-wrapper">
                <h2>Add Hat</h2>

                <form onSubmit = {this.handleSubmit}>
                    <input 
                        type="text"
                        placeholder="type"
                        name="typeInput"
                        value={this.state.typeInput}
                        onChange={this.handleChange}
                        required
                        />
                        <input 
                        type="number"
                        placeholder="price"
                        name="priceInput"
                        value={this.state.priceInput}
                        onChange={this.handleChange}
                        required
                        />
                        <input 
                        type="url"
                        placeholder="image"
                        name="imageInput"
                        value={this.state.imageInput}
                        onChange={this.handleChange}
                        required
                        />

                        <button type="submit" disabled={this.state.loading}>Add Hat</button>
                </form>

                {this.state.loading ? <div className="loading">Submitting...</div> : null}

                {this.state.error ? <div className="error">An error has occured...</div> : null}
            </div>
        )
    }
}