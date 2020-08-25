import React from 'react';
import './card.css';

class ComponenteCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            defaultClass: "card"
        };
      }
      buttonClick = (event) => {
           if (this.state.defaultClass === "card"){
               this.setState({
           defaultClass: "card card-change"
         })
           } else {
             this.setState({
                 defaultClass: "card"
               })
           }
        // const Default = this.state.defaultClass
        // this.setState({
        //     Default ? Default === "card card-change" : 'card'
        //   });
      
      }
    render() {
        const {defaultClass} = this.state
    return (
    <section id="card-container">
        <div className={defaultClass}>
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