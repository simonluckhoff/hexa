import React, { useState } from 'react';
import Carousel from '../components/Carousel'
import { Link, useNavigate } from 'react-router-dom';

const AddColourForm = () => {
  const [colour_name, setName] = useState('');
  const [hex_code, setHex] = useState('');
  const [colour_keywords, setKeyword] = useState('');
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/colour', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        'name': colour_name,
        'hex': hex_code,
        'keywords': colour_keywords 
      }),
    });

    const data = await res.json();
    setResponse(data.message);

    const slug = colour_name.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
    navigate(`/Colour/${slug}`);
  };

  const slides = [
    { background: `radial-gradient(circle, ${hex_code}, ${hex_code})` }
    // { background: 'radial-gradient(circle, #757F75, #484E48)' },
    // { background: 'radial-gradient(circle, #3d4460, #1A1D29)' },
    // { background: 'radial-gradient(circle, #559fa4, #478589)' },
    // { background: 'radial-gradient(circle, #a98bcd, #967BB6)' },
    // { background: 'radial-gradient(circle, #383636, #262424)' },
    // { background: 'radial-gradient(circle,rgb(1, 187, 144), #008566)' },
    // { background: 'radial-gradient(circle,rgb(116, 86, 64), #523d2d)' }
  ];

  return (
    <div className="main">
      <div className="carousel-body">
        <Carousel slides={slides}>
          <div className="homepage new-colour next-to">
            <div className="hexa-font">
              <div className="new-colour-hexa">
              {/* <p>Hexa</p> */}
              <p><Link className='home-from-add-colour' to="/Hexa">Hexa</Link></p>
              <p className='explore'><Link className='explore' to="/Index">Explore your mood in hex</Link></p>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <label>Colour Name:</label>
              <input type="text" value={colour_name} onChange={(e) => setName(e.target.value)} />

              <label>Hex Code:</label>
              <input type="text" value={hex_code} onChange={(e) => setHex(e.target.value)} />

              <label>Three Keywords Related:</label>
              <input type="text" value={colour_keywords} onChange={(e) => setKeyword(e.target.value)} />

              {/* How does submit button work?? */} <br /> <br />
              <button type="submit">Submit</button>
            </form>
          </div>
            {response && <p>{response}</p>}
        </Carousel>
      </div>
    </div>
  );
};

export default AddColourForm;