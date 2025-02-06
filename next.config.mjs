// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      // domains: ['cdn.sanity.io'],
      remotePatterns: [
        {
          hostname: 'cdn.sanity.io',
        },
      ],
    },
  };
  
  export default nextConfig;