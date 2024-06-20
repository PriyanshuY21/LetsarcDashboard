import React, { useState } from 'react';
import { FaInfoCircle, FaSearch, FaTrash } from 'react-icons/fa';
import ProgressBar from './Progressbar';
import Detailed from './Detailed';
import Img1 from './images/1.png';
import Img2 from './images/2.png';
import Img3 from './images/3.png';

const initialProjects = [
  { name: 'Project 1', progress: { completed: 4, total: 12 }, startDate: 'May 24, 2024', src: Img1 },
  { name: 'Project 2', progress: { completed: 11, total: 12 }, startDate: 'May 4, 2024', src: Img2 },
  { name: 'Project 3', progress: { completed: 12, total: 12 }, startDate: 'Mar 18, 2024', src: Img3 },
  { name: 'Project 4', progress: { completed: 10, total: 12 }, startDate: 'Nov 15, 2023', src: Img1 },
  { name: 'Project 5', progress: { completed: 10, total: 12 }, startDate: 'Aug 15, 2023', src: Img3 },
  { name: 'Project 6', progress: { completed: 11, total: 12 }, startDate: 'Apr 11, 2023', src: Img2 },
  { name: 'Project 7', progress: { completed: 9, total: 12 }, startDate: 'Feb 4, 2023', src: Img3 },
  { name: 'Project 8', progress: { completed: 2, total: 12 }, startDate: 'Jan 7, 2023', src: Img1 },
  { name: 'Project 9', progress: { completed: 4, total: 12 }, startDate: 'Nov 24, 2022', src: Img2 },
  { name: 'Project 10', progress: { completed: 11, total: 12 }, startDate: 'Nov 15, 2022', src: Img1 },
  { name: 'Project 11', progress: { completed: 9, total: 12 }, startDate: 'Aug 15, 2022', src: Img3 },
  { name: 'Project 12', progress: { completed: 11, total: 12 }, startDate: 'Sep 28, 2022', src: Img2 },
  { name: 'Project 13', progress: { completed: 11, total: 12 }, startDate: 'Sep 2, 2022', src: Img1 },
  { name: 'Project 14', progress: { completed: 9, total: 12 }, startDate: 'Aug 22, 2022', src: Img3 },
  { name: 'Project 15', progress: { completed: 11, total: 12 }, startDate: 'Aug 11, 2022', src: Img2 },
];

const Dashboard = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(initialProjects[0]);

  const handleDelete = (projectName) => {
    setProjects(projects.filter((project) => project.name !== projectName));
  };

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const almostCompletedProjects = projects
    .filter(project => project.progress.completed >= 9 && project.progress.completed <= 11)
    .sort((a, b) => b.progress.completed - a.progress.completed);

  const getRowClassName = (project, index) => {
    if (project === selectedProject) {
      return 'bg-nn2';
    } else {
      if (index % 2 === 0) {
        return 'bg-secondary';
      } else {
        return 'bg-nn';
      }
    }
  };

  return (
    <div className="flex flex-col p-4 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold">My Projects</h2>
          <div className="relative group ml-2 pt-1">
            <FaInfoCircle className="w-6 h-6 text-gray-600 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-64 text-center p-2 bg-gray-600 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Find your all ongoing and completed project's progress in this section.
            </div>
          </div>
          <div className="relative ml-4">
            <FaSearch className="absolute top-3 text-gray-400" style={{ marginLeft: '21rem' }} />
            <input
              type="text"
              placeholder="Search within projects"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-md px-12 py-2 focus"
              style={{ marginLeft: '20rem' }}
            />
          </div>
        </div>
      </div>
      <div className="flex" style={{ height: '50%' }}>
        <div className="flex flex-col w-2/3 pr-2">
          <div className="overflow-auto flex-1 border border-gray-200 rounded-lg shadow-lg p-2 custom-scrollbar">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-nn">
                <tr>
                  <th className="px-6 py-3 text-center text-xs font-medium text-accent">Projects</th>
                  <th className="px-8 py-3 text-center text-xs font-medium text-accent" style={{ width: '200%' }}>Progress</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-accent">Start Date</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-accent">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-secondary divide-y divide-gray-200">
                {filteredProjects.map((project, index) => (
                  <tr
                    key={project.name}
                    className={getRowClassName(project, index)}
                    onClick={() => setSelectedProject(project)}
                    style={{ cursor: 'pointer' }}
                  >
                    <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-text flex items-center">
                      <img src={project.src} alt={`${project.name} logo`} className="h-8 w-8 mr-2 rounded-full" />
                      {project.name}
                    </td>
                    <td className="px-8 py-3 text-center whitespace-nowrap text-sm text-accent" style={{ width: '200%' }}>
                      <ProgressBar
                        completed={project.progress.completed}
                        total={project.progress.total}
                      />
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap text-sm text-accent text-center">{project.startDate}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-sm text-center text-red-600">
                      {project.progress.completed === project.progress.total && (
                        <FaTrash
                          className="cursor-pointer"
                          onClick={(e) => { e.stopPropagation(); handleDelete(project.name); }}
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col w-1/3 pl-2" style={{ marginTop: '-3rem', height: '116%' }}>
          <div className="overflow-auto flex-1 border border-gray-200 rounded-lg shadow-lg p-4 custom-scrollbar">
            <h2 className="text-2xl opacity-90 font-bold mb-4 ml-16">Almost Completed</h2>
            <div className="space-y-1.5">
              {almostCompletedProjects.map((project, index) => (
                <div key={project.name} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center pl-4">
                      <img src={project.src} alt={`${project.name} logo`} className="h-8 w-8 mr-2 rounded-full" />
                      <h4 className="text-base font-medium">{project.name}</h4>
                    </div>
                    <p className="text-base font-medium text-gr pr-4">{project.progress.completed} / {project.progress.total} Completed</p>
                  </div>
                  {index < almostCompletedProjects.length - 1 && <hr className="my-2 border-gray-300" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {selectedProject && <Detailed project={selectedProject} />}
    </div>
  );
};

export default Dashboard;
