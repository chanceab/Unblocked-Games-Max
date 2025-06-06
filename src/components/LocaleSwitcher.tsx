'use client';

import { useLocale } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

import { usePathname, useRouter } from '@/libs/i18nNavigation';
import { AppConfig } from '@/utils/AppConfig';

export const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const currentLocale = AppConfig.localesMap[locale];
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLocaleChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
    router.refresh();
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-white transition-colors hover:bg-white/20"
      >
        <span>{currentLocale}</span>
        <svg
          className={`size-4 transition-transform${isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 min-w-[160px] rounded-lg bg-white p-1 ">
          {Object.entries(AppConfig.localesMap).map(([key, value]) => (
            <button
              key={key}
              type="button"
              className={`w-full rounded-md px-4 py-2 text-left text-sm transition-colors hover:bg-[#08003A] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#08003A] focus:ring-offset-2
                ${key === locale ? 'bg-white/5' : ''}`}
              onClick={() => handleLocaleChange(key)}
            >
              {value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
