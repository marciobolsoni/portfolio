/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the site can be hosted on GitHub Pages.
  output: "export",
  // Trailing slashes guarantee that /about/index.html is generated and
  // served correctly when the user lands on /about directly. This is the
  // fix for the SPA-routing 404 issue on GitHub Pages.
  trailingSlash: true,
  // GitHub Pages does not run Next's image optimizer.
  images: { unoptimized: true },
};

export default nextConfig;
