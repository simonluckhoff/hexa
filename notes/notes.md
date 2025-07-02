
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



*** Colour Ideas: ***
- Dell Grey


*** Errors to Fix ***
- when inserting HEX, it must check for # or no hash. 
- if you enter more or less than three keywords?
- on submit, it must take you to that colourpage.



*** Naming Conventions: ***

function MyComponent() { ... }
call it then - <MyComponent />

const userName (camelCase)
var userName (camelCase)







*** How to setup Git Repo: *** 
1. git init
2. git add .
3. git commit -m "first commit"
4. Go create a repo - copy the link
5. git remote add origin {url}
6. git branch -M main
7. git push -u origin main
8. Done

6: git branch -M main
   - renames current branch to main. 
   - -M stands for "move/rename forcibly"
7: git push -u origin main
   - tells git: push local "main" branch to remote origin, and remember this connection so I dont have to specify it every time. 


   