require('dotenv').config();
const webpack = require('webpack');

module.exports = {
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/',
        permanent: true,
      },
      {
        source: '/gallery',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tpy-projects',
        destination: '/',
        permanent: true,
      },
      {
        source: '/kunststof-magazine-articles',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tpy-experts-explain',
        destination: '/',
        permanent: true,
      },
      {
        source: '/events-2',
        destination: '/happening',
        permanent: true,
      },
      {
        source: '/fotos-update-event-27-juni-2019',
        destination: '/happening',
        permanent: true,
      },
      {
        source: '/in-the-media',
        destination: '/happening',
        permanent: true,
      }
    ]
  },
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery',
      })
    );
    config.plugins.push(
      new webpack.DefinePlugin({
        SPACE_ID: JSON.stringify(process.env.CONTENTFUL_SPACE_ID),
        ACCESS_TOKEN: JSON.stringify(process.env.CONTENTFUL_ACCESS_TOKEN),
      })
    );
    // config.optimization.minimize = true;
    // config.node.fs = "empty";
    // Fixes npm packages that depend on `fs` module, for Next.js users.
    // See https://stackoverflow.com/a/68511591
    if (! isServer) {
      config.resolve.fallback.fs = false;
      // // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      // config.resolve.fallback = {
      //     fs: false
      // }
    }
    return config;
  }
};
