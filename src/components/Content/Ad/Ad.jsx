import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Ad extends React.Component {
  render() {
    const { ad, textBlock } = this.props;
    return (
      <div style={{ position: 'relative', overflow: 'hidden', paddingBottom: '100%' }}>
        <svg width="100%" height="100%" id="svg-chart" style={{ position: 'absolute', top: 0, left: 0 }}>
          <image xlinkHref={ad} x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMaxYMax slice" />
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
                <h1>{textBlock[0].text}</h1>
                <p>{textBlock[1].text}</p>
                <p>{textBlock[2].text}</p>
              </div>
            </div>
          </foreignObject>
        </svg>
      </div>
    );
  }
}

/*
                <h1>{formsPage.userData.title}</h1>
                <p>{formsPage.userData.main}</p>
                <p>{formsPage.userData.contact}</p>
*/

/* const Preview = ({ preview }) => {
  return (
    <div>
      <Image src={preview} alt="preview" fluid />
    </div>
  );
};
*/

export default Ad;
