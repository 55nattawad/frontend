"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    // Redirect to the home page
    router.push('/login');
  };

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      router.push('/login');
    }

    // Add event listener for storage changes
    const handleStorageChange = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };

    window.addEventListener('storage', handleStorageChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [router]);

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#6f42c1' }}>    
        <div className="container-fluid">
        <img src="logo.png" style={{ width: '50px', height: '50px' }}/>
          <Link className="navbar-brand text-white" href="/">NEXOXHUB</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" href="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" href="/service">service</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" href="/contact">Contact</Link>
              </li>
              {isLoggedIn ? (
                <li className="nav-item">

                <button type="button" className="btn btn-outline-danger me-2" onClick={handleLogout}>
                  Logout
              </button>
              </li>
                    ) : (
                      <>
                <li className="nav-item">
                <Link legacyBehavior href="/login">
                  <a className="btn btn-success mx-2 text-white">Singin</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link legacyBehavior href="/signup">
                  <a className="btn btn-primary mx-2 text-white">Singup</a>
                </Link>
              </li></>)}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
