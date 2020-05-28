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


class GenerateStrand extends React.Component {
  state = {
    type: 'DNA',
  }

  handleTypeClick = (e) => {
    this.setState({
      type: e.target.id,
    });

  }

  handleSubmit = () => {    
    let inputStrand = document.getElementById('inputStrand').value.toUpperCase();
    inputStrand = inputStrand.replace(/[^ACTUG]+/g, '');

    let method = document.getElementById('method').value;

    // console.log(this.state.type, inputStrand, method);

    let resultStrand = '';

    switch(method) {
      case 'complement':
        resultStrand = this.transcribeComplement(this.state.type, inputStrand);
        break;
      case 'reverse':
        resultStrand = this.transcribeReverse(inputStrand);
        break;
      case 'reverse-complement':
        resultStrand = this.transcribeComplement(this.state.type, this.transcribeReverse(inputStrand));
        break;
      default:
        console.log('method not defined');
    }

    if (resultStrand !== null) {
      document.getElementById('resultStrand').innerHTML = resultStrand;
    }
    
  }

  transcribeReverse = (inputStrand) => {
    return inputStrand.split('').reverse().join('');
  }

  transcribeComplement = (type, inputStrand) => {
    let resultStrand = '';
    
    for (let base of inputStrand) {
      if (type === 'DNA') {
        if (/[ACTG]/.test(base)) {
          resultStrand += DNAComplements[base]
        } else {
          alert('Not a valid DNA strand (must only contain A, C, T, G)');
          return null;
        }
      } else {
        if (/[ACUG]/.test(base)) {
          resultStrand += RNAComplements[base]
        } else {
          alert('Not a valid RNA strand (must only contain A, C, U, G)');
          return null;
        }
      }
    }

    return resultStrand;
  }

  copy = () => {
    let resultStrand = document.getElementById('resultStrand');
    resultStrand.select();
    resultStrand.setSelectionRange(0, Number.MAX_SAFE_INTEGER);
    document.execCommand('copy');
  }
  
  

  render() {
    return (
      <div className="strand__container" >
        <div className="strand__input__container">
          <div className="strand__type">
            <label onClick={this.handleTypeClick} className="strand__method">
              <input type="radio" name="type" id="DNA" defaultChecked/>
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
        </div>
      
        <div id="strand__result">
          <div className="strand__results__title">Results:</div>
          <textarea type="text" id="resultStrand" name="resultStrand" className="strand__input"></textarea>
          <button onClick={this.copy} className="copy-btn">Copy</button>
        </div>

      </div>
    )
  }
}

export default GenerateStrand;