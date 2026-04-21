import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Platform',
      href: getPermalink('/#solution'),
    },
    {
      text: 'Solutions',
      links: [
        {
          text: 'Pharmacovigilance',
          href: getPermalink('/#use-cases'),
        },
        {
          text: 'CDMO Manufacturing',
          href: getPermalink('/#use-cases'),
        },
        {
          text: 'Multi-Hospital Networks',
          href: getPermalink('/#use-cases'),
        },
        {
          text: 'Clinical Trials',
          href: getPermalink('/#use-cases'),
        },
      ],
    },
    {
      text: 'Security',
      href: getPermalink('/#trust'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Join Pilot Program', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Solutions',
      links: [
        { text: 'Federated Pharmacovigilance', href: '/#use-cases' },
        { text: 'CDMO Batch Optimization', href: '/#use-cases' },
        { text: 'Multi-Hospital FL Networks', href: '/#use-cases' },
        { text: 'Clinical Trial Acceleration', href: '/#use-cases' },
      ],
    },
    {
      title: 'Technology',
      links: [
        { text: 'How It Works', href: '/#solution' },
        { text: 'Security & Privacy', href: '/#trust' },
        { text: 'HIPAA Compliance', href: '/#trust' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Pilot Program', href: '/contact' },
        { text: 'Contact Us', href: '/contact' },
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
