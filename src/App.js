import './App.css';

function App() {
  return (
    <div data-theme="dark"
      className="App 
    h-screen w-screen flex
    justify-center items-center">
      <div
        className='card w-[80%] h-[70%]
        flex items-center
        '>
        <h1
          className='
            text-5xl font-bold
            w-full text-center
          '
        >Todo app</h1>
        input<br />
        clear<br />
        list<br />
      </div>
    </div>
  );
}

export default App;
