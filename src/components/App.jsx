import React from 'react';
import Page from './Page.jsx';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class App extends React.PureComponent {

  componentWillMount() {

    console.log('moountted', this.props)
  }

  render() {
    return(
      <Page />
    );
  }
};

var mapStateToProps = (state) => {
  return {
    events: state.events
  }
}



export default connect(mapStateToProps)(App);

