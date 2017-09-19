import React from 'react';
import DropdownNames from './DropdownList';


const Drop = ({usernames}) => {
  console.log(usernames);
  return (
    <select>
      {
        usernames.map (user =>
          <DropdownNames user = {user} />
        )}
      </select>
  )
};

export default Drop