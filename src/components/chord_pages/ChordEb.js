import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../sass/_chordPages.scss';

class ChordEb extends Component {
    state = {  }
    render() { 
        return ( 
            <article>
                <h6>AKORDY Eb</h6>
                <p className="p-bold">Akordy w tonacji Eb wraz ze zdjęciami i krótką teorią.</p>
                <p>Wybierz jedną z poniższych kategorii lub zmień tonację za pomocją menu u góry strony.</p>
                <h6>Kategorie:</h6>
                <ul>
                    <li><Link to="#">Eb</Link></li>
                    <li><Link to="#">Ebm</Link></li>
                    <li><Link to="#">Eb7</Link></li>
                    <li><Link to="#">Ebm7</Link></li>
                </ul>
            </article>
         );
    }
}
 
export default ChordEb;