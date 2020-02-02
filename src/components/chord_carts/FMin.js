import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoFMin from '../../img/keyboards/FMin.png';

class FMin extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>FMin</h6>
                <img src={pianoFMin} alt="FMin"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">F - Ab - C</p>
            </div>
         )
    }
}
 
export default FMin