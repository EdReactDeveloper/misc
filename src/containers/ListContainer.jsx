import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTextAction, fetchUsersAction, changePageAction } from '../store/actions/users';
import List from '../components/List/List';

class ListContainer extends Component {

  componentDidMount() {
    const currentPage = this.props.currentPage
    const pageSize = this.props.pageSize
    this.props.fetchUsersAction(currentPage, pageSize)
  }

  render() {

    let pagesNumber = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesNumber; i += 1) {
      pages.push(i)
    }

    return (
      <List
        users={this.props.users}
        text={this.props.text}
        pageSize={this.props.pageSize}
        pages={pages}
        currentPage={this.props.currentPage}
        changePageAction={this.props.changePageAction}
        changeTextAction={this.props.changeTextAction}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.list.users,
    text: state.list.text,
    pageSize: state.list.pageSize,
    totalUsersCount: state.list.totalUsersCount,
    currentPage: state.list.currentPage
  }
}

export default connect(mapStateToProps, { changeTextAction, fetchUsersAction, changePageAction })(ListContainer);