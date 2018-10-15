import React from 'react';
import PropTypes from 'prop-types';


const List = ({venues}) => {
  const listOfVenues = venues.map( venue => <li key={venue.id}> {venue.name} </li>)
  return (
      <ul>
        {listOfVenues}
      </ul>
  );
};

List.propTypes = {
  'venues': PropTypes.array
};
export default List;
