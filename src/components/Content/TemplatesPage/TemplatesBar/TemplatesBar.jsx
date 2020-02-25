import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Template from './Template/Template';

const TemplatesBar = ({ urls, setAd }) => {
  return (
    <>
      <Row>
        {urls.map(({ url, id, blocks }) => (
          <Template url={url} key={id} id={id} blocks={blocks} setAd={setAd} />
        ))}
      </Row>
      <Row className="xs-auto">
        <Col className="mb-3 px-auto">
          <Link to="/text">
            <Button variant="dark" as="span">
              Choose
            </Button>
          </Link>
        </Col>
      </Row>
    </>
  );
};

/*
class TemplatesBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
    };
  }

  async componentDidMount() {
    const { data: urls } = await axios.get('/templates.json');
    this.setState({ urls });
  }

  render() {
    const { urls } = this.state;
    const { setPreview } = this.props;
    return (
      <>
        <Row>
          {urls.map(({ url, id }) => (
            <Template url={url} key={id} id={id} setPreview={setPreview} />
          ))}
        </Row>
        <Row className="xs-auto">
          <Col className="mb-3 px-auto">
            <Link to="/text">
              <Button variant="dark" as="span">
                Choose
              </Button>
            </Link>
          </Col>
        </Row>
      </>
    );
  }
}
*/

export default TemplatesBar;
