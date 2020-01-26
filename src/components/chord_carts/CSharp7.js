import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoCSharp7 from '../../img/keyboards/CSharp7.png';

class CSharp7 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>C#7</h6>
                <img src={pianoCSharp7} alt="c"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">C# - F - G# - B</p>
            </div>
         )
    }
}
 
export default CSharp7;