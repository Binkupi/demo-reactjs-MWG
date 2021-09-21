import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';

export class Filejs extends Component {
    static displayName = Filejs.name;
  
    render () {
      return (
        <ScriptTag type="text/javascript" src="/assets/js/jquery-2.1.4.min.js" />
      );
    }
  }