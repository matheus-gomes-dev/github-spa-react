/* eslint linebreak-style: ["error", "windows"] */
/* eslint no-unused-expressions: 0 */

import { expect } from 'chai';
import { filterRepoArray, boldFilter } from '../src/utils/filterRepos';

describe('Utils', () => {
  // smoke tests
  describe('Smoke tests', () => {
    it('A função filterRepoArray deve existir', () => {
      expect(filterRepoArray).to.exist;
    });
    it('A função boldFilter deve existir', () => {
      expect(boldFilter).to.exist;
    });
  });
  describe('Testes para a função filterRepoArray', () => {
    it(`Deve retornar [{name: "python-libs", description: "some python libraries!"}]
    para filterRepoArray([{name: "python-libs", description: "some python libraries!"},
    {name: "node-libs", description: "some nodeJS libraries!"}], "python")`, () => {
      const testArray = [
        { name: 'python-libs', description: 'some python libraries!' },
        { name: 'node-libs', description: 'some nodeJS libraries!' },
      ];
      const expectedResult = [{ name: 'python-libs', description: 'some python libraries!' }];
      expect(filterRepoArray(testArray, 'python')).to.eql(expectedResult);
    });
    it(`Deve retornar [{name: "python-libs", description: "some python libraries!"},
    {name: "node-libs", description: "some nodeJS libraries!"}]
    para filterRepoArray([{name: "python-libs", description: "some python libraries!"},
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
    it(`Deve retornar [{name: node-libs, description: some nodeJS libraries!}]
    para filterRepoArray([{name: "python-libs", description: "some python libraries!"},
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
  });
});
