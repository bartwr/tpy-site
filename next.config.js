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
  webpack: (config, { dev }) => {
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
    config.optimization.minimize = false;
    config.node.fs = "empty";
    return config
  }
};
