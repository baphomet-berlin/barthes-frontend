import React, { Component } from 'react';
import './text-box.scss';

export default class TextBox extends Component {

  render() {
    return (
      <div id="cmp-text-box">
        <div className="text-box--text">
          { `The subject who is under the ascendancy of the Imagerepertoire
          "offers" nothing in the play of the signifier: he
          dreams little, never pens. If he writes, his writing is
          smooth as an Image, always seeking to reinstate a legible
          surface of the words: anachronistic, in short, with regard
          to the modern text-which, a contrario, is defined by the
          abolition of the Image-repertoire: nothing "novelistic," no
          simulated Image: for Imitation, Representation, and
          Analogy are forms of coalescence: outmoded.` }
        </div>
      </div>
    );
  }

}