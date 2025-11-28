
import Search from './components/Search';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start p-6">
      {/* Centered container that takes 90% of the viewport width */}
      <div className="w-full max-w-[90%]">
        <Search />
      </div>
    </div>
  );
}



export default App
