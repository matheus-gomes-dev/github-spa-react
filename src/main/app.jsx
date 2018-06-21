/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import GitHub from 'github-api';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../css/custom.css';
import Header from '../header/header';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // basic auth
    const gh = new GitHub();
    const clayreimann = gh.getUser('clayreimann');
    console.log(clayreimann);
    clayreimann.listStarredRepos()
      .then(function ({ data: reposJson }) {
        console.log(reposJson);
        console.log(`clayreimann has ${reposJson.length} repos!`);
      });
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    return (
      <Header />
    );
  }
}

const mapStateToProps = state => ({ searchUser: state.header.searchUser });
export default connect(mapStateToProps, null)(Home);
