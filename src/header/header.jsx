/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import StyleNav from './headerStyle';
import searchUser from './headerActions';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { headerInput: '', userToBeSearched: '' };
    this.updateSearchUser = this.updateSearchUser.bind(this);
    this.updateHeaderInput = this.updateHeaderInput.bind(this);
  }

  updateSearchUser() {
    const user = this.state.headerInput;
    this.setState({ ...this.state, userToBeSearched: user });
    this.props.searchUser(user);
  }

  updateHeaderInput(e) {
    this.setState({ ...this.state, headerInput: e.target.value });
  }

  render() {
    const { headerInput } = this.state;
    return (
      <StyleNav>
        <div className="flex-center-div">
          <img width="250" height="102" alt="GitHub" src="http://www.hack.institute/events/connected-car/img/github-logo-white.png" />
        </div>
        <div className="flex-center-div project-description">
          <i className="fa fa-cog fa-fw" aria-hidden="true" />
          <span> Repository Search </span>
        </div>
        <div className="flex-center-div form-div">
          <form onSubmit={(e) => { this.updateSearchUser(); e.preventDefault(); }}>
            <div>
              <input
                type="text"
                className="form-control"
                value={headerInput}
                placeholder="Github username..."
                onChange={this.updateHeaderInput}
              />
            </div>
            <div>
              <button type="submit" className="btn btn-success">Search</button>
            </div>
          </form>
        </div>
      </StyleNav>
    );
  }
}

/* --- props validation --- */
Header.propTypes = {
  searchUser: PropTypes.func,
};
Header.defaultProps = {
  searchUser: null,
};
/* --- end of props validation --- */

/* --- redux settings --- */
const mapDispatchToProps = dispatch => bindActionCreators({ searchUser }, dispatch);
export default connect(null, mapDispatchToProps)(Header);
/* --- end of redux settings --- */
