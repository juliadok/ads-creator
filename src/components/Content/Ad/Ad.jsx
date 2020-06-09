import React from 'react';
import saveSvgAsPng from 'save-svg-as-png';
import styles from './Ad.module.css';

const DEFAULT_OPTIONS = {
  scale: 0.5,
  excludeCss: true,
};

// eslint-disable-next-line react/prefer-stateless-function
class Ad extends React.Component {
  constructor(props) {
    super(props);
    this.svg = React.createRef();
  }

  save(options) {
    saveSvgAsPng.saveSvgAsPng(this.svg.current, 'template.png', { ...DEFAULT_OPTIONS, ...options });
  }

  render() {
    const { ad, values } = this.props;
    return (
      <div className={styles.ad}>
        <svg ref={this.svg} className={styles.svg}>
          <image xlinkHref={ad.url} x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
          <foreignObject x="0" y="0" width="100%" height="100%">
            <div style={{ position: 'relative' }}>
              {values.map((value, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <p key={index} style={{ position: 'absolute', top: ad.blocks[index].y, left: ad.blocks[index].x }}>
                  {value}
                </p>
              ))}
            </div>
          </foreignObject>
        </svg>
      </div>
    );
  }
}

export default Ad;
