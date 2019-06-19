import React from 'react';
import Faker from "faker";

const GroupMembers = ({members}) => {
  removeMember = (index) => {
    this.props.removeMember(index);
  }

  const memberList = members.map((member, index) => {
    return (
      <div class="card group-member-card">
        <div class="ui items">
          <div class="item">
            <div class="ui mini circular image">
              <img src={Faker.image.avatar()} />
            </div>
            <div class="middle aligned content group-member">
              <a class="header">{member.name}</a>
              <div class="meta">
                <span>{member.email}</span>
              </div>
            </div>
          </div>
          {index > 0 &&
          <div>
            <div class="ui mini vertical animated basic button">
              <div class="visible content">Edit</div>
              <div class="hidden content">
                <i class="right pencil icon"></i>
              </div>
            </div>
            <div class="ui mini vertical animated red basic button" onClick={() => this.removeMember(index)}>
              <div class="visible content">Remove</div>
              <div class="hidden content">
                <i class="right trash icon"></i>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    )
  });

  return <div class="ui four doubling cards">{memberList}</div>
}

export default GroupMembers;