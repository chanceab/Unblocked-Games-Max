'use client';

import { useState } from 'react';

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: '什么是 GetSany/X 以及它有什么作用？',
    answer: 'GetSany/X 是一个专业的 X 平台视频下载工具。它能帮助用户轻松下载和保存 X 平台上的视频内容，无需注册，完全免费。我们的工具提供高速下载体验，支持高清视频质量，是获取 X 平台视频内容的理想选择。',
  },
  {
    question: '如何使用 GetSany/X 下载 X 视频?',
    answer: '使用 GetSany/X 下载视频非常简单：\n1. 复制您想要下载的 X 视频链接\n2. 将链接粘贴到我们网站的输入框中\n3. 点击"下载"按钮\n4. 选择您想要的视频质量\n5. 等待下载完成即可',
  },
  {
    question: 'GetSany/x 支持哪些视频格式？',
    answer: 'GetSany/X 支持多种视频格式下载：\n• MP4 高清格式\n• WebM 格式\n• 音频 MP3 格式\n我们会自动识别最佳质量，同时也让您可以根据需求选择合适的格式和质量。',
  },
  {
    question: 'GetSany/X 安全吗?',
    answer: '是的，GetSany/X 完全安全。我们的服务：\n• 不需要安装任何软件\n• 不收集用户个人信息\n• 使用 HTTPS 加密保护数据传输\n• 定期进行安全扫描和更新\n• 无广告和恶意软件',
  },
];

const FaqItemCom = (props: { item: FaqItem }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mx-auto w-full max-w-6xl space-y-4">
      <h2 className="mb-6 text-2xl font-bold text-white">常见问题</h2>

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
  return (
    <div>
      <h2 className="mt-10 text-center text-2xl font-bold text-primary">FAQ</h2>

      {faqData.map(item => (
        <FaqItemCom key={item.question} item={item} />
      ))}
    </div>
  );
};
