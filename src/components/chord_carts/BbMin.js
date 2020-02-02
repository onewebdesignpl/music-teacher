import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoBbMin from '../../img/keyboards/BbMin.png';

class BbMin extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>BbMin</h6>
                <img src={pianoBbMin} alt="BbMin"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">Bb - Db - F</p>
            </div>
         )
    }
}
 
export default BbMin