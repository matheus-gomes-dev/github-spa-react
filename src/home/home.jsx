/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import GitHub from 'github-api';
import PropTypes from 'prop-types';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../css/custom.css';
import HomeStyle from './homeStyle';
import Loader from '../loader/loader';
import RepositoriesTable from '../repositoriesTable/repositoriesTable';
import filterRepoArray from '../utils/filterRepos';

const gh = new GitHub();

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userToBeSearched: '',
      homeStatus: 'nothingToShow',
      showLoader: false,
      repositoriesArray: [],
      visibleRepositories: [],
      repositoriesFilter: '',
    };
    this.changeUserToBeSearched = this.changeUserToBeSearched.bind(this);
    this.searchRepo = this.searchRepo.bind(this);
  }

  componentDidUpdate() {
    const { userToBeSearched } = this.state;
    const { searchUser } = this.props;
    if (searchUser !== userToBeSearched) {
      this.changeUserToBeSearched(searchUser);
    }
  }

  changeUserToBeSearched(user) {
    this.setState({ ...this.state, userToBeSearched: user, showLoader: true });
    const searchedUser = gh.getUser(user);
    searchedUser.listRepos()
      .then((response) => {
        response.data.sort((a, b) => (b.stargazers_count - a.stargazers_count));
        this.setState({
          ...this.state,
          homeStatus: 'userFound',
          showLoader: false,
          repositoriesArray: response.data,
          visibleRepositories: response.data,
        });
      })
      .catch(() => {
        this.setState({
          ...this.state,
          homeStatus: 'userNotFound',
          showLoader: false,
          repositoriesArray: [],
          visibleRepositories: [],
        });
      });
  }

  searchRepo(e) {
    const { repositoriesArray } = this.state;
    const searchFilter = e.target.value;
    const filteredRepos = filterRepoArray(repositoriesArray, searchFilter);
    this.setState({
      ...this.state,
      visibleRepositories: filteredRepos,
      repositoriesFilter: searchFilter,
    });
  }

  render() {
    const {
      homeStatus,
      userToBeSearched,
      showLoader,
      visibleRepositories,
      repositoriesFilter,
    } = this.state;
    return (
      <div >
        <HomeStyle className="text-center">
          {(homeStatus === 'nothingToShow' && !showLoader) && <span>No repositories to show...</span>}
          {(homeStatus === 'userNotFound' && !showLoader) && <span>User {userToBeSearched} was not found...</span>}
        </HomeStyle>
        <div className="text-center">
          {showLoader && <Loader />}
        </div>
        { (homeStatus === 'userFound' && !showLoader) &&
          <div className="container">
            <h1>{`${userToBeSearched}`}</h1>
            <input
              className="form-control"
              type="text"
              placeholder="Search user's repositories..."
              value={repositoriesFilter}
              onChange={this.searchRepo}
            />
            <br />
            <RepositoriesTable repos={visibleRepositories} filterText={repositoriesFilter} />
          </div>
        }
      </div>
    );
  }
}


/* --- props validation --- */
Home.propTypes = {
  searchUser: PropTypes.string,
};
Home.defaultProps = {
  searchUser: '',
};
/* --- end of props validation --- */


/* --- redux settings --- */
const mapStateToProps = state => ({ searchUser: state.header.searchUser });
export default connect(mapStateToProps, null)(Home);
/* --- end of redux settings --- */
