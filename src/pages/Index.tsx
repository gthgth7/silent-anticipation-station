
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Redirect to the token create page
    window.location.href = '/token/create-coin.html';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Redirecting...</h1>
        <p className="text-xl text-gray-600">Please wait while you are being redirected to the token creator.</p>
      </div>
    </div>
  );
};

export default Index;
