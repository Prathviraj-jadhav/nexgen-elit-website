import type { Metadata } from 'next';
import { seoConfig } from '@/config/seo';

interface GeneratePageMetadataProps {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
}

export function generatePageMetadata({
  title,
  description,
  path = '',
  image,
  type = 'website',
  publishedTime,
}: GeneratePageMetadataProps): Metadata {
  const url = `${seoConfig.ogImage}${path}`;
  const ogImage = image || seoConfig.ogImage;

  return {
    title,
    description: description || seoConfig.description,
    openGraph: {
      title: seoConfig.titleTemplate.replace('%s', title),
      description: description || seoConfig.description,
      url,
      siteName: 'Nexgen Elit',
      images: [{ url: ogImage, width: 1200, height: 630 }],
      locale: 'en_US',
      type,
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: seoConfig.titleTemplate.replace('%s', title),
      description: description || seoConfig.description,
      images: [ogImage],
      creator: seoConfig.twitterHandle,
    },
    alternates: {
      canonical: url,
    },
  };
}
