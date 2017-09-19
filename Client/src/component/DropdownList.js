import React from 'react';

const DropdownNames = ({user}) => {
  console.log(user.user);
  return (
    <option>
      {user.user}
    </option>
  )
}

export default DropdownNames