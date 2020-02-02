import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoFSharpMin from '../../img/keyboards/FSharpMin.png';

class FSharpMin extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>FSharpMin</h6>
                <img src={pianoFSharpMin} alt="FSharpMin"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">F# - A - C#</p>
            </div>
         )
    }
}
 
export default FSharpMin