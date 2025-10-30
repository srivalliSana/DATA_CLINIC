import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  UserIcon,
  Cog6ToothIcon,
  PencilIcon
} from "@heroicons/react/24/outline";
import ThemeToggle from "./ThemeToggle.jsx";

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-5 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
        isActive
          ? "text-white bg-gradient-to-r from-[#2563EB] to-blue-600 dark:from-[#2563EB] dark:to-blue-500 shadow-md"
          : "text-[#1A1A1A] dark:text-[#FFFFFF] hover:text-[#2563EB] dark:hover:text-[#2563EB] hover:bg-blue-50 dark:hover:bg-blue-900/20"
      }`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/auth/login");
  };

  return (
    <header className="w-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* === LEFT: Logo === */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="src/assets/IMG_1063.PNG"
            alt="Data Clinic Logo"
            className="w-12 h-12 object-contain"
          />
          <span className="text-xl font-bold text-[#1A1A1A] dark:text-white tracking-tight group-hover:text-[#2563EB] transition-colors">
            Data Clinic
          </span>
        </Link>

        {/* === CENTER: Navigation === */}
        <nav className="hidden md:flex items-center justify-center space-x-3 flex-1">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/learn-more">Learn More</NavItem>
          {user ? (
            <NavItem to="/upload-dataset">Upload</NavItem>
          ) : (
            <>
              <NavItem to="/onboarding">Onboarding</NavItem>
              <NavItem to="/auth/login">Login / Signup</NavItem>
            </>
          )}
        </nav>

        {/* === RIGHT: Theme + Profile === */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {user && (
            <div className="relative">
              {/* Profile Button */}
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200"
              >
                <div className="w-9 h-9 bg-gradient-to-r from-[#2563EB] to-blue-600 rounded-full flex items-center justify-center">
                  <UserIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hidden sm:block">
                  {user.name}
                </span>
              </button>

              {/* Dropdown Menu */}
              {isProfileOpen && (
                <>
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-800 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 py-1 z-50">
                    <Link
                      to="/profile"
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
                    >
                      <UserIcon className="w-4 h-4" />
                      View Profile
                    </Link>

                    <button
                      onClick={() => {
                        setIsProfileOpen(false);
                        navigate("/profile");
                      }}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 w-full text-left"
                    >
                      <PencilIcon className="w-4 h-4" />
                      Edit Profile
                    </button>

                    <button
                      onClick={() => {
                        setIsProfileOpen(false);
                        // Add settings functionality here
                      }}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 w-full text-left"
                    >
                      <Cog6ToothIcon className="w-4 h-4" />
                      Settings
                    </button>

                    <hr className="my-1 border-neutral-200 dark:border-neutral-600" />

                    <button
                      onClick={() => {
                        setIsProfileOpen(false);
                        handleLogout();
                      }}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 w-full text-left"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Logout
                    </button>
                  </div>

                  {/* Click Outside to Close */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsProfileOpen(false)}
                  />
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
