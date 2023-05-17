import { css } from 'styled-components';

export const baseInputStyles = css`
  padding: 5px;
  border: 1px solid blue;
  border-radius: 4px;
  font-size: 1em;

  &:focus {
    border-color: grey;
    outline: none;
  }
`;
