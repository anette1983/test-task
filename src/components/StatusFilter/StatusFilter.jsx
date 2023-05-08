import { useSelector, useDispatch } from 'react-redux';
import { getStatusFilter } from 'redux/selectors';
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
  const filter = useSelector(getStatusFilter);
  console.log('filter :>> ', filter);

  const handleFilterChange = event => {
    const target = event.value;
    // console.log('event.target :>> ', event);
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
