import { BackLink } from 'components/Backlink/Backlink';
import FilterSelect, {
  StatusFilter,
} from 'components/StatusFilter/StatusFilter';
import { TweetList } from 'components/TweetList/TweetList';
// import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Tweets = () => {
  const location = useLocation();

  return (
    <>
      <BackLink to={location.state.from}>Go back</BackLink>
      <p>TweetsPage</p>
      <FilterSelect />
      <TweetList />
    </>
  );
};

export default Tweets;
