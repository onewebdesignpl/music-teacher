import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../sass/_chordPages.scss';

class ChordE extends Component {
    state = {  }
    render() { 
        return ( 
            <article>
                <h6>AKORDY E</h6>
                <p className="p-bold">Akordy w tonacji E wraz ze zdjęciami i krótką teorią.</p>
                <p>Wybierz jedną z poniższych kategorii lub zmień tonację za pomocją menu u góry strony.</p>
                <h6>Kategorie:</h6>
                <ul>
                    <li><Link to="#">E</Link></li>
                    <li><Link to="#">Em</Link></li>
                    <li><Link to="#">E7</Link></li>
                    <li><Link to="#">Em7</Link></li>
                </ul>
            </article>
         );
    }
}
 
export default ChordE;