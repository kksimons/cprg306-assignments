"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "./_utils/auth-context";

function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      router.push("/week-8/shopping-list");
    }
  }, [user, router]);

  const handleSignIn = async () => {
    setLoading(true);
    setError(""); // forgot to clear
    try {
      await gitHubSignIn();
    } catch (err) {
      setError(
        "Sign in failed. Contact Kyle at kyle.simons@edu.sait.ca for assistance."
      );
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
      setError(
        "Sign out failed. Contact Kyle at kyle.simons@edu.sait.ca for assistance."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">
          Welcome to the Shopping App made in CPRG306
        </h1>
        {user ? (
          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
            disabled={loading}
          >
            {loading ? "Signing out..." : "Sign Out"}
          </button>
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
