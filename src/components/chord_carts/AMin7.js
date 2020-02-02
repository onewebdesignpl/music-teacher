import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoAMin7 from '../../img/keyboards/AMin7.png';

class AMin7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>AMin7</h6>
                <img src={pianoAMin7} alt="AMin7"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">A - C - E - G</p>
            </div>
         )
    }
}
 
export default AMin7