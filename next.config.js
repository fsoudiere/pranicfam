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
        source: '/channels',
        permanent: true,
        destination: '/circles',
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
    domains: ['trello.com', 'bit.ly'],
  },
  reactStrictMode: true,
}
