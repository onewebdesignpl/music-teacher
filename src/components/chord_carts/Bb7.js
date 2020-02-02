import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoBb7 from '../../img/keyboards/Bb7.png';

class Bb7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>Bb7</h6>
                <img src={pianoBb7} alt="Bb7"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">Bb - D - F - Ab</p>
            </div>
         )
    }
}
 
export default Bb7