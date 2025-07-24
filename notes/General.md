*** To-Do: ***
1. Fokken Navbar, my word. 
2. Go through the NewColour and understand the flow. 
3. Be able to edit... that should be next. 




- python3 server.py
- npm start


=== Trying to get Authentication working ===
Default is hexa page, need to log in to be able to do anything else. 
users.json probably needs to be stored in the backend hmmm. 




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



<link rel="icon" href="%PUBLIC_URL%/logo.png" />
  - This blew my mind. That PUBLIC URL basically dynamically creates the URL as you create your pages. 








*** Colour Ideas: ***
- Dell Grey


*** Naming Conventions: ***

function MyComponent() { ... }
call it then - <MyComponent />







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


   