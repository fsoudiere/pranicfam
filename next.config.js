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
    ]
  },
  images: {
    domains: ['trello.com'],
  },
  reactStrictMode: true,
}
