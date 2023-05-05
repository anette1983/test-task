import { useDispatch, useSelector } from 'react-redux';
import { getStatusFilter } from 'redux/selectors';
// import css from './Task.module.css';
import { toggleFollowing } from 'redux/tweetsSlice';

export const Tweet = ({ tweet }) => {
  
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleFollowing(tweet.id));
  // на кнопке

  return (
    <div
    //   className={css.wrapper}
    >
      <p
      //   className={css.text}
      >
        {tweet.id}
      </p>
      <button type="button" onClick={handleToggle}></button>
    </div>
  );
};
