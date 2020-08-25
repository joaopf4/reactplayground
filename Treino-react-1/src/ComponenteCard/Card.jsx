import React from 'react';
import './card.css';

class ComponenteCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            defaultClass: "card card--primary"
        };
      }
      buttonClick = (event) => {
        //    if (this.state.defaultClass === "card"){
        //        this.setState({
        //    defaultClass: "card card-change"
        //  })
        //    } else {
        //      this.setState({
        //          defaultClass: "card"
        //        })
        //    }

           this.state.defaultClass === "card" 
           ? this.setState({ defaultClass: "card card-change"}) 
           : this.setState({ defaultClass: "card"})
  
      }
    render() {
        const {defaultClass} = this.state
    return (
    <section id="card-container">
        <div className={defaultClass}>
            <h1 className="card__title card__title--prymary">Título</h1>
            <p className="card__description card__description--primary ">
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