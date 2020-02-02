import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoBbMaj from '../../img/keyboards/BbMaj.png';

class BbMaj extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>BbMaj</h6>
                <img src={pianoBbMaj} alt="BbMaj"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">Bb - D - F</p>
            </div>
         )
    }
}
 
export default BbMaj