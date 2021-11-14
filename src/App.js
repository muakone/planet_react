
import './App.css';
import { Route, Routes} from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import NavBARAGAIN from './component/NavBARAGAIN';
import Card from './component/Card';
import Character from './component/Character';
import Navs from './component/Nav';


//import SideBar from './component/Sidebar';

function App() {
  return (
    <div className="bg-light">
      <Container>
        <Router>
          <div className="spacious">
            <Row className="justify-content-center">
              <div>
                <NavBARAGAIN />
                <div>
                  <Navs />
                </div>
              </div>
                      <Routes>
                        <Route exact path='/' element={<Card />} />
                        <Route exact path='/Character' element={<Character />} />
                      </Routes>
            </Row>
          </div>
        </Router>
      </Container>
    </div>
  );
}

export default App;
