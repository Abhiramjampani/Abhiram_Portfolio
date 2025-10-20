'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Snowfall from '@/components/Snowfall';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const [showSnow, setShowSnow] = useState(true);

  useEffect(() => {
    // Check theme for snowfall
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setShowSnow(theme === 'stark' || !theme);
    };

    checkTheme();
    
    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
  };

  return (
    <>
      {showSnow && <Snowfall />}
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      <main style={{ minHeight: '100vh', paddingTop: '100px' }}>
        {/* About Section */}
        {activeSection === 'about' && (
          <section style={{ minHeight: 'calc(100vh - 100px)', display: 'flex', alignItems: 'center', padding: '4rem 2rem' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '350px 1fr', gap: '3rem', alignItems: 'start' }}>
                {/* LEFT SIDE - hero-left */}
                <div className="text-center">
                  <div className="profile-image-box" style={{
                    width: '280px',
                    height: '280px',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    margin: '0 auto 1.5rem',
                    border: '4px solid var(--primary-color)',
                    boxShadow: '0 0 30px rgba(136, 160, 184, 0.3), 0 10px 40px rgba(0, 0, 0, 0.6), inset 0 0 20px rgba(0, 0, 0, 0.3)',
                    position: 'relative',
                    transition: 'all 0.4s ease'
                  }}>
                    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <Image
                        src="/photo.png"
                        alt="Abhiram Jampani"
                        fill
                        className="object-cover"
                        style={{ transition: 'transform 0.4s ease' }}
          priority
        />
                    </div>
                  </div>
                  <h1 style={{ 
                    fontFamily: 'Cinzel, serif',
                    fontSize: '2.5rem',
                    color: 'var(--primary-color)',
                    marginBottom: '0.8rem',
                    letterSpacing: '2px'
                  }}>
                    Abhiram Jampani
                  </h1>
                  <p style={{ 
                    fontSize: '1.1rem',
                    color: 'var(--text-color)',
                    marginBottom: '0.6rem',
                    lineHeight: '1.6'
                  }}>
                    Software Engineer | Full Stack Developer | Competitive Programmer
                  </p>
                  <p style={{ 
                    fontSize: '1rem',
                    color: 'var(--secondary-color)',
                    lineHeight: '1.6'
                  }}>
                    SW Intern @ NVIDIA | Building high-performance systems
                  </p>
                </div>

                {/* RIGHT SIDE - hero-right */}
                <div>
                  {/* house-words */}
                  <div style={{ 
                    fontFamily: 'Cinzel, serif',
                    fontSize: '0.95rem',
                    letterSpacing: '5px',
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                    marginBottom: '2rem',
                    opacity: 0.5,
                    fontWeight: '400'
                  }}>
                    Winter is Coming
                  </div>

                  {/* about-text */}
                  <div style={{ marginBottom: '3rem' }}>
                    <p style={{ 
                      fontSize: '1.15rem',
                      color: 'var(--accent-color)',
                      fontWeight: '600',
                      marginBottom: '1rem',
                      lineHeight: '1.8'
                    }}>
                      Software Intern at NVIDIA | Currently pursuing Bachelor's in Computer Science at IIIT Lucknow
                    </p>
                    <p style={{ 
                      fontSize: '1.05rem',
                      color: 'var(--text-color)',
                      lineHeight: '1.8'
                    }}>
                      I am passionate about problem-solving and developing web applications. With a strong foundation in competitive programming and full-stack development, I bring both algorithmic thinking and practical engineering skills to build efficient, scalable solutions.
                    </p>
                  </div>

                  {/* skills-grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 style={{ 
                        fontSize: '1.1rem',
                        color: 'var(--primary-color)',
                        marginBottom: '1rem',
                        fontWeight: '600'
                      }}>
                        Programming
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {['C++', 'Java', 'Python', 'JavaScript', 'C'].map((skill) => (
                          <span key={skill} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 style={{ 
                        fontSize: '1.1rem',
                        color: 'var(--primary-color)',
                        marginBottom: '1rem',
                        fontWeight: '600'
                      }}>
                        Web Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {['React.js', 'Next.js', 'Node.js', 'Express.js', 'Spring', 'Flask'].map((skill) => (
                          <span key={skill} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 style={{ 
                        fontSize: '1.1rem',
                        color: 'var(--primary-color)',
                        marginBottom: '1rem',
                        fontWeight: '600'
                      }}>
                        Databases
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {['MongoDB', 'MySQL', 'SQL'].map((skill) => (
                          <span key={skill} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 style={{ 
                        fontSize: '1.1rem',
                        color: 'var(--primary-color)',
                        marginBottom: '1rem',
                        fontWeight: '600'
                      }}>
                        Tools & Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {['Git', 'AWS', 'Docker', 'Linux', 'Firebase', 'RESTful APIs'].map((skill) => (
                          <span key={skill} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 style={{ 
                        fontSize: '1.1rem',
                        color: 'var(--primary-color)',
                        marginBottom: '1rem',
                        fontWeight: '600'
                      }}>
                        Machine Learning & AI
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {['TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV', 'LangChain', 'LangGraph', 'RAG', 'GenAI', 'NLP', 'BERT'].map((skill) => (
                          <span key={skill} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 style={{ 
                        fontSize: '1.1rem',
                        color: 'var(--primary-color)',
                        marginBottom: '1rem',
                        fontWeight: '600'
                      }}>
                        Systems
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {['CUDA', 'GPU Architecture', 'Parallel Computing', 'Multithreading'].map((skill) => (
                          <span key={skill} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <section style={{ minHeight: 'calc(100vh - 100px)', padding: '2rem 2rem', background: 'var(--bg-secondary)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
              <h2 className="section-title-custom">
                <span className="title-ornament-custom">⚔</span>
                <span style={{ padding: '0 1rem', whiteSpace: 'nowrap' }}>Experience</span>
                <span className="title-ornament-custom">⚔</span>
              </h2>

              <div className="experience-card-custom">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                      <Image src="/NVLogo_2D.jpg" alt="NVIDIA" width={24} height={24} className="company-logo-img" style={{ objectFit: 'contain' }} />
                      Software Intern
                    </h3>
                    <h4 style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>NVIDIA, India</h4>
                  </div>
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>July 2025 - Dec 2025</span>
                </div>
                <ul style={{ 
                  listStyleType: 'disc',
                  paddingLeft: '1.5rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.8',
                  fontSize: '1.05rem'
                }}>
                  <li style={{ marginBottom: '0.75rem' }}>Developed a high-performance C++ library for GPU binary translation and analysis, providing static and dynamic linkage for seamless integration into compiler and developer workflows.</li>
                  <li style={{ marginBottom: '0.75rem' }}>Reduced build and integration time by <strong>85%</strong> by enabling direct function calls through the library instead of invoking external processes.</li>
                  <li style={{ marginBottom: '0.75rem' }}>Optimized binary parsing, resource management, and concurrency, achieving up to <strong>2× faster analysis</strong> throughput and improved scalability for multi-threaded workloads.</li>
                  <li style={{ marginBottom: '0.75rem' }}>Implemented standardized APIs with robust error handling and validation layers, ensuring reliable interoperability across client systems.</li>
                  <li style={{ marginBottom: '0.75rem' }}>Automated integration workflows and improved developer experience by removing manual configuration steps and reducing integration overhead by <strong>90%</strong>.</li>
                  <li style={{ marginBottom: '0.75rem' }}><strong>Hackathon Project:</strong> Built an <strong>ELF Viewer Application</strong> using <strong>Python, Streamlit, Plotly, Pandas</strong>, and <strong>NVIDIA CUDA toolkit</strong> (fatdump, nvdisasm, mercdisasm) for comprehensive binary analysis with interactive visualizations, SASS/Mercury disassembly, assembly code inspection, control flow analysis, and CUDA metadata extraction.</li>
                  <li>Implemented a <strong>RAG (Retrieval-Augmented Generation) pipeline</strong> using <strong>LangChain, LangGraph, ChromaDB, Sentence Transformers, and OpenAI</strong> for an intelligent chatbot with vector embeddings and semantic search, enabling users to navigate ELF structures, understand binary analysis results, and receive context-aware assistance.</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <section style={{ minHeight: 'calc(100vh - 100px)', padding: '2rem 2rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
              <h2 className="section-title-custom">
                <span className="title-ornament-custom">📜</span>
                <span style={{ padding: '0 1rem', whiteSpace: 'nowrap' }}>Education</span>
                <span className="title-ornament-custom">📜</span>
              </h2>

              <div className="timeline-container">
                {/* Bachelor's */}
                <div className="timeline-item-custom">
                  <div className="timeline-marker-custom"></div>
                  <div className="timeline-content-custom">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem', flexWrap: 'wrap', gap: '1rem' }}>
                      <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>
                        Indian Institute of Information Technology, Lucknow
                      </h3>
                      <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                        Nov 2022 - Present
                      </span>
                    </div>
                    <h4 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      Bachelor of Technology - Computer Science
                    </h4>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
                      <strong>CGPA: 8.1</strong> | Uttar Pradesh, India
                    </p>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                      <strong>Coursework:</strong> Object-Oriented Programming, Data Structures, Operating System, Database Management System
                    </p>
                  </div>
                </div>

                {/* 12th Class */}
                <div className="timeline-item-custom">
                  <div className="timeline-marker-custom"></div>
                  <div className="timeline-content-custom">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem', flexWrap: 'wrap', gap: '1rem' }}>
                      <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>
                        Narayana Junior College
                      </h3>
                      <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                        Jul 2020 - May 2022
                      </span>
                    </div>
                    <h4 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      12th Class
                    </h4>
                    <p style={{ color: 'var(--text-muted)' }}>
                      <strong>Score: 92.7%</strong> | Andhra Pradesh, India
                    </p>
                  </div>
                </div>

                {/* 10th Class */}
                <div className="timeline-item-custom">
                  <div className="timeline-marker-custom"></div>
                  <div className="timeline-content-custom">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem', flexWrap: 'wrap', gap: '1rem' }}>
                      <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>
                        Narayana Co School
                      </h3>
                      <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                        2018 - 2020
                      </span>
                    </div>
                    <h4 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      High School (10th Class)
                    </h4>
                    <p style={{ color: 'var(--text-muted)' }}>
                      <strong>Score: 600/600</strong> | Andhra Pradesh, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section style={{ minHeight: 'calc(100vh - 100px)', padding: '2rem 2rem' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
              <h2 className="section-title-custom">
                <span className="title-ornament-custom">🗡</span>
                <span style={{ padding: '0 1rem', whiteSpace: 'nowrap' }}>Projects</span>
                <span className="title-ornament-custom">🗡</span>
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* MediShare */}
                <div className="project-card-custom">
                  <div className="project-header-flex">
                    <h3 style={{
                      fontFamily: 'Cinzel, serif',
                      fontSize: '1.5rem',
                      color: 'var(--primary-color)',
                      margin: 0
                    }}>
                      MediShare - Smart Medicine Redistribution Platform
                    </h3>
                    <div className="project-links-container">
                      <a href="https://github.com/Abhiramjampani/MediShare" className="project-link-icon" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href="https://medishare-codeforge-hackathon.vercel.app/" className="project-link-icon" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                    <span className="tech-tag-custom">React.js</span>
                    <span className="tech-tag-custom">Node.js</span>
                    <span className="tech-tag-custom">Django</span>
                    <span className="tech-tag-custom">FastAPI</span>
                    <span className="tech-tag-custom">PostgreSQL</span>
                    <span className="tech-tag-custom">Supabase</span>
                    <span className="tech-tag-custom">Python</span>
                    <span className="tech-tag-custom">AI & OCR</span>
                  </div>
                  <p style={{ 
                    fontSize: '1.05rem', 
                    lineHeight: '1.8', 
                    color: 'var(--text-color)',
                    marginBottom: '1rem'
                  }}>
                    An AI-powered web platform to redistribute unused, sealed medicines, reducing waste and improving healthcare access.
                  </p>
                  <ul style={{ 
                    fontSize: '0.95rem', 
                    lineHeight: '1.8', 
                    color: 'var(--text-color)',
                    marginBottom: '1rem',
                    marginLeft: '1.2rem'
                  }}>
                    <li>Built using React.js, Node.js, FastAPI, and Supabase to enable smart medicine redistribution between hospitals, NGOs, and communities.</li>
                    <li>Integrated OCR (Google Vision, Tesseract) with 95%+ accuracy for medicine data extraction, and GenAI-based multilingual chatbot for user assistance.</li>
                    <li>Implemented AI-based matching algorithms, real-time tracking, and delivery route optimization using Google Maps API and OR-Tools, with models deployed on GCP.</li>
                  </ul>
                </div>

                {/* Study Notion */}
                <div className="project-card-custom">
                  <div className="project-header-flex">
                    <h3 style={{
                      fontFamily: 'Cinzel, serif',
                      fontSize: '1.5rem',
                      color: 'var(--primary-color)',
                      margin: 0
                    }}>
                      Study Notion
                    </h3>
                    <div className="project-links-container">
                      <a href="https://github.com/Abhiramjampani/Study-Notion" className="project-link-icon" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href="https://studynotion-frontend-two.vercel.app" className="project-link-icon" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                    <span className="tech-tag-custom">React.js</span>
                    <span className="tech-tag-custom">Node.js</span>
                    <span className="tech-tag-custom">Express.js</span>
                    <span className="tech-tag-custom">MongoDB</span>
                    <span className="tech-tag-custom">Cloudinary</span>
                    <span className="tech-tag-custom">RazorPay</span>
                  </div>
                  <p style={{ 
                    fontSize: '1.05rem', 
                    lineHeight: '1.8', 
                    color: 'var(--text-color)',
                    marginBottom: '1rem'
                  }}>
                    An EdTech platform developed using React JS with Razorpay payment gateway integration. Full-stack ed-tech platform using the MERN stack for creating, consuming, and rating educational content.
                  </p>
                  <ul style={{ 
                    fontSize: '0.95rem', 
                    lineHeight: '1.8', 
                    color: 'var(--text-color)',
                    marginBottom: '1rem',
                    marginLeft: '1.2rem'
                  }}>
                    <li>Built comprehensive course management system with interactive UI and secure user authentication.</li>
                    <li>Integrated RazorPay payment gateway for secure course purchases.</li>
                    <li>Implemented Cloudinary for media storage and MongoDB Atlas for scalable database management.</li>
                  </ul>
                </div>

                {/* AI Film-Finder */}
                <div className="project-card-custom">
                  <div className="project-header-flex">
                    <h3 style={{
                      fontFamily: 'Cinzel, serif',
                      fontSize: '1.5rem',
                      color: 'var(--primary-color)',
                      margin: 0
                    }}>
                      AI Film-Finder: Hybrid Movie Recommender
                    </h3>
                    <div className="project-links-container">
                      <a href="https://github.com/Abhiramjampani/Movie-Recommendation-System" className="project-link-icon" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href="#" className="project-link-icon" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                    <span className="tech-tag-custom">Python</span>
                    <span className="tech-tag-custom">BERT</span>
                    <span className="tech-tag-custom">NCF</span>
                    <span className="tech-tag-custom">SVD</span>
                    <span className="tech-tag-custom">TF-IDF</span>
                    <span className="tech-tag-custom">Machine Learning</span>
                  </div>
                  <p style={{ 
                    fontSize: '1.05rem', 
                    lineHeight: '1.8', 
                    color: 'var(--text-color)',
                    marginBottom: '1rem'
                  }}>
                    Advanced movie recommendation system combining Content-Based and Collaborative Filtering methods into a hybrid model using BERT, NCF, SVD, and TF-IDF algorithms for exceptional accuracy.
                  </p>
                  <ul style={{ 
                    fontSize: '0.95rem', 
                    lineHeight: '1.8', 
                    color: 'var(--text-color)',
                    marginBottom: '1rem',
                    marginLeft: '1.2rem'
                  }}>
                    <li>Developed hybrid recommendation engine combining multiple ML algorithms (BERT, NCF, SVD, TF-IDF) achieving high accuracy.</li>
                    <li>Integrated TMDB API for movie details (title, genre, runtime, rating, poster) and implemented web scraping for IMDB reviews.</li>
                    <li>Performed sentiment analysis on user reviews to provide top 10 similar movie recommendations with detailed insights.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Achievements Section */}
        {activeSection === 'achievements' && (
          <section style={{ minHeight: 'calc(100vh - 100px)', padding: '2rem 2rem' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
              <h2 className="section-title-custom">
                <span className="title-ornament-custom">👑</span>
                <span style={{ padding: '0 1rem', whiteSpace: 'nowrap' }}>Achievements & Problem Solving</span>
                <span className="title-ornament-custom">👑</span>
              </h2>

              {/* Coding Profiles */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2.5rem',
                marginBottom: '4rem'
              }}>
                {/* LeetCode */}
                <div className="card-3d" style={{
                  background: 'var(--card-bg)',
                  padding: '2.5rem',
                  borderRadius: '15px',
                  border: '2px solid var(--border-color)',
                  textAlign: 'center'
                }}>
                  <div className="profile-icon-wrapper leetcode-icon">
                    <Image
                      src="/LeetCode_logo_black.png"
                      alt="LeetCode"
                      width={48}
                      height={48}
                      className="profile-logo-img"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                  <h3 style={{
                    fontFamily: 'Cinzel, serif',
                    fontSize: '1.6rem',
                    color: 'var(--primary-color)',
                    marginBottom: '1rem'
                  }}>
                    LeetCode
                  </h3>
                  <div style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: 'var(--text-color)',
                    marginBottom: '1.5rem',
                    opacity: 0.9
                  }}>
                    Guardian
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{
                      fontSize: '2.5rem',
                      fontWeight: '700',
                      color: 'var(--primary-color)',
                      marginBottom: '0.3rem'
                    }}>
                      2139
                    </div>
                    <div style={{
                      fontSize: '1rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      Rating
                    </div>
                  </div>
                  <p style={{
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                    color: 'var(--text-color)',
                    marginBottom: '1.5rem',
                    opacity: 0.8
                  }}>
                    Ranks 460, 969, 972 in biweekly contests | Ranks 432, 972, 708, 1053 in weekly contests
                  </p>
                  <a
                    href="https://leetcode.com/u/Illuminati07/"
            target="_blank"
            rel="noopener noreferrer"
                    style={{
                      color: 'var(--accent-color)',
                      fontSize: '1rem',
                      textDecoration: 'none',
                      fontWeight: '600',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--accent-color)')}
                  >
                    View Profile →
                  </a>
                </div>

                {/* CodeForces */}
                <div className="card-3d" style={{
                  background: 'var(--card-bg)',
                  padding: '2.5rem',
                  borderRadius: '15px',
                  border: '2px solid var(--border-color)',
                  textAlign: 'center'
                }}>
                  <div className="profile-icon-wrapper codeforces-icon">
            <Image
                      src="/codeforces.png"
                      alt="CodeForces"
                      width={48}
                      height={48}
                      className="profile-logo-img"
                    />
                  </div>
                  <h3 style={{
                    fontFamily: 'Cinzel, serif',
                    fontSize: '1.6rem',
                    color: 'var(--primary-color)',
                    marginBottom: '1rem'
                  }}>
                    CodeForces
                  </h3>
                  <div style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: 'var(--text-color)',
                    marginBottom: '1.5rem',
                    opacity: 0.9
                  }}>
                    Specialist
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{
                      fontSize: '2.5rem',
                      fontWeight: '700',
                      color: 'var(--primary-color)',
                      marginBottom: '0.3rem'
                    }}>
                      1554
                    </div>
                    <div style={{
                      fontSize: '1rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      Rating
                    </div>
                  </div>
                  <p style={{
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                    color: 'var(--text-color)',
                    marginBottom: '1.5rem',
                    opacity: 0.8
                  }}>
                    Ranks 1080 (Div 4), 929, 2535 (Div 3), 2596 (Div 2)
                  </p>
                  <a
                    href="https://codeforces.com/profile/illuminati0_7"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--accent-color)',
                      fontSize: '1rem',
                      textDecoration: 'none',
                      fontWeight: '600',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--accent-color)')}
                  >
                    View Profile →
                  </a>
                </div>

                {/* CodeChef */}
                <div className="card-3d" style={{
                  background: 'var(--card-bg)',
                  padding: '2.5rem',
                  borderRadius: '15px',
                  border: '2px solid var(--border-color)',
                  textAlign: 'center'
                }}>
                  <div className="profile-icon-wrapper codechef-icon">
                    <Image
                      src="/CodeChef_(icon).png"
                      alt="CodeChef"
                      width={48}
                      height={48}
                      className="profile-logo-img"
                    />
                  </div>
                  <h3 style={{
                    fontFamily: 'Cinzel, serif',
                    fontSize: '1.6rem',
                    color: 'var(--primary-color)',
                    marginBottom: '1rem'
                  }}>
                    CodeChef
                  </h3>
                  <div style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: 'var(--text-color)',
                    marginBottom: '1.5rem',
                    opacity: 0.9
                  }}>
                    4-Star
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{
                      fontSize: '2.5rem',
                      fontWeight: '700',
                      color: 'var(--primary-color)',
                      marginBottom: '0.3rem'
                    }}>
                      1819
                    </div>
                    <div style={{
                      fontSize: '1rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      Rating
                    </div>
                  </div>
                  <p style={{
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                    color: 'var(--text-color)',
                    marginBottom: '1.5rem',
                    opacity: 0.8
                  }}>
                    Ranks 63, 115, 167, 452 (Div 2) and 337 (Div 4)
                  </p>
                  <a
                    href="https://www.codechef.com/users/illuminati_07"
            target="_blank"
            rel="noopener noreferrer"
                    style={{
                      color: 'var(--accent-color)',
                      fontSize: '1rem',
                      textDecoration: 'none',
                      fontWeight: '600',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--accent-color)')}
                  >
                    View Profile →
          </a>
        </div>
              </div>

              {/* Other Achievements */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2.5rem'
              }}>
                <div className="card-3d" style={{
                  background: 'var(--card-bg)',
                  padding: '2.5rem',
                  borderRadius: '15px',
                  border: '2px solid var(--border-color)',
                  textAlign: 'center'
                }}>
                  <div className="achievement-icon-animate" style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏆</div>
                  <h3 style={{
                    fontFamily: 'Cinzel, serif',
                    fontSize: '1.5rem',
                    color: 'var(--primary-color)',
                    marginBottom: '1rem'
                  }}>
                    Blockchain Track Winner
                  </h3>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-color)' }}>
                    Hack-O-Fiesta 4.0, IIIT Lucknow
                  </p>
                </div>

                <div className="card-3d" style={{
                  background: 'var(--card-bg)',
                  padding: '2.5rem',
                  borderRadius: '15px',
                  border: '2px solid var(--border-color)',
                  textAlign: 'center'
                }}>
                  <div className="achievement-icon-animate" style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
                  <h3 style={{
                    fontFamily: 'Cinzel, serif',
                    fontSize: '1.5rem',
                    color: 'var(--primary-color)',
                    marginBottom: '1rem'
                  }}>
                    MLSA
                  </h3>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-color)' }}>
                    Alpha Microsoft Learn Student Ambassador
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer style={{
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-color)',
        padding: '3rem 2rem',
        marginTop: 'auto'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {/* Social Icons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <a
              href="mailto:abhiramjampani7@gmail.com"
              style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                background: 'var(--bg-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-color)',
                transition: 'all 0.3s ease',
                border: '1px solid var(--border-color)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary-color)';
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(136, 160, 184, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bg-secondary)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/abhiram-jampani-323b37259/"
          target="_blank"
          rel="noopener noreferrer"
              style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                background: 'var(--bg-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-color)',
                transition: 'all 0.3s ease',
                border: '1px solid var(--border-color)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary-color)';
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(136, 160, 184, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bg-secondary)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            <a
              href="https://github.com/Abhiramjampani"
          target="_blank"
          rel="noopener noreferrer"
              style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                background: 'var(--bg-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-color)',
                transition: 'all 0.3s ease',
                border: '1px solid var(--border-color)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary-color)';
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(136, 160, 184, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bg-secondary)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/abhiramjampani/"
          target="_blank"
          rel="noopener noreferrer"
              style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                background: 'var(--bg-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-color)',
                transition: 'all 0.3s ease',
                border: '1px solid var(--border-color)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary-color)';
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(136, 160, 184, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bg-secondary)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p style={{
            color: 'var(--text-color)',
            fontSize: '0.9rem',
            marginBottom: '0.5rem',
            opacity: 0.8
          }}>
            © 2025 Abhiram Jampani. All rights reserved.
          </p>

          {/* Quote */}
          <p style={{
            color: 'var(--secondary-color)',
            fontSize: '0.85rem',
            fontStyle: 'italic',
            opacity: 0.7
          }}>
            "The man who passes the sentence should swing the sword."
          </p>
        </div>
      </footer>
    </>
  );
}
