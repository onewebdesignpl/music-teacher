import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoEbMin from '../../img/keyboards/EbMin.png'
class EbMin extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>EbMin</h6>
                <img src={pianoEbMin} alt="EbMin"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">Eb - Gb - Bb</p>
            </div>
         )
    }
}
 
export default EbMin