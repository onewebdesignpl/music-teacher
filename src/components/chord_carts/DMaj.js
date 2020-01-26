import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoDmaj from '../../img/keyboards/DMaj.png';

class DMaj extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>Dmaj</h6>
                <img src={pianoDmaj} alt="cmaj"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">D - F# - A</p>
            </div>
         )
    }
}
 
export default DMaj