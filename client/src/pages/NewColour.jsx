import React, { useState } from 'react';
import Carousel from '../components/Carousel'
import { Link, useNavigate } from 'react-router-dom';

const AddColourForm = () => {
  const [colour_name, setColourName] = useState('');
  const [hex_code, setHex] = useState('');
  const [colour_keywords, setKeyword] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const formatColourName = (input) => {
  const cleaned = input.replace(/[^a-zA-Z\s]/g, '').replace(/\s+/g, ' '); // letters + 1 space max
  const words = cleaned.split(' ');
  
  // allow up to 2 words while typing, but let the user type the space
  if (words.length > 2) {
    return words.slice(0, 2).join(' ');
  }

  return words
    .map(
      word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(' ');
};

  const handleSubmit = async (e) => {
    e.preventDefault();
      console.log('SUBMIT', { colour_name, hex_code, colour_keywords });

    if (!colour_name || !hex_code || !colour_keywords) {
      setError('Please fill in all fields');
      return
    }
    setError('');

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

      setTimeout(() => {
        const slug = colour_name.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
        navigate(`/Colour/${slug}`);
      }, 1000); // 1 second delay

    console.log({ colour_name, hex_code, colour_keywords });
  };

  const slides = [
    { background: `radial-gradient(circle, ${hex_code}, ${hex_code})` }
  ];

  return (
    <div className="main">
      <div className="carousel-body">
        <Carousel slides={slides}>
          <div className="homepage new-colour next-to">
            <div className="hexa-font">
              <div className="new-colour-hexa">
              <p><Link className='home-from-add-colour' to="/Hexa">Hexa</Link></p>
              <p className='explore'><Link className='explore' to="/Index">Explore your mood in hex</Link></p>
              </div>
            </div>
            <form onSubmit={handleSubmit}>

              <label>Colour Name:</label>
              <input type="text" value={colour_name} 
                    onChange={(e) => setColourName(formatColourName(e.target.value))}
              />

              <label>Hex Code:</label>
              <input type="text" value={hex_code}
                onChange={(e) => {
                  let input = e.target.value.trim();
                  if (!input.startsWith('#')) {
                    input = `#${input}`;
                  }
                  input = input.toUpperCase();
                  setHex(input);
                }}
              />

              <label>Keywords:</label>
              <input type="text" value={colour_keywords} onChange={(e) => setKeyword(e.target.value)} />

              <br /> <br />
              
              <button type="submit">Submit</button>
              {error && <p style={{ color: 'white', marginTop: '20px', marginBottom: '5px' }}>{error}</p>}
            </form>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default AddColourForm;