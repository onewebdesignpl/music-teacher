import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoAMin from '../../img/keyboards/AMin.png';

class AMin extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>AMin</h6>
                <img src={pianoAMin} alt="AMin"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">A - C - E</p>
            </div>
         )
    }
}
 
export default AMin