"use client";
import React, { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";

function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    setLoading(true);
    setError("");
    try {
      await gitHubSignIn();
    } catch (err) {
      setError("Failed to sign in.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    setLoading(true);
    setError("");
    try {
      await firebaseSignOut();
    } catch (err) {
      setError("Failed to sign out.");
    } finally {
      setLoading(false);
    }
  };

  //console.dir(user);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Firebase Auth</h1>
        {user ? (
          <div>
            <p className="mb-4">
              Welcome, {user.displayName} ({user.email})
              <img className="w-8 h-8" src={user.photoURL}></img>
            </p>
            <button
              onClick={handleSignOut}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
              disabled={loading}
            >
              {loading ? "Signing out..." : "Sign Out"}
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={handleSignIn}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In with GitHub"}
            </button>
            {error && <p className="mt-4 text-red-500">{error}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default LandingPage;
