import React from 'react';

const DNAComplements = { 
  A: "T", 
  T: "A", 
  C: "G", 
  G: "C" 
}; 

const RNAComplements = {
  A: "U", 
  U: "A", 
  C: "G", 
  G: "C" 
}


class DNA extends React.Component {
  state = {
    type: '',
    inputStrand: '',
    method: '',
    resultStrand: '',
  }

  handleTypeClick = (e) => {
    this.setState({
      type: e.target.id,
    });
  }

  handleSubmit = () => {
    const inputStrand = document.getElementById('inputStrand').value.toUpperCase();
    const method = document.getElementById('method').value;
    
    this.setState({
      inputStrand,
      method
    });

    setTimeout(()=>console.log(this.state.type, this.state.inputStrand, this.state.method),0);
  }

  transcribeReverse = (inputStrand) => {

  }

  transcribeComplement = (type, inputStrand) => {
    let resultStrand = '';
    
    for (let base of inputStrand) {
      type === 'DNA' ?
        // check if base is valid
        resultStrand += DNAComplements[base] :
        resultStrand += RNAComplements[base]
    }


  }

  

  render() {
    return (
      <div className="strand__container" >
        <div className="strand__type">
          <label onClick={this.handleTypeClick} className="strand__method">
            <input type="radio" name="type" id="DNA"/>
            DNA
          </label>
          <label onClick={this.handleTypeClick} className="strand__method">
            <input type="radio" name="type" id="RNA"/>
            RNA
          </label>
        </div>
        
        <textarea type="text" id="inputStrand" name="inputStrand" placeholder="Input strand" className="strand__input"></textarea>
        
        <div className="strand__method">
          <select name="method" id="method">
            <option value="complement">complement</option>
            <option value="reverse">reverse</option>
            <option value="reverse-complement">reverse complement</option>
          </select>
          <button onClick={this.handleSubmit} type="submit">Submit</button>
        </div>

        <div className="strand__result">
          <textarea type="text" id="resultStrand" name="resultStrand" className="strand__input"></textarea>
        </div>

      </div>
    )
  }
}

export default DNA;