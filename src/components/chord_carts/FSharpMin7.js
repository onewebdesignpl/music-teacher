import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoFSharpMin7 from '../../img/keyboards/FSharpMin7.png';

class FSharpMin7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>FSharpMin7</h6>
                <img src={pianoFSharpMin7} alt="FSharpMin7"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">F# - A - C# - E</p>
            </div>
         )
    }
}
 
export default FSharpMin7