import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../sass/_chordPages.scss';

class ChordGb extends Component {
    state = {  }
    render() { 
        return ( 
            <article>
                <h6>AKORDY Gb</h6>
                <p className="p-bold">Akordy w tonacji Gb wraz ze zdjęciami i krótką teorią.</p>
                <p>Wybierz jedną z poniższych kategorii lub zmień tonację za pomocją menu u góry strony.</p>
                <h6>Kategorie:</h6>
                <ul>
                    <li><Link to="#">Gb</Link></li>
                    <li><Link to="#">Gbm</Link></li>
                    <li><Link to="#">Gb7</Link></li>
                    <li><Link to="#">Gbm7</Link></li>
                </ul>
            </article>
         );
    }
}
 
export default ChordGb;