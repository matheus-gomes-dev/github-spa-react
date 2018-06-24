/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import PropTypes from 'prop-types';
import StyleRepositoriesTable from './repositoriesTableStyle';

const RepositoriesTable = (props) => {
  const { repos } = props;
  return (
    <StyleRepositoriesTable className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Stars</th>
        </tr>
      </thead>
      <tbody>
        {
          repos.map((repo, index) => (
            <tr
              className="repository-row"
              key={repo.id}
              onClick={() => {
                window.open(
                  `${repo.html_url}`,
                  '_blank',
                );
              }}
            >
              <th scope="row">{index + 1}</th>
              <td>{repo.name}</td>
              <td><i>{repo.description !== null ? repo.description : 'No description'}</i></td>
              <td>{repo.stargazers_count}</td>
            </tr>
          ))
        }
      </tbody>
    </StyleRepositoriesTable>
  );
};

/* --- props validation --- */
RepositoriesTable.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object),
};
RepositoriesTable.defaultProps = {
  repos: [],
};
/* --- end of props validation --- */

export default RepositoriesTable;
