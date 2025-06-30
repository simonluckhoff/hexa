import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel'
// this carousel import is nested. doesn't need to show on App.js

function Home() {
    const slides = [
        { background: 'radial-gradient(circle, #757F75, #484E48)' },
        { background: 'radial-gradient(circle, #3d4460, #1A1D29)' },
        { background: 'radial-gradient(circle, #559fa4, #478589)' },
        { background: 'radial-gradient(circle, #a98bcd, #967BB6)' },
        { background: 'radial-gradient(circle, #383636, #262424)' },
        { background: 'radial-gradient(circle,rgb(1, 187, 144), #008566)' },
        { background: 'radial-gradient(circle,rgb(116, 86, 64), #523d2d)' }
    ];

    return (
        <div className="main">
            <div className="carousel-body">
                <Carousel slides={slides}>
                    <div className="homepage">
                        <p className='home-hexa'>Hexa</p>
                        <Link className='explore-from-home' to="/Index">Explore your mood in hex</Link> <br /> 
                        <Link className='explore-from-home' to="/New-Colour">Add your mood in hex</Link>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Home;


