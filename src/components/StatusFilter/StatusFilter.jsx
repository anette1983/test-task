import { useDispatch, useSelector } from 'react-redux';

import { setStatusFilter } from 'redux/filtersSlice';

import { StyledSelect } from './StatusFilter.styled';
import { fetchTweets, fetchTweetsByPage } from 'redux/operations';
import { getLimit } from 'redux/selectors';
import { deleteLimit } from 'redux/tweetsSlice';

const options = [
  { value: 'all', label: 'All' },
  { value: 'follow', label: 'Follow' },
  { value: 'following', label: 'Following' },
];

export default function FilterSelect() {
  const dispatch = useDispatch();
  const limit = useSelector(getLimit);
  

  const handleFilterChange = event => {
    const target = event.value;
    if (target === 'all') {
      dispatch(setStatusFilter(target));
      dispatch(deleteLimit(3));
      dispatch(fetchTweetsByPage(limit));
    } else {
      dispatch(setStatusFilter(target));
      dispatch(fetchTweets());
    }
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
