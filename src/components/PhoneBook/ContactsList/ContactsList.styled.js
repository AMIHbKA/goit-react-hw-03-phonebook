import styled from 'styled-components';
import { Trash as TrashIcon } from '../UI/icons';
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin-top: 2em;
  padding-inline: 0;
  list-style: none;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: auto;
  white-space: nowrap;
`;

export const Trash = styled(TrashIcon)`
  width: 1em;
  height: 1em;
  vertical-align: middle;

  &:hover,
  :focus {
    fill: blue;
  }
`;

export const Button = styled.button`
  width: 2em;
  height: 2em;
  padding: 0;
  margin-right: 1em;
  background-color: blue;
  border-radius: 4px;
  border: 1px solid blue;
  cursor: pointer;
  svg {
    fill: #fff;
  }

  &:hover,
  :focus {
    background-color: #fff;
    svg {
      fill: blue;
    }
  }
`;
