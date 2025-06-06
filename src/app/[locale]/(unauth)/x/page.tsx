import Image from 'next/image';

import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { DownloadButton } from '@/components/x/DownloadButton';
import { Faq } from '@/components/x/Faq';

export default function XPage() {
  return (
    <div className="min-h-screen  text-white">
      {/* Header */}
      <header className="bg-primary p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">GetXVideo</span>
          </div>
          <div className="text-black">
            <LocaleSwitcher />
          </div>
        </div>
      </header>

      <div className="bg-primary px-4 pb-16 pt-20 text-center sm:pt-32 md:pt-44">
        <h1 className="mb-4 animate-fade-in text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
          Twttie/X Video Downloader
        </h1>

        <p className="mx-auto mb-8 max-w-xl text-base text-gray-300 opacity-90 sm:text-lg">
          快速、免费下载推特视频，支持高清画质，无需注册
        </p>

        <DownloadButton />
      </div>

      <div className=" container mx-auto  mt-16 max-w-9/10 text-secondary  sm:max-w-9/10 md:w-3/4 lg:w-2/3 xl:w-[1280px] ">
        <p className="mb-4 text-sm">
          欢迎来到 GetSany，一个专为下载 X 平台帖子中的视频而打造的网站。我们提供快速可靠的解决方案，帮助您轻松突破平台下载限制。通过我们简洁友好的界面，您可以轻松访问和下载您喜爱的内容，让视频获取变得前所未有的简单。无论您是想保存精彩瞬间，还是离线观看，我们都能满足您的需求。立即体验，轻松下载！
        </p>
        <h5 className="mb-8 flex justify-center px-8 text-xl">Supported Platforms:</h5>
        <div className="flex flex-wrap justify-center">
          <div className="w-1/2 p-4 text-center sm:w-1/6">
            <Image src="/assets/images/windows.svg" alt="Windows" width={142} height={142} />
          </div>
          <div className="w-1/2 p-4 text-center sm:w-1/6">
            <Image src="/assets/images/apple.svg" alt="Apple" width={142} height={142} />
          </div>
          <div className="w-1/2 p-4 text-center sm:w-1/6">
            <Image src="/assets/images/android.svg" alt="Android" width={142} height={142} />
          </div>
          <div className="w-1/2 p-4 text-center sm:w-1/6">
            <Image src="/assets/images/linux.svg" alt="Linux" width={142} height={142} />
          </div>
        </div>

        <div className="mt-16 px-8">
          <ul className="list-disc space-y-4 text-sm">
            <li>欢迎来到 GetSany，一个专为下载 X 平台帖子中的视频而设计的工具。我们提供完全免费的服务，让您轻松获取所需内容。</li>

            <li>我们的工具兼容所有设备，无论是桌面还是移动设备，您都可以轻松下载喜爱的视频。</li>
            <li>只需简单几步，即可通过我们的平台转换 X 平台视频。</li>
            <li>享受快速下载和无限视频访问，无需任何费用。</li>
            <li>通过我们的详细指南和专业建议，轻松掌握视频下载的技巧。</li>
          </ul>
        </div>

        <Faq />
      </div>

    </div>
  );
}
