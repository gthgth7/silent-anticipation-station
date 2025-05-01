
import React from "react";
import { Button } from "@/components/ui/button";

const TokenCreation = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center p-6 max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-white">Create Your Coin</h1>
        <p className="text-xl text-gray-300 mb-8">
          Launch your own coin on Solana in seconds. No coding required.
        </p>
        <div className="space-y-4 bg-gray-800 p-6 rounded-lg">
          <p className="text-white">
            If you're seeing this page instead of the token creation interface,
            there might be an issue with loading the static HTML content.
          </p>
          <Button
            size="lg"
            className="bg-indigo-600 hover:bg-indigo-700"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TokenCreation;
