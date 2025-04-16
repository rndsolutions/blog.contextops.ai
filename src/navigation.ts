import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      // text: 'Blog',
      // href: getBlogPermalink(),

      // links: [
      //   {
      //     text: 'Blog List',
      //     href: getBlogPermalink(),
      //   },
      //   {
      //     text: 'Article',
      //     href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
      //   },
      //   {
      //     text: 'Article (with MDX)',
      //     href: getPermalink('markdown-elements-demo-post', 'post'),
      //   },
      //   {
      //     text: 'Category Page',
      //     href: getPermalink('tutorials', 'category'),
      //   },
      //   {
      //     text: 'Tag Page',
      //     href: getPermalink('astro', 'tag'),
      //   },
      // ],
    },    
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' }                 
      ],
    },
    {
      // title: 'Platform',
      // links: [            
      //   { text: 'Atom', href: '#' },
      //   { text: 'Electron', href: '#' },
      // ],
    },
    {
      title: 'Support',
      links: [        
        { text: 'Discord', href: 'https://discord.com/invite/RNa7nds8' }
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/radoslavminchev' },    

  ],
  footNote: `
    ContextOps AI @ 2025. All rights reserved.
  `,
};
