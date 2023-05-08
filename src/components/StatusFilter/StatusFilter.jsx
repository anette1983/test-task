import { useDispatch } from 'react-redux';

import { setStatusFilter } from 'redux/filtersSlice';

import { StyledSelect } from './StatusFilter.styled';
import { fetchTweets } from 'redux/operations';

const options = [
  { value: 'all', label: 'All' },
  { value: 'follow', label: 'Follow' },
  { value: 'following', label: 'Following' },
];

export default function FilterSelect() {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const target = event.value;
    dispatch(setStatusFilter(target));
    dispatch(fetchTweets());
  };

  return (
    <div className="Select">
      <StyledSelect
        defaultValue={options[0]}
        onChange={handleFilterChange}
        options={options}
      />
    </div>
  );
}
