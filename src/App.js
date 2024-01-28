import './App.css';
import {useState, useCallback, useEffect} from 'react';

function App() {
  const [length, setlength] = useState(12);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed) string+="1234567890";
    if(charAllowed) string +="~`!@#$%^&*(){}[]";
    for(let i = 0; i<length; i++){
      let char = Math.floor((Math.random()*string.length)+1)
      pass += string.charAt(char)
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, charAllowed, numAllowed, passwordGenerator])

  
  return (
    <div className = "main-container">
      <div className = "container">
        <div className = "header">
          <h1 className = "password">Password Generator</h1>
        </div>
        <div className = "output-container">
          <input type = "text"
                value={password}
                readOnly />
        </div>
        <div className = "input-parameters">
          <label className = "range-output">
            <input type = "range"
                    className='range-parameter'
                    min = "12"
                    max = "20"
                    value = {length}
                    onChange={(e) => {setlength(e.target.value)}}/>
              {length}
          </label>
          <label className='number-label'>
            Numbers: <input type = 'checkbox'
                            className='number-checkbox'
                            onChange={() =>{setnumAllowed((prev) => !prev)}} />
          </label>

          <label className='char-label'>
            Characters: <input type = 'checkbox'
                            className='char-checkbox'
                            onChange={() => {setcharAllowed((prev) => !prev)}} />
          </label>
          
        </div>
      </div>
    </div>
  );
}

export default App;
