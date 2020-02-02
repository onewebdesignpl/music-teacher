import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoAbMaj from '../../img/keyboards/AbMaj.png';

class AbMaj extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>AbMaj</h6>
                <img src={pianoAbMaj} alt="AbMaj"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">Ab - C - Eb</p>
            </div>
         )
    }
}
 
export default AbMaj