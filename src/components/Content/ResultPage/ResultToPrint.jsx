import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class ResultToPrint extends React.Component {
  render() {
    const { formsPage } = this.props;
    const { preview } = this.props;
    return (
      <div style={{ position: 'relative', overflow: 'hidden', paddingBottom: '100%' }}>
        <svg width="100%" height="100%" id="svg-chart" style={{ position: 'absolute', top: 0, left: 0 }}>
          <image xlinkHref={preview} x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMaxYMax slice" />
          <foreignObject x="0" y="0" width="100%" height="100%">
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  paddingLeft: '20px',
                  paddingRight: '20px',
                }}
              >
                <h1>{formsPage.userData.title}</h1>
                <p>{formsPage.userData.main}</p>
                <p>{formsPage.userData.contact}</p>
              </div>
            </div>
          </foreignObject>
        </svg>
      </div>
    );
  }
}

export default ResultToPrint;
