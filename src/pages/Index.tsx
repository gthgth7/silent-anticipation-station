
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  useEffect(() => {
    // Use a more reliable way to redirect - using window.location.replace
    // And make sure we're using the proper path
    const path = `${window.location.origin}/token/create-coin.html`;
    console.log("Redirecting to:", path);
    window.location.replace(path);
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
          onClick={() => {
            const path = `${window.location.origin}/token/create-coin.html`;
            window.location.replace(path);
          }}
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
