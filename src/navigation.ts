import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Vision',
      href: getPermalink('/#vision'),
    },
    {
      text: 'Platform',
      links: [
        { text: 'How It Works', href: getPermalink('/#solution') },
        { text: 'Product', href: getPermalink('/#product') },
        { text: 'Competition', href: getPermalink('/#competition') },
      ],
    },
    {
      text: 'Markets',
      links: [
        { text: 'Hospital Networks · Claims + RCM', href: getPermalink('/#gtm') },
        { text: 'Pharmacovigilance', href: getPermalink('/#gtm') },
        { text: 'Health Insurers + Payers', href: getPermalink('/#gtm') },
        { text: 'CDMOs + Pharma R&D', href: getPermalink('/#gtm') },
        { text: 'Government — CMS, VA, DoD', href: getPermalink('/#gtm') },
      ],
    },
    {
      text: 'Company',
      links: [
        { text: 'Team', href: getPermalink('/#team') },
        { text: 'Why Now', href: getPermalink('/#why-now') },
        { text: 'Business Model', href: getPermalink('/#business-model') },
      ],
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
        { text: 'How It Works', href: '/#solution' },
        { text: 'The Product', href: '/#product' },
        { text: 'Competition', href: '/#competition' },
      ],
    },
    {
      title: 'Markets',
      links: [
        { text: 'Hospital Networks · Claims + RCM', href: '/#gtm' },
        { text: 'Pharmacovigilance', href: '/#gtm' },
        { text: 'Health Insurers + Payers', href: '/#gtm' },
        { text: 'CDMOs + Pharma R&D', href: '/#gtm' },
        { text: 'Government — CMS, VA, DoD', href: '/#gtm' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Team', href: '/#team' },
        { text: 'Why Now', href: '/#why-now' },
        { text: 'Business Model', href: '/#business-model' },
        { text: 'Market Size', href: '/#market' },
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
