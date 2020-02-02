import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoEb7 from '../../img/keyboards/Eb7.png';

class Eb7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>Eb7</h6>
                <img src={pianoEb7} alt="Eb7"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">Eb - G - Bb - Db</p>
            </div>
         )
    }
}
 
export default Eb7