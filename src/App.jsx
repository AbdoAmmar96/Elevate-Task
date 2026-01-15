import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import './index.css'
import Header from './Componetents/Header'
import Content from './Componetents/Content'
import PostContent from './Componetents/PostContent'
import CreatePost from './Componetents/CreatePost'
import './App.css'

function App() {
  return (
    <>
      {/* Toast Notifications */}
      <Toaster position="top-right" richColors />

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
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>


      </div>
    </>
  )
}

export default App
