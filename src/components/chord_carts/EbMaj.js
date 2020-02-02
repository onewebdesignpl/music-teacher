import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoEbMaj from '../../img/keyboards/EbMaj.png';

class EbMaj extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>EbMaj</h6>
                <img src={pianoEbMaj} alt="EbMaj"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">Eb - G - Bb</p>
            </div>
         )
    }
}
 
export default EbMaj