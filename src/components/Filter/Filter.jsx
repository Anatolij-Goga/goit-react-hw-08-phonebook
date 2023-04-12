import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
import {
  FilterContainer,
  FilterLabel,
  FilterInput,
} from 'components/Filter/Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.value);

  const filterChange = e => {
    dispatch(filterContact(e.currentTarget.value));
  };
  return (
    <FilterContainer>
      <FilterLabel>
        Filter
        <FilterInput type="name" value={filter} onChange={filterChange} />
      </FilterLabel>
    </FilterContainer>
  );
};

export default Filter;
