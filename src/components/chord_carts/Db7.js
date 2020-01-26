import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoDb7 from '../../img/keyboards/Db7.png';

class Db7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>Db7</h6>
                <img src={pianoDb7} alt="c"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">Db - F - Ab - B</p>
            </div>
         )
    }
}
 
export default Db7;