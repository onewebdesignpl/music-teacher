import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoDmin from '../../img/keyboards/Dmin.png';

class DMin extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>Dmin</h6>
                <img src={pianoDmin} alt="cmaj"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">D - F - A</p>
            </div>
         )
    }
}
 
export default DMin