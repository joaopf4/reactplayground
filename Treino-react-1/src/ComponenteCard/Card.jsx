import React from 'react';
import './card.scss';

class ComponenteCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            color: 0,
            colorOrder: ["primary", "blue", "orange"]
        };
      }
      buttonClick = () => {
        // this.state.color === "primary" 
        // ? this.setState({ color: "blue"}) 
        // : this.setState({ color: "primary"})
        
        if(this.state.color >= 2){
            this.setState({
                color: 0
            })
        }else {
            this.setState((state) => ({
            color: state.color + 1
          }));   
        }

  
      }
    render() {
        const {colorOrder, color} = this.state
        const currentColor = colorOrder[color]
    return (
    <section id="card-container">
        <div className={`card card--${currentColor}`}>
            <h1 className={`card__title card__title--${currentColor}`}>Título</h1>
            <p className={`card__description card__description--${currentColor}`}>
            Used in casting shadows (often called “Drop Shadows”, 
            like in Photoshop) from elements. Here is an example 
            with the deepest possible browser support:
            </p>
            <button className="card__button" onClick={this.buttonClick}>
                Conhecer
            </button>
        </div>
    </section>
    )
}
}

export default ComponenteCard;