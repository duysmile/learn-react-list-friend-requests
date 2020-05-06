import React from 'react';
import FollowFriendListItem from './FollowFriendListItem';

class RecommendedFriends extends React.Component {
  render() {
    return (
      <div className="recommend-friends-list">
        <div className="header">
          <div className="title">
            Gợi ý cho bạn
          </div>
          <div>
            <a className="btn-show-all" href="#">
              Xem tất cả
            </a>
          </div>
        </div>
        {
          this.props.friends.map((user, index) => {
            return (
              <FollowFriendListItem user={user} key={index} />
            );
          })
        }
      </div>
    );
  }
}

export default RecommendedFriends;
