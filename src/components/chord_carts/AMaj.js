import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoAMaj from '../../img/keyboards/AMaj.png';

class AMaj extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>AMaj</h6>
                <img src={pianoAMaj} alt="AMaj"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">A - C# - E</p>
            </div>
         )
    }
}
 
export default AMaj