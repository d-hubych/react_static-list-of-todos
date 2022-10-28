// Add the required types and props
import React from 'react';
import { User } from '../../types/UserInfoType';

import './UserInfo.scss';

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <div className="UserInfo">
    <h2 className="UserInfo__name">{name}</h2>
    <a className="UserInfo__email" href={email}>
      {email}
    </a>
  </div>
);
