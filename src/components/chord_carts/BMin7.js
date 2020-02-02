import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoBMin7 from '../../img/keyboards/BMin7.png';

class BMin7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>BMin7</h6>
                <img src={pianoBMin7} alt="BMin7"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">B - D - F# - A</p>
            </div>
         )
    }
}
 
export default BMin7