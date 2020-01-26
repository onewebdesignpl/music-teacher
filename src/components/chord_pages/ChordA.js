import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../sass/_chordPages.scss';

class ChordA extends Component {
    state = {  }
    render() { 
        return ( 
            <article>
                <h6>AKORDY A</h6>
                <p className="p-bold">Akordy w tonacji A wraz ze zdjęciami i krótką teorią.</p>
                <p>Wybierz jedną z poniższych kategorii lub zmień tonację za pomocją menu u góry strony.</p>
                <h6>Kategorie:</h6>
                <ul>
                    <li><Link to="#">A</Link></li>
                    <li><Link to="#">Am</Link></li>
                    <li><Link to="#">A7</Link></li>
                    <li><Link to="#">Am7</Link></li>
                </ul>
            </article>
         );
    }
}
 
export default ChordA;
