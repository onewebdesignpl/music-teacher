import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoF7 from '../../img/keyboards/F7.png';

class F7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>F7</h6>
                <img src={pianoF7} alt="F7"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">F - A - C - Eb</p>
            </div>
         )
    }
}
 
export default F7