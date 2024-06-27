import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

const App = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="flex min-h-max w-full p-3">
        <div className="w-3/4 border-r">
          <Hero />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
