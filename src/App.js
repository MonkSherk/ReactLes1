import logo from './logo.svg';
import './App.css';
import './user.css'

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function reversestring(str) {
    return str.split('').reverse().join('');
}

function getDateInfo() {
    let currentDate = new Date();
    let dayOfMonth = currentDate.getDate();

    if (dayOfMonth % 2 === 0) {
        return `${currentDate.getMonth() + 1}, ${currentDate.getFullYear()}`;
    } else {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let dayOfWeek = daysOfWeek[currentDate.getDay()];
        return `${dayOfWeek}, ${dayOfMonth}`;
    }
}


export function UserComponent() {
  const name = 'Eblan'
  const age = 55
  const gender = 'Male'
    const user_container = "user_container"
    const user_list = "user_list"
    const reversed_string = reversestring(name)
    const date = getDateInfo()
  return (
    <div>
      <h1>User Component</h1>
      <div className={user_container}>
      <ul className={user_list}>
        <li>Name of the user: {name}</li>
        <li>Age of user: {age}</li>
        <li>gender of user: {gender}</li>
          <li>reversed name: {reversed_string}</li>
          <li>date today: {date}</li>
      </ul>
      </div>
    </div>
  );
}


