/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import PropTypes from 'prop-types';
import StyleRepositoriesTable from './repositoriesTableStyle';

const boldMatch = (targetText, expression) => {
  if (!expression) {
    return targetText;
  }
  const pos = targetText.toLowerCase().indexOf(expression.toLowerCase());
  if (pos === -1) {
    return targetText;
  }
  if (pos === 0) {
    // initial chars of targetText will be bolded
    const boldedText = targetText.substring(pos, pos + expression.length);
    const unboldedText = targetText.substring(pos + expression.length, targetText.length);
    return <span><b>{boldedText}</b>{unboldedText}</span>;
  } else if (pos + expression.length !== targetText.length) {
    // mid chars of targetText will be bolded
    const boldedText = targetText.substring(pos, pos + expression.length);
    const unboldedText1 = targetText.substring(0, pos);
    const unboldedText2 = targetText.substring(pos + expression.length, targetText.length);
    return <span>{unboldedText1}<b>{boldedText}</b>{unboldedText2}</span>;
  }
  // final chars of targetText will be bolded
  const boldedText = targetText.substring(pos, targetText.length);
  const unboldedText = targetText.substring(0, pos);
  return <span>{unboldedText}<b>{boldedText}</b></span>;
};

const RepositoriesTable = (props) => {
  const { repos, filterText } = props;
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
              <td>{boldMatch(repo.name, filterText)}</td>
              <td>
                <i>
                  {
                    repo.description !== null ?
                    boldMatch(repo.description, filterText) :
                    boldMatch('No description', filterText)
                  }
                </i>
              </td>
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
  filterText: PropTypes.string,
};
RepositoriesTable.defaultProps = {
  repos: [],
  filterText: '',
};
/* --- end of props validation --- */

export default RepositoriesTable;
