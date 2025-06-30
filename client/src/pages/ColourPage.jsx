import { useParams } from 'react-router-dom';
import colours from '../components/colours.json';
//  the { colours } is invalid for json import. 

function ColourPage() {
    // Because of :slug in app.js, allows useParams() to fetch slug from JSON and can then access all values. 
    // Actually mad simple. 
    const {slug} = useParams();
    const result = colours.colours.find(c => c.slug === slug);

    if (!result) {
        return <div>Colour not found</div>;
    }

    return (
    <div className="main" style={{backgroundColor: result.hex}}>
        <div className="artwork">
            <div className="artwork-flex">
                <div className="artwork-text dark-bg">
                    <h1>Title: "{result.name}"</h1>
                    <p>Medium: Digital Hex ({result.hex})</p>
                    <p>Curated by © HEXA</p>
                </div>
            </div>
        </div>
    </div>

        
    );
}

export default ColourPage;