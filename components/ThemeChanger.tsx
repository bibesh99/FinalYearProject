"use client";
import { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';
import { useTheme } from 'next-themes';
import { BsFillCloudSunFill } from 'react-icons/bs';
import { BsFillCloudMoonFill } from 'react-icons/bs';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
      <Switch
        checked={resolvedTheme === 'dark'}
        onChange={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        className={`${
          resolvedTheme === 'dark' ? 'bg-gray-700' : ' bg-yellow-300'
        }  flex justify-start items-center md:h-[25px] md:w-[54px] h-[18px] w-[27px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Toggle Dark Mode</span>
        <span
          aria-hidden="true"
          className={`${
                      resolvedTheme === 'dark' ? 'md:translate-x-4 translate-x-[6px]' : 'translate-x-0'} 
                      pointer-events-none flex justify-center items-center md:h-[24px] md:w-[34px] h-[16px] w-[17px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out `}>
          {resolvedTheme === 'dark' ? (
         <BsFillCloudMoonFill className="text-gray-700 text-[10px] md:text-lg" />
          ) : (
          <BsFillCloudSunFill className="text-yellow-300 text-[10px] md:text-lg" />
          )}
        </span>
      </Switch>
  );  
}
