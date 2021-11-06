import { Switch, BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './App';
import { Board } from './subpage/chess/chess';
import { WelcomePage } from './subpage/welcome/welcome';

const ContentRoute = ()=> (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </Router>
)

export default ContentRoute;