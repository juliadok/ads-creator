import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Ad extends React.Component {
  render() {
    const { ad, values } = this.props;
    return (
      <div style={{ position: 'relative', overflow: 'hidden', paddingBottom: '100%' }}>
        <svg width="100%" height="100%" id="svg-chart" style={{ position: 'absolute', top: 0, left: 0 }}>
          <image xlinkHref={ad.url} x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMaxYMax slice" />
          <foreignObject x="0" y="0" width="100%" height="100%">
            <div style={{ position: 'relative' }}>
              <h1 style={{ position: 'absolute', top: ad.blocks[0].y, left: ad.blocks[0].x }}>{values[0]}</h1>
              <p style={{ position: 'absolute', top: ad.blocks[1].y, left: ad.blocks[1].x }}>{values[1]}</p>
              <p style={{ position: 'absolute', top: ad.blocks[2].y, left: ad.blocks[2].x }}>{values[2]}</p>
            </div>
          </foreignObject>
        </svg>
      </div>
    );
  }
}

export default Ad;
