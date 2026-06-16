const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ahmed-almuaiqly-delta.vercel.app";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/google-sitemap.xml`,
      `${baseUrl}/urls.txt`,
    ],
    host: baseUrl,
  };
}
