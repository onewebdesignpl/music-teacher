import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoEMin7 from '../../img/keyboards/EMin7.png';

class EMin7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>EMin7</h6>
                <img src={pianoEMin7} alt="EMin7"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">E - G - B - D</p>
            </div>
         )
    }
}
 
export default EMin7