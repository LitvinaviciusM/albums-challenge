import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Filter from '../filter';
import Feed from '../feed';
import { init } from './actions';
import './index.scss';

class App extends Component {
  componentDidMount() {
    const { init } = this.props;

    init();
  };

  render() {
    const { filter } = this.props;

    return(
      <div className="main">
        <Filter filter={filter} />
        <Feed feed={filter.feed[filter.currentHash]} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  init: () => dispatch(init()),
});

const mapStateToProps = state => ({
  filter: state.filter,
});

App.propTypes = {
  filter: PropTypes.object,
  init: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
