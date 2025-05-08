import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Blog Ihsanomia',
    description: 'Selamat datang di blog Ihsanomia, tempat berbagi pengetahuan dan pengalaman tentang hidup.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es</language>`,
  });
}