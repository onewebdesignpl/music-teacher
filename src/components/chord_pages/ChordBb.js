import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../sass/_chordPages.scss';

class ChordBb extends Component {
    state = {  }
    render() { 
        return ( 
            <article>
                <h6>AKORDY Bb</h6>
                <p className="p-bold">Akordy w tonacji Bb wraz ze zdjęciami i krótką teorią.</p>
                <p>Wybierz jedną z poniższych kategorii lub zmień tonację za pomocją menu u góry strony.</p>
                <h6>Kategorie:</h6>
                <ul>
                    <li><Link to="#">Bb</Link></li>
                    <li><Link to="#">Bbm</Link></li>
                    <li><Link to="#">Bb7</Link></li>
                    <li><Link to="#">Bbm7</Link></li>
                </ul>
            </article>
         );
    }
}
 
export default ChordBb;