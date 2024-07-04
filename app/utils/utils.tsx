export const jsonLdScript = (structuredData?: any) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anders Lundback",
    jobTitle: "Chief Product Officer",
    worksFor: {
      "@type": "Organization",
      name: "healthwords.ai",
    },
    url: "https://www.healthwords.ai",
    sameAs: ["https://better-chess.com/"],
    knowsAbout: ["Chess", "Product", "Tech", "Front end"],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Malardalen University",
    },
  };

  const data = { ...defaultStructuredData, ...structuredData };

  const structuredDataString = JSON.stringify(data);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: structuredDataString }}
    />
  );
};
