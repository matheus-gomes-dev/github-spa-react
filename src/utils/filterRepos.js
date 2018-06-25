/* eslint linebreak-style: ["error", "windows"] */

export default (repoArray, searchFilter) => {
  if (!searchFilter) {
    return repoArray;
  }
  const filteredRepos = repoArray.filter(repo => (
    repo.name !== null &&
    (
      (repo.description === null ? 'No description' : repo.description).toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1 ||
      repo.name.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1
    )
  ));
  return filteredRepos;
};
