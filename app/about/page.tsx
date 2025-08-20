import React from 'react';
import FadeIn from '../components/FadeIn';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] pt-24">
      <div className="container mx-auto px-6 py-12">
        <FadeIn className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get to know me better - my background, experience, and what drives me in the world of technology and design.
          </p>
        </FadeIn>

        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Who I Am
              </h2>
              <div className="bg-black/50 rounded-2xl p-8 border border-gray-800 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      I am a student at SMKN 1 Depok who is passionate about Full Stack Development and Machine Learning. I enjoy building web applications, especially on the back-end side, and have gained hands-on experience through several school projects.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed mt-6">
                      I am also eager to explore data science and machine learning, as I believe they will shape the future of technology. My goal is to keep improving my skills and create impactful applications that can provide real value to people.
                    </p>
                  </div>
                </div>
                <div className="md:col-span-5">
                  <div className="relative rounded-2xl border border-gray-800 bg-[#0f0f0f] w-full aspect-square flex items-center justify-center text-gray-500">
                    <span>
                      <Image 
                    src="/about.jpg" 
                    alt="about" 
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={300} 
                    height={300} 
                    />
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Education
              </h2>
            </FadeIn>
            <div className="bg-black/50 rounded-2xl p-8 border border-gray-800">
              <div className="space-y-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">
                      Junior High School
                    </h3>
                    <span className="text-blue-400 font-medium">
                      [2020 - 2023]
                    </span>
                  </div>
                  <p className="text-gray-400 text-lg mb-2">
                    SMP NEGERI 6 DEPOK
                  </p>                  
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">
                      Senior High School
                    </h3>
                    <span className="text-blue-400 font-medium">
                      [2023 - now]
                    </span>
                  </div>
                  <p className="text-gray-400 text-lg mb-2">
                    SMK NEGERI 1 DEPOK
                  </p>
                  <p className="text-gray-300">
                    Pengembangan Perangkat Lunak dan Gim
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Tech Stack
              </h2>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python', 'PHP'].map((skill) => (
                <div key={skill} className="bg-black/50 rounded-xl p-4 border border-gray-800 text-center hover:border-blue-500 transition-colors duration-200">
                  <span className="text-white font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Tools
              </h2>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Laragon', 'GitHub', 'Visual Studio Code', 'Figma', 'Google Colab', 'Canva'].map((tool) => (
                <div key={tool} className="bg-black/50 rounded-xl p-4 border border-gray-800 text-center hover:border-blue-500 transition-colors duration-200">
                  <span className="text-white font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
