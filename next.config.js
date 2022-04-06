module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'cookie',
            key: 'user',
          },
        ],
        permanent: false,
        destination: '/en',
      },
      {
        source: '/circles',
        permanent: true,
        destination: '/classes',
      },
      {
        source: '/initiations',
        permanent: true,
        destination: '/events',
      },
      {
        source: '/members',
        permanent: true,
        destination: '/coaching',
      },
    ]
  },
  images: {
    domains: ['trello.com', 'bit.ly', 'google.com'],
  },
  reactStrictMode: true,
}
