import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoAb7 from '../../img/keyboards/Ab7.png';

class Ab7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>Ab7</h6>
                <img src={pianoAb7} alt="Ab7"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">Ab - C - Eb - Gb</p>
            </div>
         )
    }
}
 
export default Ab7