import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoB7 from '../../img/keyboards/B7.png';

class B7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>B7</h6>
                <img src={pianoB7} alt="B7"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">B - D# - F# - A</p>
            </div>
         )
    }
}
 
export default B7