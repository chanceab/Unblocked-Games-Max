import { BaseTemplate } from '@/templates/BaseTemplate';

export default function DashboardLayout(props: { children: React.ReactNode }) {
  // const t = useTranslations('DashboardLayout');

  return (
    <BaseTemplate>
      {props.children}
    </BaseTemplate>
  );
}

export const dynamic = 'force-dynamic';
