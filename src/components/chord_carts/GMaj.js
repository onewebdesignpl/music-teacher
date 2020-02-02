import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoGMaj from '../../img/keyboards/GMaj.png';

class GMaj extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>GMaj</h6>
                <img src={pianoGMaj} alt="GMaj"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">G - B - D</p>
            </div>
         )
    }
}
 
export default GMaj