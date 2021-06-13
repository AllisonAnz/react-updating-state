// Code ClickityClick Component Here
import React from 'react'

class ClickityClick extends React.Component {
    constructor() {
        super()

        //Define the initial state:
        this.state = {
            hasBeenClicked: false,
            currentTheme: 'blue',
            addressInfo: {
                street: null,
                number: null,
                city: null,
                country: null

            },
        }
        //console.log(this.state.addressInfo) //before click event everything is null
    }

    handleClick = () => {
        //update our state here
        //Use Object.assign() by merging the addressInfo object with the new data
        this.setState({
            hasBeenClicked: true,

            //Use Object.assign() by merging the addressInfo object with the new data
            //  addressInfo: Object.assign({}, this.state.addressInfo, {
            //      city: 'New York City'
            //  }),

            //or use the spread operator in JS 
            addressInfo: {
                ...this.state.addressInfo,
                city: 'New York City'
            }

        },() => console.log(this.state.hasBeenClicked)) //prints true)
        // Above: adding a callback as a second argument to this.setState() will fire once state has been updated
        //console.log(this.state.hasBeenClicked) //Without the callback it will prints false
        //console.log(this.state.addressInfo) //after click event city is updated
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    } 
    //When the button is clicked, the text "I have not been clicked" is updated to I have been clicked!
}

export default ClickityClick