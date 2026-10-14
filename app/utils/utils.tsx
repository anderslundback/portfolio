export const SITE_URL = "https://www.anderslundback.com";
export const CONSULTING_URL = "https://lundbackconsulting.com";

export const jsonLdScript = (structuredData?: any) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Anders Lundbäck",
        publisher: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Anders Lundbäck",
        url: SITE_URL,
        jobTitle: "Chief Product Officer",
        worksFor: [
          { "@type": "Organization", name: "healthwords.ai" },
          { "@id": `${CONSULTING_URL}/#organization` },
        ],
        sameAs: ["https://better-chess.com/", CONSULTING_URL],
        knowsAbout: ["Chess", "Product", "Tech", "Front end"],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Malardalen University",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${CONSULTING_URL}/#organization`,
        name: "Lundback Product Consulting AB",
        url: CONSULTING_URL,
        founder: { "@id": `${SITE_URL}/#person` },
        areaServed: "Europe",
        address: { "@type": "PostalAddress", addressCountry: "SE" },
        sameAs: [SITE_URL],
      },
    ],
  };

  const data = structuredData ?? defaultStructuredData;

  const structuredDataString = JSON.stringify(data);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: structuredDataString }}
    />
  );
};
