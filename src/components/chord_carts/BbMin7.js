import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoBbMin7 from '../../img/keyboards/BbMin7.png';

class BbMin7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>BbMin7</h6>
                <img src={pianoBbMin7} alt="BbMin7"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">Bb - Db - F - Ab</p>
            </div>
         )
    }
}
 
export default BbMin7