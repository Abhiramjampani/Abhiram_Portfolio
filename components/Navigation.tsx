'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

type Theme = 'stark' | 'targaryen' | 'lannister' | 'baratheon';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [theme, setTheme] = useState<Theme>('stark');
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    setShowThemeMenu(false);
  };

  const themes = [
    { id: 'stark' as Theme, name: 'House Stark', motto: 'Winter is Coming' },
    { id: 'targaryen' as Theme, name: 'House Targaryen', motto: 'Fire and Blood' },
    { id: 'lannister' as Theme, name: 'House Lannister', motto: 'Hear Me Roar' },
    { id: 'baratheon' as Theme, name: 'House Baratheon', motto: 'Ours is the Fury' },
  ];

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: 'var(--bg-primary)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-color)',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <button 
          onClick={() => onNavigate('about')}
          style={{
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            padding: 0
          }}
        >
          <div style={{
            position: 'relative',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid var(--primary-color)',
            transition: 'transform 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Image
              src="/House Stark Logo.jpg"
              alt="Stark"
              fill
              className="object-cover"
              style={{ opacity: 0.3 }}
            />
            <span style={{
              position: 'absolute',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'var(--text-color)',
              zIndex: 10,
              fontFamily: 'Cinzel, serif'
            }}>
              AJ
            </span>
          </div>
        </button>

        {/* Navigation Links */}
        <ul style={{
          display: 'flex',
          alignItems: 'center',
          gap: '3rem',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => onNavigate(section.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeSection === section.id ? 'var(--primary-color)' : 'var(--text-color)',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  position: 'relative',
                  padding: '0.5rem 0',
                  transition: 'color 0.3s ease',
                  fontFamily: 'Cinzel, serif'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-color)'}
                onMouseLeave={(e) => {
                  if (activeSection !== section.id) {
                    e.currentTarget.style.color = 'var(--text-color)';
                  }
                }}
              >
                {section.label.toUpperCase()}
                {activeSection === section.id && (
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'var(--primary-color)',
                    boxShadow: '0 0 10px var(--primary-color)'
                  }}></span>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Theme Switcher */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowThemeMenu(!showThemeMenu)}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              border: '2px solid var(--primary-color)',
              background: 'var(--bg-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              color: 'var(--primary-color)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(136, 160, 184, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <i className="fas fa-crown" style={{ fontSize: '1.2rem' }}></i>
          </button>

          {showThemeMenu && (
            <div style={{
              position: 'absolute',
              right: 0,
              marginTop: '0.5rem',
              width: '250px',
              background: 'var(--card-bg)',
              border: '2px solid var(--border-color)',
              borderRadius: '10px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
              zIndex: 50
            }}>
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => handleThemeChange(t.id)}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: theme === t.id ? 'var(--accent-color)' : 'transparent',
                    border: 'none',
                    borderBottom: '1px solid var(--border-color)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'background 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (theme !== t.id) {
                      e.currentTarget.style.background = 'var(--bg-tertiary)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (theme !== t.id) {
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  <div style={{
                    fontWeight: '600',
                    color: 'var(--text-color)',
                    marginBottom: '0.25rem',
                    fontFamily: 'Cinzel, serif'
                  }}>
                    {t.name}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--secondary-color)',
                    fontStyle: 'italic'
                  }}>
                    {t.motto}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}


import { useState, useEffect } from 'react';
import Image from 'next/image';

type Theme = 'stark' | 'targaryen' | 'lannister' | 'baratheon';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [theme, setTheme] = useState<Theme>('stark');
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    setShowThemeMenu(false);
  };

  const themes = [
    { id: 'stark' as Theme, name: 'House Stark', motto: 'Winter is Coming' },
    { id: 'targaryen' as Theme, name: 'House Targaryen', motto: 'Fire and Blood' },
    { id: 'lannister' as Theme, name: 'House Lannister', motto: 'Hear Me Roar' },
    { id: 'baratheon' as Theme, name: 'House Baratheon', motto: 'Ours is the Fury' },
  ];

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: 'var(--bg-primary)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-color)',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <button 
          onClick={() => onNavigate('about')}
          style={{
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            padding: 0
          }}
        >
          <div style={{
            position: 'relative',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid var(--primary-color)',
            transition: 'transform 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Image
              src="/House Stark Logo.jpg"
              alt="Stark"
              fill
              className="object-cover"
              style={{ opacity: 0.3 }}
            />
            <span style={{
              position: 'absolute',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'var(--text-color)',
              zIndex: 10,
              fontFamily: 'Cinzel, serif'
            }}>
              AJ
            </span>
          </div>
        </button>

        {/* Navigation Links */}
        <ul style={{
          display: 'flex',
          alignItems: 'center',
          gap: '3rem',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => onNavigate(section.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeSection === section.id ? 'var(--primary-color)' : 'var(--text-color)',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  position: 'relative',
                  padding: '0.5rem 0',
                  transition: 'color 0.3s ease',
                  fontFamily: 'Cinzel, serif'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-color)'}
                onMouseLeave={(e) => {
                  if (activeSection !== section.id) {
                    e.currentTarget.style.color = 'var(--text-color)';
                  }
                }}
              >
                {section.label.toUpperCase()}
                {activeSection === section.id && (
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'var(--primary-color)',
                    boxShadow: '0 0 10px var(--primary-color)'
                  }}></span>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Theme Switcher */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowThemeMenu(!showThemeMenu)}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              border: '2px solid var(--primary-color)',
              background: 'var(--bg-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              color: 'var(--primary-color)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(136, 160, 184, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <i className="fas fa-crown" style={{ fontSize: '1.2rem' }}></i>
          </button>

          {showThemeMenu && (
            <div style={{
              position: 'absolute',
              right: 0,
              marginTop: '0.5rem',
              width: '250px',
              background: 'var(--card-bg)',
              border: '2px solid var(--border-color)',
              borderRadius: '10px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
              zIndex: 50
            }}>
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => handleThemeChange(t.id)}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: theme === t.id ? 'var(--accent-color)' : 'transparent',
                    border: 'none',
                    borderBottom: '1px solid var(--border-color)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'background 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (theme !== t.id) {
                      e.currentTarget.style.background = 'var(--bg-tertiary)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (theme !== t.id) {
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  <div style={{
                    fontWeight: '600',
                    color: 'var(--text-color)',
                    marginBottom: '0.25rem',
                    fontFamily: 'Cinzel, serif'
                  }}>
                    {t.name}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--secondary-color)',
                    fontStyle: 'italic'
                  }}>
                    {t.motto}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

