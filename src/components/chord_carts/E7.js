import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoE7 from '../../img/keyboards/E7.png';

class E7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>E7</h6>
                <img src={pianoE7} alt="E7"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">E - G# - B - D</p>
            </div>
         )
    }
}
 
export default E7