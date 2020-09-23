module.exports = {
  title: 'یونیتیکورن',
  tagline: 'سفرنامه‌ای به تجربیاتمان از بازی‌سازی',
  url: 'https://unitycorn.ir',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo.svg',
  organizationName: 'Unitycorn', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'یونیتیکورن',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://zarinp.al/@asajadi',
          label: 'حمایت مالی',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [

        {
          title: 'یونیتیکورن را دنبال کنید',
          items: [
            {
              label: 'اینستاگرام',
              href: 'https://www.instagram.com/unitycorn_ir',
            },
            {
              label: 'وبلاگ در ویرگول',
              href: 'https://virgool.io/@unitycorn',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/asajadi84/unitycorn',
            },
          ],
        },
        {
          title: 'اپلیکیشن یونیتیکورن',
          items: [
            {
              label: 'کافه بازار',
              href: 'https://cafebazaar.ir/app/ir.unitycorn.app',
            },
            {
              label: 'مایکت',
              href: 'https://myket.ir/app/ir.unitycorn.app',
            },
          ],
        },
      ],
      copyright: `کپی لفت 2020 - انتشار مطالب با ذکر منبع مجاز است.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
