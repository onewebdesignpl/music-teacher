import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoDmin7 from '../../img/keyboards/Dmin7.png';

class Dmin7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>Dmin7</h6>
                <img src={pianoDmin7} alt="cmaj"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">D - F - A - C</p>
            </div>
         )
    }
}
 
export default Dmin7