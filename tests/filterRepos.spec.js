/* eslint linebreak-style: ["error", "windows"] */
/* eslint no-unused-expressions: 0 */

import { expect } from 'chai';
import filterRepoArray from '../src/utils/filterRepos';

describe('Utils', () => {
  // smoke tests
  describe('Smoke tests', () => {
    it('Function filterRepoArray must exist', () => {
      expect(filterRepoArray).to.exist;
    });
  });
  describe('Tests to function filterRepoArray (return only repositories which name or description matches with filter string)', () => {
    it(`Should return [{name: "python-libs", description: "some python libraries!"}]
    to filterRepoArray([{name: "python-libs", description: "some python libraries!"},
    {name: "node-libs", description: "some nodeJS libraries!"}], "python")`, () => {
      const testArray = [
        { name: 'python-libs', description: 'some python libraries!' },
        { name: 'node-libs', description: 'some nodeJS libraries!' },
      ];
      const expectedResult = [{ name: 'python-libs', description: 'some python libraries!' }];
      expect(filterRepoArray(testArray, 'python')).to.eql(expectedResult);
    });
    it(`Should return [{name: "python-libs", description: "some python libraries!"},
    {name: "node-libs", description: "some nodeJS libraries!"}]
    to filterRepoArray([{name: "python-libs", description: "some python libraries!"},
    {name: "node-libs", description: "some nodeJS libraries!"}], "libraries")`, () => {
      const testArray = [
        { name: 'python-libs', description: 'some python libraries!' },
        { name: 'node-libs', description: 'some nodeJS libraries!' },
      ];
      const expectedResult = [
        { name: 'python-libs', description: 'some python libraries!' },
        { name: 'node-libs', description: 'some nodeJS libraries!' },
      ];
      expect(filterRepoArray(testArray, 'libraries')).to.eql(expectedResult);
    });
    it(`Should return [{name: node-libs, description: some nodeJS libraries!}]
    to filterRepoArray([{name: "python-libs", description: "some python libraries!"},
    {name: "node-libs", description: "some nodeJS libraries!"}], "libraries")`, () => {
      const testArray = [
        { name: 'python-libs', description: 'some python libraries!' },
        { name: 'node-libs', description: 'some nodeJS libraries!' },
      ];
      const expectedResult = [
        { name: 'node-libs', description: 'some nodeJS libraries!' },
      ];
      expect(filterRepoArray(testArray, 'nodejs')).to.eql(expectedResult);
    });
    it(`Should return [{name: "some-repo", description: null}]
    to filterRepoArray([{name: "some-repo", description: null},
    {name: "node-libs", description: "some nodeJS libraries!"}], "no description")`, () => {
      const testArray = [
        { name: 'some-repo', description: null },
        { name: 'node-libs', description: 'some nodeJS libraries!' },
      ];
      const expectedResult = [
        { name: 'some-repo', description: null },
      ];
      expect(filterRepoArray(testArray, 'no description')).to.eql(expectedResult);
    });
  });
});
