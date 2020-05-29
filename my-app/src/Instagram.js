import insta from './instagram.JPG';
import { Image } from 'semantic-ui-react';
import React from 'react';
import ReactDOM from 'react-dom';

export class Instagram extends React.Component {
  render () {
    return (
      <Image src={insta}/>
    );
  }
}

ReactDOM.render(<Instagram/>, document.getElementById('root'));

