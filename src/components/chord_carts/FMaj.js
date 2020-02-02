import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoFMaj from '../../img/keyboards/FMaj.png';

class FMaj extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>FMaj</h6>
                <img src={pianoFMaj} alt="FMaj"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">F - A - C</p>
            </div>
         )
    }
}
 
export default FMaj