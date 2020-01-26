import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoDbMin7 from '../../img/keyboards/DbMin7.png';

class DbMin7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>DbMin7</h6>
                <img src={pianoDbMin7} alt="c"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">Db - E - Ab - B</p>
            </div>
         )
    }
}
 
export default DbMin7