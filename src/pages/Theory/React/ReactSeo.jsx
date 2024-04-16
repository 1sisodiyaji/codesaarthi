import React, { useState } from 'react';

const ReactSeo = () => {
  const [userInput, setUserInput] = useState('');
  
  const generateSitemap = () => {
    const userRoutes = userInput.split('\n').map(route => route.trim()).filter(Boolean);

    const formattedRoutes = userRoutes.map(route => {
      return route.replace(/path=["'](.*?)["']/, (match, p1) => `path="${p1}" element={<YourComponent />} />`);
    });

    console.log("Formatted Routes:", formattedRoutes);

    const sitemapXml = generateSitemapXml(formattedRoutes);

    if (sitemapXml) {
      saveSitemapToFile(sitemapXml);
    } else {
      console.error("Failed to generate sitemap XML");
    }
  };

  const generateSitemapXml = (routes) => {
    const baseUrl = "https://codesaarthi.com";
    const sitemapUrls = [];

    routes.forEach(route => {
      const regex = /path="(.*?)"/;
      const match = route.match(regex);

      if (match && match.length === 2) {
        const path = match[1];
        const sitemapUrl = {
          loc: baseUrl + path,
          changefreq: "monthly",
          priority: 0.8,
        };

        sitemapUrls.push(sitemapUrl);
      } else {
        console.error("Invalid route format:", route);
      }
    });

    if (sitemapUrls.length > 0) {
      const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

      return sitemapXml;
    } else {
      return null;
    }
  };

  const saveSitemapToFile = (xml) => {
    const blob = new Blob([xml], { type: 'text/xml' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    a.click();

    // Clean up
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h1>Sitemap Generator</h1>
      <textarea
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter your React routes here..."
      />
      <button onClick={generateSitemap}>Generate Sitemap</button>
    </div>
  );
};

export default ReactSeo;
