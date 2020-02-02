import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoEMaj from '../../img/keyboards/EMaj.png';

class EMaj extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>EMaj</h6>
                <img src={pianoEMaj} alt="EMaj"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">E - G# - B</p>
            </div>
         )
    }
}
 
export default EMaj