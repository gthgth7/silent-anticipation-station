
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the token creation page
    window.location.href = "/token/create-coin.html";
  }, []);

  // This content will briefly appear before the redirect happens
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center p-6 max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-white">CoinBlast</h1>
        <p className="text-xl text-gray-300 mb-8">Create Solana Tokens in Seconds</p>
        <Button 
          size="lg" 
          className="bg-indigo-600 hover:bg-indigo-700"
          onClick={() => window.location.href = "/token/create-coin.html"}
        >
          Launch App
        </Button>
        <p className="text-gray-400 mt-8 text-sm">
          Redirecting to token creation page...
        </p>
      </div>
    </div>
  );
};

export default Index;
