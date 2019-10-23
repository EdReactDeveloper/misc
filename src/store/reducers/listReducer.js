import {FETCH_USERS, CHANGE_TEXT, CHANGE_PAGE}  from '../actions/types'; 

const initialState = {
  users: [],
  text: '', 
  pageSize: 10, 
  totalUsersCount: 0,
  currentPage: 2
}

export default function list(state = initialState, action){
  const {type, payload} = action

  switch(type){
    case FETCH_USERS: 
      return {
        ...state, users: payload.items, totalUsersCount: payload.totalCount
      }
    case CHANGE_TEXT: 
    return {
      ...state, text: payload
    }
    case CHANGE_PAGE: 
    return {
      ...state, currentPage: payload
    }
      default: return state
  }
}