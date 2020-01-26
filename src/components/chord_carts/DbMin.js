import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoDbMin from '../../img/keyboards/DbMin.png';

class DbMin extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>DbMin</h6>
                <img src={pianoDbMin} alt="c"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">Db - E - Ab</p>
            </div>
         )
    }
}
 
export default DbMin;