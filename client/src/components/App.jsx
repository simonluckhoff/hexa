import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contents from './pages/Contents';
import ColourPage from '../pages/ColourPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Contents />} />
                <Route path="/colours/:slug" element={<ColourPage />} />
            </Routes>
        </Router>
    );
}

export default App;