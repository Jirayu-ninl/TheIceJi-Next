// If such a type existed...

const path = require('path')
// require("dotenv").config();
const plugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withOffline = require('next-offline')

const nextConfig = {
  webpack(config, { webpack, dev, isServer }) {
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react',
      })
    )

    config.resolve.alias['@app'] = path.join(__dirname, 'app')
    config.resolve.alias['@config'] = path.join(__dirname, 'app/config')
    config.resolve.alias['@auth'] = path.join(__dirname, 'app/auth')
    config.resolve.alias['contents'] = path.join(
      __dirname,
      'resources/contents'
    )
    config.resolve.alias['views'] = path.join(__dirname, 'resources/views')
    config.resolve.alias['layouts'] = path.join(
      __dirname,
      'resources/views/layouts'
    )
    config.resolve.alias['pages'] = path.join(
      __dirname,
      'resources/views/pages'
    )
    config.resolve.alias['@models'] = path.join(__dirname, 'app/models')
    config.resolve.alias['@database'] = path.join(
      __dirname,
      'app/models/database'
    )
    config.resolve.alias['@libs'] = path.join(__dirname, 'libs')
    config.resolve.alias['@contexts'] = path.join(__dirname, 'app/contexts')
    config.resolve.alias['@store'] = path.join(__dirname, 'app/store')
    config.resolve.alias['public'] = path.join(__dirname, 'public')

    // audio support
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader'],
    })

    return config
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // swcMinify: true,
  // experimental: {
  //   concurrentFeatures: true,
  //   serverComponents: true,
  //   outputStandalone: true,
  // },
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'media.graphcms.com',
      'media.graphassets.com',
      'avatars.githubusercontent.com',
      'platform-lookaside.fbsbx.com',
    ],
  },
}

// manage i18n
if (process.env.EXPORT !== 'true') {
  nextConfig.i18n = {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  }
}

module.exports = plugins(
  [
    [
      withOffline,
      {
        workboxOpts: {
          swDest: process.env.NEXT_EXPORT
            ? 'service-worker.js'
            : 'static/service-worker.js',
          runtimeCaching: [
            {
              urlPattern: /^https?.*/,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'offlineCache',
                expiration: {
                  maxEntries: 200,
                },
              },
            },
          ],
        },
        async rewrites() {
          return [
            {
              source: '/service-worker.js',
              destination: '/_next/static/service-worker.js',
            },
          ]
        },
      },
    ],
    withBundleAnalyzer,
  ],
  nextConfig
)
