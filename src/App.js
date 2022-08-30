import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import ButtonsPage from './pages/buttons';

function App() {
  return (
    <BrowserRouter>
      <h2>Components</h2>
      <ul style={{ margin: '30px 0', display: 'flex', flexWrap: 'wrap' }}>
        <li style={{ padding: '4px' }}>
          <Link to="/buttons">Button</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/buttons" children={<ButtonsPage />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
