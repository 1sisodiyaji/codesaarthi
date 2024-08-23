import React, { useState } from 'react'   
import Home from '../../Admin/Home';
import Project from '../../Admin/Project';
import Roadmap from '../../Admin/Roadmap';
import Theory from '../../Admin/Theory';
import Tools from '../../Admin/Tools';


const Sidebar = ({ setActiveComponent }) => {
  return (
    <div className="h-screen bg-gray-800 text-white p-5 md:w-96 md:block hidden">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <button onClick={() => setActiveComponent('Home')} className="hover:text-orange-300 hover:underline">Home</button>
          </li>
          <li>
            <button onClick={() => setActiveComponent('Projects')} className="hover:text-orange-300 hover:underline">Projects</button>
          </li>
          <li>
            <button onClick={() => setActiveComponent('Roadmaps')} className="hover:text-orange-300 hover:underline">Roadmaps</button>
          </li>
          <li>
            <button onClick={() => setActiveComponent('Tools')} className="hover:text-orange-300 hover:underline">Tools</button>
          </li>
          <li>
            <button onClick={() => setActiveComponent('TheoryProblems')} className="hover:text-orange-300 hover:underline">Theory Problems</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}


const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState('Home');
  const renderComponent = () => {
    switch (activeComponent) {
      case 'Home':
        return <Home />;
      case 'Projects':
        return <Project />;
      case 'Roadmaps':
        return <Roadmap />;
      case 'Tools':
        return <Tools />;
      case 'TheoryProblems':
        return <Theory />;
      default:
        return <Home />;
    }
  };

  return (
    <>
   <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar setActiveComponent={setActiveComponent} />

      {/* Main Content */}
      <div className="flex-1 bg-gray-200 p-8">
        {renderComponent()}
      </div>
    </div>
    </>
  )
}

export default Dashboard