/* eslint linebreak-style: ["error", "windows"] */

export const filterRepoArray = (repoArray, searchFilter) => {
  const filteredRepos = repoArray.filter(repo => (
    repo.description !== null &&
    (
      repo.description.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1 ||
      repo.name.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1
    )
  ));
  return filteredRepos;
};


export const boldFilter = (sentence, filter) => {
  return null;
};
