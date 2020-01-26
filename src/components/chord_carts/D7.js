import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoD7 from '../../img/keyboards/D7.png';

class D7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>D7</h6>
                <img src={pianoD7} alt="cmaj"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">D - F# - A - C</p>
            </div>
         )
    }
}
 
export default D7