
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Button } from "@/components/ui/button";

// Home component for the landing page
const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center p-6 max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-white">CoinBlast</h1>
        <p className="text-xl text-gray-300 mb-8">Create Solana Tokens in Seconds</p>
        <Button 
          size="lg" 
          className="bg-indigo-600 hover:bg-indigo-700"
          onClick={() => {
            window.location.href = "/create-token";
          }}
        >
          Launch App
        </Button>
      </div>
    </div>
  );
};

// Main App component with router
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/create-token"
          element={
            <iframe
              src="/token/create-coin.html"
              style={{
                width: '100%',
                height: '100vh',
                border: 'none',
              }}
              title="Create Solana Token"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
