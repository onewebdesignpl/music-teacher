import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoCmin7 from '../../img/keyboards/Cmin7.png';

class Cmin7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>Cmin7</h6>
                <img src={pianoCmin7} alt="cmaj"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">C - Eb - G - Bb</p>
            </div>
         )
    }
}
 
export default Cmin7;