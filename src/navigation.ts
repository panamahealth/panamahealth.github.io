import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Vision',
      href: getPermalink('/#vision'),
    },
    {
      text: 'Platform',
      links: [{ text: 'Product', href: getPermalink('/#product') }],
    },
    {
      text: 'Investors',
      href: getPermalink('/investors'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Request a Demo', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Platform',
      links: [
        { text: 'The Vision', href: '/#vision' },
        { text: 'The Product', href: '/#product' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Investors', href: '/investors' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-x', href: '#' },
  ],
  footNote: `
    &copy; 2026 PanamaHealth. Connecting oceans of intelligence, not data.
  `,
};
