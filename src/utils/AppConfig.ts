import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/routing/types';

const localePrefix: LocalePrefix = 'as-needed';

// FIXME: Update this configuration file based on your project information

// Spanish
// German
// Arabic
// Portugal
// Russian
// Indonesian
// Turkish
// Français
// Italian
// Hindi
// Japanese
// Korean
// Thai
// Tiếng Việt
const localesMap: Record<string, string> = {
  'en': 'English',
  'zh-cn': '简体中文',
  'zh-tw': '繁體中文',
  'ja': '日本語',
  'ko': '한국어',
  'ru': 'Русский',
  'de': 'Deutsch',
  'fr': 'Français',
  'es': 'Español',
  'pt': 'Português',
  'vi': 'Tiếng Việt',
  'ar': 'العربية',
  'id': 'Bahasa Indonesia',
  'it': 'Italiano',
  'tr': 'Türkçe',
  'hi': 'हिन्दी',
};

export const AppConfig = {
  name: 'GetSany',
  localesMap,
  locales: Object.keys(localesMap),
  defaultLocale: 'en',
  localePrefix,
  // 主题颜色
  themeColor: '#08003a',
};
