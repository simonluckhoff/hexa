import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search'
import colours from '../components/colours.json'

function Index() {
    // query is the inital state and setQuery is the changes affected to it. 
    const [query, setQuery] = useState("");
    const [hoveredColour, setHoveredColour] = useState(null);

    // this const is fetching the colours properties dynamically. 
    const colours_list = colours.colours.map(colour => ({
        name: colour.name,
        slug: colour.slug,
        hex: colour.hex,
        keywords: colour.keywords
    }));

    // Search feature begins
    const filteredLinks = useMemo(() => {
        // we're taking in the user input and making it lowercase here. 
        const searchQuery = query.toLowerCase();
        return colours_list.filter(colour => 
            // here we're checking if text or keywords contains searchQuery. 
            colour.name.toLowerCase().includes(searchQuery) ||
            colour.keywords.join(' ').toLowerCase().includes(searchQuery)
            // was throwing error becuase tryna run .lower on an array (as opposed to string before)
        );
    }, [query, colours_list]);

    return (
        <div 
            className="index-of-colours"
            style={{
                // ? - ternary operator - if hoveredColour has a value, use + 80 otherwise use rgb.
                backgroundColor: hoveredColour
                ? hoveredColour + '80'
                : 'rgb(178, 224, 214, 0.5)',                
                transition: 'background-color 0.5s ease',
                minHeight: '100vh',
                position: 'fixed', 
                width: '100%',
                top: 0,
                left: 0,
                zIndex: -1,
                color: 'rgba(153, 153, 153, 0.5)',
            }}
        >
            <div className="bootstrap-scope search-blur">
                <div className="d-flex justify-content-center align-items-center navbar">
                    {/* being passed as props here. */}
                    {/* check search.jsx */}
                    <Search query={query} setQuery={setQuery} /> 
                </div>
            </div>

            <div className="colours" style={{ position: 'relative', zIndex: 1 }}>
                {filteredLinks.length === 0 ? (
                    <p>No results found.</p>
                ) : (
                    filteredLinks.map((link, index) => (
                        <Link 
                            key={index} 
                            to={`/Colour/${link.slug}`}
                            data-keywords={link.keywords}
                            onMouseEnter={() => setHoveredColour(link.hex)}
                            onMouseLeave={() => setHoveredColour(null)}
                        >
                            {link.name}
                        </Link>  
                    ))
                )}
            </div>
        </div>
    );
}

export default Index;

