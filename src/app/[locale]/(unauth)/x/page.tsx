import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { DownloadButton } from '@/components/x/DownloadButton';
import { Faq } from '@/components/x/Faq';

export default function XPage(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);
  const t = useTranslations('X');
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
          {`${t('title')} `}
        </h1>

        <p className="mx-auto mb-8 max-w-xl text-base text-gray-300 opacity-90 sm:text-lg">
          {`${t('description')} `}
        </p>

        <DownloadButton />
      </div>

      <div className=" container mx-auto  mt-16 max-w-9/10 text-secondary  sm:max-w-9/10 md:w-3/4 lg:w-2/3 xl:w-[1280px] ">
        <p className="mb-4 text-sm">
          {t('welcome')}
        </p>
        <h5 className="mb-8 flex justify-center px-8 text-xl">
          {t('supported')}
        </h5>
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
            <li>{t('welcome')}</li>

            <li>{t('welcome3')}</li>
            <li>{t('welcome4')}</li>
            <li>{t('welcome5')}</li>
            <li>{t('welcome6')}</li>
          </ul>
        </div>

        <Faq />
      </div>

    </div>
  );
}
