import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoBMaj from '../../img/keyboards/BMaj.png';

class BMaj extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>BMaj</h6>
                <img src={pianoBMaj} alt="BMaj"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">B - D# - F#</p>
            </div>
         )
    }
}
 
export default BMaj