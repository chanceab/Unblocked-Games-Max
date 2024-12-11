import { getTranslations } from 'next-intl/server';

const GameCard = ({ title, category, rating }: {
  title: string;
  category: string;
  rating: number;
}) => (
  <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
    <div className="relative h-64 w-full">

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-indigo-600">
        {category}
      </span>
    </div>
    <div className="relative z-10 bg-white p-6">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={_}
              className={`size-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <button type="button" className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700">
          了解更多
        </button>
      </div>
    </div>
  </div>
);

const CategoryCard = ({ icon, name, count }: { icon: string; name: string; count: number }) => (
  <div className="group cursor-pointer overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
    <div className="flex items-center space-x-4">
      <div className="flex size-12 items-center justify-center rounded-full bg-indigo-100 text-2xl text-indigo-600">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600">{name}</h3>
        <p className="text-sm text-gray-500">
          {count}
          {' '}
          款游戏
        </p>
      </div>
    </div>
  </div>
);

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}
const HomePage = () => {
  // nextjs 设置页面标题

  const featuredGames = [
    { title: '赛博朋克2077', category: '角色扮演', rating: 4.5, image: '/images/game1.jpg' },
    { title: '艾尔登法环', category: '动作冒险', rating: 4.8, image: '/images/game2.jpg' },
    { title: '星空', category: '科幻RPG', rating: 4.3, image: '/images/game3.jpg' },
  ];

  const categories = [
    { icon: '🎮', name: '动作游戏', count: 128 },
    { icon: '🗺', name: '开放世界', count: 86 },
    { icon: '⚔️', name: '角色扮演', count: 245 },
    { icon: '🏃', name: '冒险', count: 167 },
    { icon: '🎯', name: '射击', count: 153 },
    { icon: '🏎', name: '竞速', count: 94 },
  ];

  return (
    <div>
      {/* 英雄区域 */}
      <div className="relative min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />

        <div className="relative flex min-h-[80vh] items-center px-4">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-5xl font-bold text-white md:text-7xl">
              探索无限游戏世界
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-gray-300">
              发现最新的游戏大作，与全球玩家一起开启精彩的游戏之旅
            </p>
            <div className="mt-8 flex space-x-4">
              <button type="button" className="group relative overflow-hidden rounded-full bg-indigo-600 px-8 py-3 text-white transition-transform hover:scale-105">
                <span className="relative z-10">立即开始</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300 group-hover:translate-x-0" />
              </button>
              <button type="button" className="rounded-full border-2 border-white bg-transparent px-8 py-3 text-white transition-colors hover:bg-white hover:text-gray-900">
                了解更多
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 游戏分类 */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">游戏分类</h2>
              <p className="mt-2 text-gray-600">探索你感兴趣的游戏类型</p>
            </div>
            <button type="button" className="flex items-center text-indigo-600 hover:text-indigo-700">
              查看全部
              <svg className="ml-2 size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map(category => (
              <CategoryCard key={category.name} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* 特色游戏 */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-gray-900">特色游戏</h2>
          <p className="mt-2 text-gray-600">精选热门游戏推荐</p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredGames.map(game => (
              <GameCard key={game.title} {...game} />
            ))}
          </div>
        </div>
      </section>

      {/* 加入社区 */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl font-bold">加入我们的游戏社区</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
            与数百万玩家一起分享游戏体验，获取第一手游戏资讯
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <button type="button" className="rounded-full bg-white px-8 py-3 font-medium text-indigo-600 transition-transform hover:scale-105">
              立即加入
            </button>
            <button type="button" className="rounded-full border-2 border-white bg-transparent px-8 py-3 font-medium text-white transition-transform hover:scale-105">
              了解更多
            </button>
          </div>
        </div>
      </section>

      {/* 订阅区域 */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">订阅获取最新资讯</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            第一时间获取游戏更新、独家优惠和活动信息
          </p>
          <div className="mx-auto mt-8 flex max-w-md justify-center">
            <input
              type="email"
              placeholder="输入您的邮箱"
              className="w-full rounded-l-full border-gray-300 px-6 py-3 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <button type="button" className="rounded-r-full bg-indigo-600 px-8 py-3 font-medium text-white transition-colors hover:bg-indigo-700">
              订阅
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
