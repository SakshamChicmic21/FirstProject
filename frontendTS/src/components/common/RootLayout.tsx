
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; // Adjust the import path as needed

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* The Outlet renders the current matched child route (Home, About, Contact, etc.) */}
        <Outlet /> 
      </main>
    </>
  );
};

export default RootLayout;
