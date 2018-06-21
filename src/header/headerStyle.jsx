/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import styled from 'styled-components';

const StyleNav = styled.div`
  background-color: #24292e;
  color: rgba(255,255,255,0.75);
  input {
    height: 30px;
    width: 300px;
  }
  button, input {
    margin-left: 20px;
  }
  button {
    position: relative;
    bottom: 3px;
  }
  form {
    div {
      display: inline-block;
    }
  }
  .flex-center-div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .form-div {
    height: 70px;
    margin-top: 20px;
  }
  .project-description {
  }
`;

export default StyleNav;
