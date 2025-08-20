import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaPalette, FaCube } from 'react-icons/fa';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Sentiment Analysis",
      description: "Duolingo Sentiment Analysis using LSTM, Naive Bayes, and Logistic Regression A natural language processing (NLP) project for classifying user reviews of the Duolingo app into positive, neutral, or negative sentiments",
      technologies: ["python", "pandas", "mathplotlib", "google colab", "seaborn"],
      githubUrl: "https://github.com/aynarifdah/sentiment-analysis",
    },
    {
      id: 2,
      title: "Web Lowongan Pekerjaan",
      description: "A full-stack web application for job seekers to explore, apply, and manage job opportunities.This project was built to simulate a real-world job portal, featuring authentication, job posting management, and an intuitive user interface.",
      technologies: ["php", "html", "css", "mysql", "laragon", "javascript"],
      githubUrl: "https://github.com/aynarifdah/website-lowongan-pekerjaan",
    },
    {
      id: 3,
      title: "Eduguard",
      description: "aplikasi yang dirancang untuk memudahkan pihak sekolah dalam mencatat kedisiplinan siswa/i nya secara digital bernama eduguard",
      technologies: ["php", "html", "Tailwind CSS", "laragon", "figma", "javascript"],
      githubUrl: "https://github.com/aynarifdah/eduguard-discipline-tracker",
    },
    {
       id: 4,
      title: "E-Tani",
      description: "A mobile app “E-Tani” to manage agricultural reports using Firebase (Firestore), with features like login, report form, CRUD, and history",
      technologies: ["java", "firebase", "firestore", "android studio"],
      githubUrl: "https://github.com/aynarifdah/E-Tani",
    },
    {
      id: 5,
      title: "Jojean Coffee Shop",
      description: "Mobile app Jojean Coffee Shop whit CRUD (create, read, update, delete) using android studio",
      technologies: ["android studio", "php", "java"],
      githubUrl: "https://github.com/aynarifdah/java-CRUD",
    }
  ];


  return (
    <main className="flex min-h-screen flex-col bg-[#121212] pt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            My Project
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my portfolio of projects showcasing my skills in web development, 
            data analysis, and backend development. Each project represents my passion 
            for creating innovative solutions.
          </p>
        </div>

        <section>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            My Project
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-black/50 rounded-2xl p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                  </div>
                  
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 text-sm"
                      >
                        <FaGithub className="w-4 h-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Have a project in mind?
            </h3>
            <p className="text-blue-100 mb-6">
              Let's work together to bring your ideas to life!
            </p>
            <a
              href="/"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-medium rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProjectsPage;
