import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { HomePage } from './pages/HomePage'
import { ClassPage } from './pages/ClassPage'
import { SubclassPage } from './pages/SubclassPage'
import { BuffGlossaryPage } from './pages/BuffGlossaryPage'
import { BuilderPage } from './pages/BuilderPage'

function App() {
  return (
    <div className="min-h-screen bg-eso-darker">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/class/:classId" element={<ClassPage />} />
          <Route path="/class/:classId/:subclassId" element={<SubclassPage />} />
          <Route path="/buffs" element={<BuffGlossaryPage />} />
          <Route path="/builder" element={<BuilderPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
