'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export const regex = /^(?:https?:\/\/)?(?:www\.)?(?:x\.com|twitter\.com)\/\w+\/status\/\d+$/;

export function DownloadButton() {
  const t = useTranslations('X');

  const [userInput, setUserInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const isValidUrl = (url: string): boolean => {
    return regex.test(url);
  };

  const handleDownload = async () => {
    setError('');

    if (!userInput.trim()) {
      setError(t('validation_error1'));
      return;
    }

    if (!isValidUrl(userInput)) {
      setError(t('validation_error2'));
      return;
    }

    setIsLoading(true);
    try {
      // 下载逻辑

      const res = await fetch('/api/x', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: userInput }),
      });

      console.error('下载成功:', res);

      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.error || t('analysis_error'));

        return;
      }

      const data = await res.json();
      console.error('下载成功:', data);
    } catch (err) {
      console.error('下载错误:', err);
      setError('下载失败，请稍后重试');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto mb-8 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
      <div className="flex flex-col gap-2 overflow-hidden rounded-lg bg-white/10 p-2 backdrop-blur-md sm:flex-row sm:p-3">
        <div className="flex-1">
          <input
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
              setError(''); // 用户输入时清除错误
            }}
            type="text"
            name="videoUrl"
            placeholder={t('download_button_tip')}
            className={`size-full rounded-lg px-4 py-3 text-sm text-gray-800
              outline-none transition-colors duration-200
              placeholder:text-gray-500 focus:ring-2 
              focus:ring-indigo-500
              ${error ? 'border border-red-300 bg-red-50' : 'bg-white/90'}
              sm:text-base`}
          />
        </div>
        <button
          type="button"
          onClick={handleDownload}
          disabled={isLoading}
          className="mt-2 rounded-lg bg-[#E21E3C] px-6 py-3 font-semibold text-white transition hover:bg-[#c91834]
            disabled:opacity-50 sm:mt-0"
        >
          {isLoading ? t('downloading') : t('download')}
        </button>
      </div>

      {error && (
        <div className="mt-2 text-left text-sm text-red-500 sm:absolute">
          <span className="flex items-center gap-1">
            <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </span>
        </div>
      )}

    </div>
  );
}
