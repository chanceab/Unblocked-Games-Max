import { AppConfig } from '@/utils/AppConfig';

export const BaseTemplate = (props: {

  children: React.ReactNode;
}) => {
  return (
    <div className="w-full text-gray-700 antialiased">
      <div>

        <main>{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          {`© Copyright ${new Date().getFullYear()} ${AppConfig.name}. `}

        </footer>
      </div>
    </div>
  );
};
