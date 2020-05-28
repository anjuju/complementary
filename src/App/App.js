import React from 'react';
import './App.scss';
import dna from '../img/dna.png';

import GenerateStrand from '../Components/GenerateStrand';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Complementary Strand Generator</h1>
      </header>
      <main>
        <GenerateStrand />
        <aside className="App-logo">
          <img src={dna} alt="rainbow DNA strand" className="App-logo__dna" />
          <img src={dna} alt="rainbow DNA strand" className="App-logo__dna" />
        </aside>
      </main>
      
    </div>
  );
}

export default App;
