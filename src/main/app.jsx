/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import GitHub from 'github-api';
import PropTypes from 'prop-types';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../css/custom.css';
import Header from '../header/header';

const gh = new GitHub();

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { userToBeSearched: '' };
    this.changeUserToBeSearched = this.changeUserToBeSearched.bind(this);
  }

  componentDidUpdate() {
    const { userToBeSearched } = this.state;
    const { searchUser } = this.props;
    if (searchUser !== userToBeSearched) {
      this.changeUserToBeSearched(searchUser);
    }
  }

  changeUserToBeSearched(user) {
    // html_url param
    console.log(user);
    const searchedUser = gh.getUser(user);
    searchedUser.listRepos()
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({ ...this.state, userToBeSearched: user });
  }

  render() {
    return (
      <Header />
    );
  }
}


/* --- props validation --- */
Home.propTypes = {
  searchUser: PropTypes.string,
};
Home.defaultProps = {
  searchUser: 'john',
};
/* --- end of props validation --- */


/* --- redux settings --- */
const mapStateToProps = state => ({ searchUser: state.header.searchUser });
export default connect(mapStateToProps, null)(Home);
/* --- end of redux settings --- */
