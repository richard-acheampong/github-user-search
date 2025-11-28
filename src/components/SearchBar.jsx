
export default function SearchBar({ onSearch, isLoading }) {
  const [query, setQuery] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query.trim());
  };

  return (
    
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={submit} className="flex gap-2 w-1/2 max-w-md">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search GitHub users (e.g., 'torvalds')"
            className="flex-1 p-2 rounded border border-gray-300"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 rounded bg-gray-800 text-white"
          >
            {isLoading ? 'Searching…' : 'Search'}
          </button>
        </form>
      </div>

  );
}

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full screen height
    width: '100%',   // Full width
  },
  form: {
    display: 'flex',
    gap: '8px',
    width: '50%', // Responsive width
    maxWidth: '500px',
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 16px',
    borderRadius: '8px',
    border: 'none',
    background: '#24292f',
    color: '#fff',
  },
};
