import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import React from 'react';
import Sider from './components/Sider';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';


function App() {
  const tableData = [
    { nim: 'A11.2022.14179', nama: 'Laurentius Joandanu' },
    { nim: 'A11.2022.14205', nama: 'Wisnu tytd' },
];
  return (
    <>
     <div className="flex bg-gray-100 h-screen w-full">
            <Sider />
            <div className="flex flex-col flex-1">
                <Header />
                <Main tableData={tableData} />
                <Footer />
            </div>
        </div>
    </>
  )
}

export default App
