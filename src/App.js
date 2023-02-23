import { Register } from './components';

function App() {
  return (
    <div className='bg-slate-800 text-white min-h-screen border grid place-content-center'>
      <h1>Sign Up Here</h1>
      <div className={`border`}>
        <Register />
      </div>
    </div>
  );
}

export default App;
