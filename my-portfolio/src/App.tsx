import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";

export default function App() {

  return (
    <div className="w-full min-h-screen bg-[#020617] relative">
      {/* Background Circuit Pattern (SVG) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" className="stroke-slate-700">
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" strokeWidth="1"/>
            <circle cx="0" cy="0" r="2" fill="currentColor"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Header />
      <main className="w-full">
        <Home />
        <About />
        <Skills />
      </main>
    </div>
  )
}