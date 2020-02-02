import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoEbMin7 from '../../img/keyboards/EbMin7.png';

class EbMin7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>EbMin7</h6>
                <img src={pianoEbMin7} alt="EbMin7"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">Eb - Gb - Bb - Db</p>
            </div>
         )
    }
}
 
export default EbMin7