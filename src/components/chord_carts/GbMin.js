import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoGbMin from '../../img/keyboards/GbMin.png';

class GbMin extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>GbMin</h6>
                <img src={pianoGbMin} alt="GbMin"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">Gb - A - Db</p>
            </div>
         )
    }
}
 
export default GbMin