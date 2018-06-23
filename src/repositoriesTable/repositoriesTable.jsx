/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import PropTypes from 'prop-types';

const RepositoriesTable = (props) => {
  const { repos } = props;
  return (
    <table className="table">
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
            <tr key={repo.id}>
              <th scope="row">{index}</th>
              <td>repoName</td>
              <td>repoDescription</td>
              <td>stars</td>
            </tr>
          ))
        }
        {/* <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </table>
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
