import './App.css';
import { Container, Row } from 'react-bootstrap';
import NavBARAGAIN from './component/NavBARAGAIN';
import Navs from './component/Nav';

function App() {
  return (
    <div className="bg-light">
      <Container>
          <div className="spacious">
            <Row className="justify-content-center">
              <div>
                <NavBARAGAIN />
                <div>
                  <Navs />
                </div>
              </div>
            </Row>
          </div>
      </Container>
    </div>
  );
}

export default App;
