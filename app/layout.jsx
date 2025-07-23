import 'next/navigation';
import './layout.css';
import { useRouter, usePathname } from 'next/navigation'; // Added usePathname
import { FiHome, FiSearch } from "react-icons/fi";
import { MdAccountCircle, MdOndemandVideo } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi";
import { BsShop, BsFacebook } from "react-icons/bs";

export default function Layout({ children }) {
  const router = useRouter();
  const pathname = usePathname(); // Get current path
  
  return (
    <div className="layout">
      <header>
        <nav className="navbar">
          {/* Left section - Logo and Search */}
          <div className="nav-left">
            <div className="facebook-logo">
              <BsFacebook className="facebook-icon" />
            </div>
            <div className="search-container">
              <FiSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Search Facebook" 
                className="search-input"
              />
            </div>
          </div>
          <div className="logoss">
          {/* Center section - Main navigation */}
          <div className="nav-center">
            <button 
              onClick={() => router.replace('/Homepage')} 
              className={`nav-center-btn ${pathname === '/Homepage' ? 'active' : ''}`}
            >
              <FiHome className="nav-icon" />
            </button>
            
            {/* Placeholder buttons (disabled) */}
            <button className="nav-center-btn" disabled>
              <MdOndemandVideo className="nav-icon" />
            </button>
            <button className="nav-center-btn" disabled>
              <BsShop className="nav-icon" />
            </button>
            <button className="nav-center-btn" disabled>
              <HiUserGroup className="nav-icon" />
            </button>
          </div>
          </div>
          {/* Right section - Your functional buttons */}
          <div className="nav-right">
             {/* onClick={() => router.replace('/Profile')} */}
            <button className="nav-right-btn">
              <MdAccountCircle className="account-icon" />
            </button>
            <button onClick={() => router.replace('/')} className="nav-right-btn">
              <IoIosLogOut className="logout-icon" />
            </button>
          </div>
        </nav>
      </header>
      {children}
    </div>
  );
}