import React, { Component } from 'react';

class NavItem extends Component {
  render() {
    return (
      <div>
        <a
          onClick={() => this.props.toSlide(this.props.index)}
          className={'Carousel-nav-bullet' + (this.props.isActive ? ' active' : '')}
          />
        <style jsx>{`
          .Carousel-nav-bullet {
            width: 10px;
            height: 10px;
            border-radius: 10px;
            cursor: pointer;
            background-color: #fff;
            border: solid 1px #144372;
            display: block;
            margin: 0 4px;
          }
          .Carousel-nav-bullet.active {
            background-color: #144372;
          }
       `}</style>
      </div>
    )
  }
}

export default NavItem;
