import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoCSharpMin7 from '../../img/keyboards/CSharpMin7.png';

class CSharpMin7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>C#min7</h6>
                <img src={pianoCSharpMin7} alt="c"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">C# - E - G# - B</p>
            </div>
         )
    }
}
 
export default CSharpMin7;