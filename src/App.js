import { RegisterArea } from './components';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <div className='grid min-h-screen min-w-[300px] place-content-center border bg-slate-800 text-white'>
        <div className={`rounded-md border bg-slate-900 p-4`}>
          <RegisterArea />
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
