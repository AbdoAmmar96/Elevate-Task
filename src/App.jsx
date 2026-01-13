import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './Componetents/Header'
import Content from './Componetents/Content'
import PostContent from './Componetents/PostContent'
import './App.css'
function App() {
  return (
    <>
      {/* Background Layer */}
      <div className="fixed inset-0 -z-10 bg-[url('/Everest.jpg')] bg-cover bg-center bg-no-repeat" />

      {/* Content Layer */}
      <div className="relative z-10 min-h-screen w-full">
        <div className="py-6">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/posts/:id" element={<PostContent />} />
        </Routes>


      </div>
    </>
  )
}

export default App
