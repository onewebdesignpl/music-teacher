import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoC7 from '../../img/keyboards/C7.png';

class C7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>C7</h6>
                <img src={pianoC7} alt="cmaj"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">C - E - G - Bb</p>
            </div>
         )
    }
}
 
export default C7;