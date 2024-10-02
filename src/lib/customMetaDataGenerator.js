export function customMetaDataGenerator({
  title,
  description = "Hey Checkout Rachit's Card on elRed",
  canonicalUrl = "https://task-elred-4chi40lzi-gupta258s-projects.vercel.app/",
  ogType = "website",
  keywords = ["an array", "of default", "keywords"],
  ogImage = "/fullImage.png",
  twitterCard = "summary_large_image",
}) {
  // Create Site Title
  const siteTitle = "Professional";
  const fullTitle = `${title} | ${siteTitle}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    openGraph: {
      title: fullTitle,
      description,
      type: ogType,
      url: canonicalUrl,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: twitterCard,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}
