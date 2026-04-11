export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const siteConfig = {
  name: 'Nexgen Elit',
  description: "India's first logistics-dedicated digital technology company",
  url: 'https://nexgenelit.com',
  ogImage: '/og-default.png',
  links: {
    linkedin: 'https://www.linkedin.com/company/nxgen-elit/',
    email: 'hello@nexgenelit.com',
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    {
      label: 'Products',
      href: '/products',
    },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Partners', href: '/partners' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blogs' },
    { label: 'Contact Us', href: '/contact' },
  ] as NavLink[],
};

export const NAV_LINKS = siteConfig.nav;
