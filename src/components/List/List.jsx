import React from 'react';
import User from './User/User';
import style from './List.module.css'
import PropTypes from 'prop-types'; 

const List = ({ users, text, pages, pageSize, currentPage, changePageAction, changeTextAction }) => {

  const userList = users.map(user => <User key={user.id} data={user} />)

  const drawPages = pages.map(p => <span key={p}
    onClick={() => changePageAction(p, pageSize)}
    className={ currentPage === p ? style.selectedPage : ''}>{p}</span>)

  return (
    <div>
      <input type="text" value={text} onChange={(e) => changeTextAction(e.target.value)} />
      <div>{text}</div>
      {drawPages}
      <div>
        {users.length > 0 ? userList : <div>loading...</div>}
      </div>
    </div>
  );
};

List.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  currentPage: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  pageSize: PropTypes.number.isRequired,
  changePageAction: PropTypes.func.isRequired,
  changeTextAction: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired, 
    uniqueUrlName: PropTypes.string,
    photos: PropTypes.shape({
      small: PropTypes.string,
      large: PropTypes.string
    }),
    status: PropTypes.string,
    followed: PropTypes.bool.isRequired
  }))
 }

export default List;