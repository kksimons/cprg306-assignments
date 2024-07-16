"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";

const Header = () => {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
      router.push("/week-8");
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  return (
    <header className="w-full flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold">CPRG306 Shopping List</h1>
      {user && (
        <button
          onClick={handleSignOut}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
        >
          Sign Out
        </button>
      )}
    </header>
  );
};

export default Header;
