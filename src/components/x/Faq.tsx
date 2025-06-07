'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

type FaqItem = {
  question: string;
  answer: string;
};

const FaqItemCom = (props: { item: FaqItem }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mx-auto mb-8 w-full max-w-6xl space-y-4">
      <div
        className="overflow-hidden rounded-lg border border-gray-700 bg-primary backdrop-blur-sm"
      >
        <button
          type="button"
          className="flex w-full items-center justify-between px-6 py-4 text-left text-white transition-colors hover:bg-white/10"
          onClick={() => setOpen(!open)}
        >
          <span className="font-medium">{props.item.question}</span>
          <svg
            className={`size-5 transition-transform ${open ? 'rotate-180' : ''
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

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="whitespace-pre-line border-t border-gray-700 px-6 py-4 text-gray-300">
            {props.item.answer}
          </div>
        </div>
      </div>

    </div>
  );
};

export const Faq = () => {
  const t = useTranslations('X');

  const faqData: FaqItem[] = [
    {
      question: t('faq1.question'),
      answer: t('faq1.answer'),
    },
    {
      question: t('faq2.question'),
      answer: t('faq2.answer'),
    },
    {
      question: t('faq3.question'),
      answer: t('faq3.answer'),
    },
    {
      question: t('faq4.question'),
      answer: t('faq4.answer'),
    },
  ];

  return (
    <div className="mb-10">
      <h2 className="mb-8 mt-10 text-center text-2xl font-bold text-primary">{t('faq')}</h2>

      {faqData.map(item => (
        <FaqItemCom key={item.question} item={item} />
      ))}
    </div>
  );
};
