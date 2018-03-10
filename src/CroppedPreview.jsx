import React from 'react';

class CroppedPreview extends React.Component {
  handlePrint() {
    let printWindow = window.open('', 'printWindow');
    printWindow.document.write(
      `<div style='text-align:center'><img src=${
        this.props.imageUrl
      } style='margin:10px;max-height:100px' alt="" /></div>`
    );
    setTimeout(function() {
      printWindow.print();
      printWindow.close();
    }, 100);
  }

  render() {
    return (
      <div className="image-container">
        {this.props.cropped ? (
          <React.Fragment>
            <h4>Cropped Image</h4>
            <img src={this.props.imageUrl} alt="" />
            <button onClick={this.handlePrint.bind(this)}>
              Print the Image
            </button>
          </React.Fragment>
        ) : (
          <button className="disable">Print the Image</button>
        )}
      </div>
    );
  }
}

export default CroppedPreview;
