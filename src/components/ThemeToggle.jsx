// import { Moon, Sun } from 'lucide-react';
// import React, { useEffect, useState } from 'react'
// import { cn } from '../lib/utils';

// const ThemeToggle = () => {
//     const [isDarkMode, setIsDarkMode] = useState(() => {
//         return localStorage.getItem("theme") === "dark";
//     });

//     useEffect(() => {
//         const storedTheme = localStorage.getItem("theme");
//         if (storedTheme === "dark") {
//             setIsDarkMode(true);
//             document.documentElement.classList.add("dark");
//         } else {
//             localStorage.setItem("theme", "light");
//             setIsDarkMode(false);
//         }
//     }, []);

//     const toggleTheme = () => {
//         if (isDarkMode) {
//             document.documentElement.classList.remove("dark");
//             localStorage.setItem("theme", "light");
//             setIsDarkMode(false);
//         } else {
//             document.documentElement.classList.add("dark");
//             localStorage.setItem("theme", "dark");
//             setIsDarkMode(true);
//         }
//     }

//     return (
//         <button 
//             onClick={toggleTheme}
//             className={cn(
//                 "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
//                 "focus:outline-hidden"
//             )}
//         >
//             {" "}
//             {isDarkMode ? (
//                 <Sun className='h-6 w-6 text-yellow-300' />
//             ) : (
//                 <Moon className='h-6 w-6 text-blue-900' />
//             )
//             }
//         </button>
//     )
// }

// export default ThemeToggle





























import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // page starts dark

  useEffect(() => {
    // Save previous theme
    const previousTheme = document.documentElement.classList.contains("dark");

    // Force dark mode for this page
    document.documentElement.classList.add("dark");

    // Restore previous theme when leaving page
    return () => {
      if (!previousTheme) {
        document.documentElement.classList.remove("dark");
      }
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};

export default ThemeToggle;
