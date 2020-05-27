import React from 'react';
import './App.scss';
import dna from '../img/dna.png';

import DNA from '../Components/DNA';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Complementary Base Generator</h1>
      </header>
      <main>
        <DNA />
        <aside className="App-logo">
          <img src={dna} alt="rainbow DNA strand" className="App-logo__dna" />
          <img src={dna} alt="rainbow DNA strand" className="App-logo__dna" />
        </aside>
      </main>
      
    </div>
  );
}

export default App;
