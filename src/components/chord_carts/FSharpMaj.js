import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoFSharpMaj from '../../img/keyboards/FSharpMaj.png';

class FSharpMaj extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>FSharpMaj</h6>
                <img src={pianoFSharpMaj} alt="FSharpMaj"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">F# - A# - C#</p>
            </div>
         )
    }
}
 
export default FSharpMaj