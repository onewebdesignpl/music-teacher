import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoFSharp7 from '../../img/keyboards/FSharp7.png';

class FSharp7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>FSharp7</h6>
                <img src={pianoFSharp7} alt="FSharp7"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">F# - A# - C# - E</p>
            </div>
         )
    }
}
 
export default FSharp7