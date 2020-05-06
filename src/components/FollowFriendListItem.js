import React from 'react';

class FollowFriendListItem extends React.Component {
  render() {
    return (
      <div className="item-user">
        <div className="info-user">
          <div className="avatar">
            <img src={this.props.user.avatar} />
          </div>
          <div className="info">
            <span className="name">
              {this.props.user.name}
            </span>
            <span className="hint">
              Gợi ý cho bạn
            </span>
          </div>
        </div>
        <div>
          <a className="btn-follow" href="#">
            Theo dõi
          </a>
        </div>
      </div>
    );
  }
}

export default FollowFriendListItem;
