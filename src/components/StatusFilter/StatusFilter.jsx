import { useSelector, useDispatch } from 'react-redux';
// import { Button } from 'components/Button/Button';
import { statusFilters } from 'redux/constants';
import { getStatusFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/filtersSlice';

// import css from './StatusFilter.module.css';
import React, { useState } from 'react';

import { StyledSelect } from './StatusFilter.styled';

// export const StatusFilter = () => {
//   const dispatch = useDispatch();
//   const filter = useSelector(getStatusFilter);

//   const handleFilterChange = filter => dispatch(setStatusFilter(filter));

//  const filter = useSelector(getFilter) || '';
//  const dispatch = useDispatch();

//  const handleFilterChange = event => {
//    const target = event.target.value.trim();
//    dispatch(setStatusFilter(target));
//  };
//* на ончендж брать ивент таргет велью и зписывать в диспатче
// посм в дод практике как было с селектом

//   return (
//     <div
//     //   className={css.wrapper}
//     >
//       <Button
//         selected={filter === statusFilters.all}
//         onClick={() => handleFilterChange(statusFilters.all)}
//       >
//         All
//       </Button>
//       <Button
//         selected={filter === statusFilters.follow}
//         onClick={() => handleFilterChange(statusFilters.follow)}
//       >
//         Follow
//       </Button>
//       <Button
//         selected={filter === statusFilters.following}
//         onClick={() => handleFilterChange(statusFilters.following)}
//       >
//         Following
//       </Button>
//     </div>
//   );
// };

/*import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

export const SearchForm = ({onSubmit}) => {
  const [searchCountry, setSearchCountry] = useState('');

  const handleInput = (e) => {
    const query = e.target.value;
    setSearchCountry(query);
    console.log(query);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchCountry);
  }

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select aria-label="select" name="region" required onChange={handleInput}>
        <option disabled defaultValue="">
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
 */

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
  };
  // проверить, как делала контрольований инпут с редаксом

  return (
    <div className="Select">
      <StyledSelect
        // defaultValue={options[0]}
        // value={filter}
        defaultValue={options[0]}
        onChange={handleFilterChange}
        options={options}
      />
    </div>
  );
}
