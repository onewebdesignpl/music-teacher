import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoA7 from '../../img/keyboards/A7.png';

class A7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>A7</h6>
                <img src={pianoA7} alt="A7"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">A - C# - E - G</p>
            </div>
         )
    }
}
 
export default A7