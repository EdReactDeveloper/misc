import React from 'react';
import style from './User.module.css'; 

const User = ({data: {followed, name, id}}) => {
  return (
    <div className={style.user}>
      <div>имя: {name}</div>
      <div>id: {id}</div>
      <div>{followed ? 'unfollow': 'follow'}</div>
    </div>
  );
};

export default User;