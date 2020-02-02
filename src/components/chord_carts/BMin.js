import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoBMin from '../../img/keyboards/BMin.png';

class BMin extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>BMin</h6>
                <img src={pianoBMin} alt="BMin"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">B - D - F#</p>
            </div>
         )
    }
}
 
export default BMin