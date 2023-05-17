import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

export const Filter = ({ value, onFilter }) => {
  return (
    <>
      <Input
        placeholder="Search for contacts by name"
        name="filter"
        type="text"
        value={value}
        onChange={onFilter}
      ></Input>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
