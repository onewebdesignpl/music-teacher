import React, { Component } from 'react'; 
import '../../sass/_chordPages.scss';

import pianoDbMaj from '../../img/keyboards/DbMaj.png';

class DbMaj extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="chord-cart">
                <h6>DbMaj</h6>
                <img src={pianoDbMaj} alt="c"/>
                <h5>DŹWIĘKI:</h5>
                <p className="chord-notes">Db - F - Ab</p>
            </div>
         )
    }
}
 
export default DbMaj;