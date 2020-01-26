import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoCSharpMin from '../../img/keyboards/CSharpMin.png';

class CSharpMin extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>C#min</h6>
                <img src={pianoCSharpMin} alt="c"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">C# - E - G#</p>
            </div>
         )
    }
}
 
export default CSharpMin;