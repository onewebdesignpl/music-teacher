import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoEMin from '../../img/keyboards/EMin.png';

class EMin extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>EMin</h6>
                <img src={pianoEMin} alt="EMin"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">E - G - B</p>
            </div>
         )
    }
}
 
export default EMin