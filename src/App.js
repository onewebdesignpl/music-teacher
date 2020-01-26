import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './sass/_main.scss';
import './sass/_typography.scss';

import Navbar from './components/Navbar';
import ChordByKeyNav from './components/ChordByKeyNav';
import ChordByTypeNav from './components/ChordByTypeNav';
import Hello from './components/Hello';

// All chord components, need to refractor that mess
import ChordC from './components/chord_pages/ChordC';
import ChordCSharp from './components/chord_pages/ChordCSharp';
import ChordDb from './components/chord_pages/ChordDb';
import ChordD from './components/chord_pages/ChordD';
import ChordDSharp from './components/chord_pages/ChordDSharp';
import ChordEb from './components/chord_pages/ChordEb';
import ChordE from './components/chord_pages/ChordE';
import ChordF from './components/chord_pages/ChordF';
import ChordFSharp from './components/chord_pages/ChordFSharp';
import ChordGb from './components/chord_pages/ChordGb';
import ChordG from './components/chord_pages/ChordG';
import ChordGSharp from './components/chord_pages/ChordGSharp';
import ChordAb from './components/chord_pages/ChordAb';
import ChordA from './components/chord_pages/ChordA';
import ChordASharp from './components/chord_pages/ChordASharp';
import ChordBb from './components/chord_pages/ChordBb';
import ChordB from './components/chord_pages/ChordB';

function App() {
  return (
    <>
    <Router>
      < Navbar />
      <main>
          < ChordByKeyNav />
            < Route exact path="/" component={Hello} />
            < Route exact path="/c" component={ChordC} />
            < Route exact path="/cis" component={ChordCSharp} />
            < Route exact path="/dmol" component={ChordDb} />
            < Route exact path="/d" component={ChordD} />
            < Route exact path="/dis" component={ChordDSharp} />
            < Route exact path="/emol" component={ChordEb} />
            < Route exact path="/e" component={ChordE} />
            < Route exact path="/f" component={ChordF} />
            < Route exact path="/fis" component={ChordFSharp} />
            < Route exact path="/gmol" component={ChordGb} />
            < Route exact path="/g" component={ChordG} />
            < Route exact path="/gis" component={ChordGSharp} />
            < Route exact path="/amol" component={ChordAb} />
            < Route exact path="/a" component={ChordA} />
            < Route exact path="/ais" component={ChordASharp} />
            < Route exact path="/bmol" component={ChordBb} />
            < Route exact path="/b" component={ChordB} />
          < ChordByTypeNav />
      </main>
    </Router>
    </>
  )
}

export default App;
