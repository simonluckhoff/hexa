
- python3 server.py
- npm start



- That 80 added on to the end of the hex represents the opacity. 
"#123456" + "80" → "#12345680" → semi-transparent colour



*** Colour picker in App.js: ***

    <div style={{ height: '100vh', backgroundColor: color, transition: '0.3s' }}>
      <div style={{ padding: '2rem' }}>
        <h1>Choose Background Color</h1>
        <input type="color" value={color} onChange={handleChange} />
        <p>Current HEX: {color}</p>
      </div>
    </div>



slug is URL-friendly identifier 
- "Deep Sea" -> "deep-sea"



<link rel="icon" href="%PUBLIC_URL%/logo.png" />
  - This blew my mind. That PUBLIC URL basically dynamically creates the URL as you create your pages. 





*** To-Do: ***
- Using python to save to colours.js

- Instead of input(), must use POST request. 
- And use a form in the jsx to get info. 



*** Colour Ideas: ***
- Dell Grey


*** Errors to Fix ***
- when inserting HEX, it must check for # or no hash. 
- if you enter more or less than three keywords?
- placement for add your own hex. 
- styling of contents page. 
- background of page should change to the hex colour, when adding new colour. 
- on submit, it must take you to that colourpage.



*** Naming Conventions: ***

function MyComponent() { ... }
call it then - <MyComponent />

const userName (camelCase)
var userName (camelCase)