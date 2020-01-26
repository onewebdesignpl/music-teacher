import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoCmin from '../../img/keyboards/Cmin.png';

class Cmin extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>Cmin</h6>
                <img src={pianoCmin} alt="cmaj"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">C - Eb - G</p>
            </div>
         )
    }
}
 
export default Cmin;