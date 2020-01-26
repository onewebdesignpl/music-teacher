import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoCSharpMaj from '../../img/keyboards/CSharpMaj.png';

class CSharpMaj extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>C#maj</h6>
                <img src={pianoCSharpMaj} alt="c"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">C# - F - G#</p>
            </div>
         )
    }
}
 
export default CSharpMaj;