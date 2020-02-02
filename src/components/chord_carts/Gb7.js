import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoGb7 from '../../img/keyboards/Gb7.png';

class Gb7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>Gb7</h6>
                <img src={pianoGb7} alt="Gb7"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">Gb - Bb - Db - E</p>
            </div>
         )
    }
}
 
export default Gb7