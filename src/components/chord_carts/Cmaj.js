import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoCmaj from '../../img/keyboards/Cmaj.png';

class Cmaj extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>Cmaj</h6>
                <img src={pianoCmaj} alt="cmaj"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">C - E - G</p>
            </div>
         )
    }
}
 
export default Cmaj;