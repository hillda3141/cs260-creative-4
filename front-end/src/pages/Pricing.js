import React from "react"

class Pricing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {length: NaN, width: NaN, unit: "mm", unit_multiplier: 1, quant: 10, layers: 2, material: "fr-4", material_multiplier: 1, spacing: 6};

    this.handleLengthChange = this.handleLengthChange.bind(this);
    this.handleWidthChange = this.handleWidthChange.bind(this);
    this.handleUnitChange = this.handleUnitChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleLayersChange = this.handleLayersChange.bind(this);
    this.handleMaterialChange = this.handleMaterialChange.bind(this);
    this.handleSpacingChange = this.handleSpacingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLengthChange(event) {
    this.setState({length: parseFloat(event.target.value)});
  }
  
  handleWidthChange(event) {
    this.setState({width: parseFloat(event.target.value)});
  }
  
  handleUnitChange(event) {
    let unit = event.target.value;
    let divisor = 1;
    if(unit == "cm"){
        divisor = 10;
    }
    else if(unit == "in"){
        divisor = 25.4;
    }
    this.setState({unit: unit});
    this.setState({unit_multiplier: divisor});
  }
  
  handleQuantityChange(event) {
    this.setState({quant: parseFloat(event.target.value)});
  }
  
  handleLayersChange(event) {
    this.setState({layers: parseInt(event.target.value)});
  }
  
  handleMaterialChange(event) {
    let material = event.target.value;
    let multiplier = 1;
    if(material == "aluminum"){
        multiplier = 1.2;
    }
    else if(material == "rodgers"){
        multiplier = 1.3;
    }
    this.setState({material: material});
    this.setState({material_multiplier: multiplier});
  }
  
  handleSpacingChange(event) {
    this.setState({spacing: parseInt(event.target.value)});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    let min_price = 5;
    let unit_price = 0;
    let quantity = this.state.quant
    let spacing = this.state.spacing;
    let area = (this.state.length * this.state.unit_multiplier) * (this.state.width * this.state.unit_multiplier);
    if(area <= 3000){
        unit_price += 0.25;
    }
    else if(area <= 10000){
        unit_price += 0.5;
    }
    else if(area <= 50000){
        unit_price += 1.5;
    }
    else{
        unit_price += area/40000;
    }
    unit_price *= this.state.layers * this.state.material_multiplier;
    if(spacing <= 4){
        unit_price *= 1.5;
    }
    let total_price = unit_price * quantity
    if(quantity > 10000){
        total_price *= 0.7;
    }
    else if(quantity > 1000){
        total_price *= 0.8;
    }
    else if(quantity > 100){
        total_price *= 0.9;
    }
    else if(quantity > 10){
        total_price *= 0.95;
    }
    total_price = Math.max(total_price, min_price);
    console.log(total_price);
    document.getElementById("price-result").innerHTML = "Estimated Cost: $" + total_price.toFixed(2).toString();
  }

  render() {
    return (
       <div>
           <form onSubmit={this.handleSubmit} class="pricing-form">
              <label for="size">Size:</label>
              <input type="text" id="length" name="length" onChange={this.handleLengthChange} placeholder="Length"></input>
              <input type="text" id="width" name="width" onChange={this.handleWidthChange} placeholder="Width"></input>
              <input type="radio" id="mm" name="measure_unit" value="mm" onChange={this.handleUnitChange} checked={this.state.unit === "mm"}></input>
              <label for="html">mm</label>
              <input type="radio" id="cm" name="measure_unit" value="cm" onChange={this.handleUnitChange} checked={this.state.unit === "cm"}></input>
              <label for="html">cm</label>
              <input type="radio" id="in" name="measure_unit" value="in" onChange={this.handleUnitChange} checked={this.state.unit === "in"}></input>
              <label for="html">in</label><br></br>
              <label for="quantity">Quantity:</label>
              <input type="text" id="quantity" name="quantity" onChange={this.handleQuantityChange} value={this.state.quant.toString()}></input><br></br>
              <label for="layers">Layers:</label>
              <input type="text" id="layers" name="layers" onChange={this.handleLayersChange} value={this.state.layers.toString()}></input><br></br>
              <label for="material">Material:</label>
              <input type="radio" id="fr-4" name="material" value="fr-4" onChange={this.handleMaterialChange} checked={this.state.material === "fr-4"}></input>
              <label for="html">FR-4</label>
              <input type="radio" id="aluminum" name="material" value="aluminum" onChange={this.handleMaterialChange} checked={this.state.material === "aluminum"}></input>
              <label for="html">Aluminum</label>
              <input type="radio" id="rodgers" name="material" value="rodgers" onChange={this.handleMaterialChange} checked={this.state.material === "rodgers"}></input>
              <label for="html">Rodgers</label><br></br>
              <label for="spacing">Min Track/Spacing:</label>
              <input type="radio" id="sp3" name="spacing" value="3" onChange={this.handleSpacingChange} checked={this.state.spacing === 3}></input>
              <label for="html">3/3mil</label>
              <input type="radio" id="sp4" name="spacing" value="4" onChange={this.handleSpacingChange} checked={this.state.spacing === 4}></input>
              <label for="html">4/4mil</label>
              <input type="radio" id="sp5" name="spacing" value="5" onChange={this.handleSpacingChange} checked={this.state.spacing === 5}></input>
              <label for="html">5/5mil</label>
              <input type="radio" id="sp6" name="spacing" value="6" onChange={this.handleSpacingChange} checked={this.state.spacing === 6}></input>
              <label for="html">6/6mil</label>
              <input type="radio" id="sp8" name="spacing" value="8" onChange={this.handleSpacingChange} checked={this.state.spacing === 8}></input>
              <label for="html">8/8mil</label><br></br>
              <input type="submit" value="Calculate" />
            </form>
            <h3></h3>
            <h3 id="price-result">Estimated Cost: $0.00</h3>
        </div>
    );
  }
}

export default Pricing;