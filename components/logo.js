import { Component } from 'react';

class Logo extends Component {
  render() {
    return <div className="Logo">
      <img
        src={this.props.color == 'white'
          ? '/static/components/logo/tpy-logo-white.svg'
          : '/static/components/logo/tpy-logo.svg'}
        className="logo"
        width={this.props.width}
        height={this.props.height}
        style={this.props.style}
        />
      <style jsx>{`
        .Logo {
          min-height: 100%;
        }
        .logo {
          width: 160px;
          height: 32px;
          max-width: unset;
          position: relative;
        }
        @media (min-width: 480px) {
          .logo {
            width: 242px;
            height: 48px;
          }
        }
      `}</style>
    </div>
  }
}

export default Logo;
