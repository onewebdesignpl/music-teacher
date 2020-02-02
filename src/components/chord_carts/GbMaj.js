import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoGbMaj from '../../img/keyboards/GbMaj.png';

class GbMaj extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>GbMaj</h6>
                <img src={pianoGbMaj} alt="GbMaj"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">Gb - Bb - Db</p>
            </div>
         )
    }
}
 
export default GbMaj