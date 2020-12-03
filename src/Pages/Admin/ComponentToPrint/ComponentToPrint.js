import React from 'react';
import './ComponentToPrint.css';
const QRCode = require('qrcode.react');

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div className="qr_print">
        <div className="heading_medium ">Here might be a sponsor logo</div>
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
