import React from 'react';
import './card.css';

class ComponenteCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            secondState: "card card-change-one",
            thirdState: "card card-change-two",
            defaultState: "card"
        };
      }
       buttonClick = (event) => {           
        if (this.state.defaultState === "card"){
            this.setState({
            defaultState: this.state.secondState
          })
        }
        if(this.state.defaultState === this.state.secondState) {
            this.setState({
            defaultState: this.state.thirdState
            })
        }
        if(this.state.defaultState === this.state.thirdState) {
            this.setState({
            defaultState: "card"
            })
        }
        
       }

    render() {
        const {defaultState} = this.state
    return (
    <section id="card-container">
        <div className={defaultState}>
            <h1>Título</h1>
            <p>
            Used in casting shadows (often called “Drop Shadows”, 
            like in Photoshop) from elements. Here is an example 
            with the deepest possible browser support:
            </p>
            <button onClick={this.buttonClick}>
                Conhecer
            </button>
        </div>
    </section>
    )
}
}

export default ComponenteCard;