export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nexgen Elit',
    url: 'https://nexgenelit.com',
    logo: 'https://nexgenelit.com/logo.svg',
    description: "India's first logistics-dedicated digital technology company",
    sameAs: ['https://www.linkedin.com/company/nxgen-elit/'],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@nexgenelit.com',
      contactType: 'sales',
    },
  };
}

export function articleSchema({
  title,
  description,
  url,
  publishedTime,
  author,
}: {
  title: string;
  description: string;
  url: string;
  publishedTime: string;
  author: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished: publishedTime,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nexgen Elit',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nexgenelit.com/logo.svg',
      },
    },
  };
}

export function jobPostingSchema({
  title,
  description,
  url,
  datePosted,
  location,
  employmentType,
}: {
  title: string;
  description: string;
  url: string;
  datePosted: string;
  location: string;
  employmentType: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title,
    description,
    url,
    datePosted,
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Nexgen Elit',
      sameAs: 'https://nexgenelit.com',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: location,
        addressCountry: 'IN',
      },
    },
    employmentType,
  };
}
