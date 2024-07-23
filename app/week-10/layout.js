"use client";
import React from "react";
import { AuthContextProvider } from "./_utils/auth-context";
import Header from "./shopping-list/header";

const Layout = ({ children }) => {
  return (
    <AuthContextProvider>
      <Header />
      {children}
    </AuthContextProvider>
  );
};

export default Layout;
