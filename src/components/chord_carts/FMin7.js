import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoFMin7 from '../../img/keyboards/FMin7.png';

class FMin7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>FMin7</h6>
                <img src={pianoFMin7} alt="FMin7"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">F - Ab - C - Eb</p>
            </div>
         )
    }
}
 
export default FMin7