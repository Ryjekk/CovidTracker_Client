import React from 'react';
import './ComponentToPrint.css';
import logo from '../../../Assets/logo.png';
const QRCode = require('qrcode.react');

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div className="qr_print">
        <img className="print_logo" src={logo} />
        <div className="heading_large">Novid</div>
        <QRCode
          id={this.props._id.toString()}
          value={this.props._id.toString()}
          size={500}
          level={'H'}
          includeMargin={true}
        />
        <div className="heading_medium ">Room: {this.props.name}</div>
        <div className="heading_medium ">Room-Id: {this.props.roomId}</div>
      </div>
    );
  }
}
export default ComponentToPrint;
