import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoG7 from '../../img/keyboards/G7.png';

class G7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>G7</h6>
                <img src={pianoG7} alt="G7"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">G - B - D - F</p>
            </div>
         )
    }
}
 
export default G7