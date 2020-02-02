import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoGbMin7 from '../../img/keyboards/GbMin7.png';

class GbMin7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>GbMin7</h6>
                <img src={pianoGbMin7} alt="GbMin7"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">Gb - A - Db - E</p>
            </div>
         )
    }
}
 
export default GbMin7