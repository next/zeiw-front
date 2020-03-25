module.exports = {
  siteMetadata: {
    author: `@zeiwhq`,
    siteTitle: `ZEIW`,
    siteLanguage: `en`,
    siteTitleAlt: `ZEIW`,
    siteHeadline: `ZEIW`,
    siteImage: `/cover.jpg`,
    siteUrl: `https://zeiw.pnfc.re`,
    siteDescription: `Open source community-based game.`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ZEIW`,
        start_url: `/`,
        short_name: `ZEIW`,
        display: `standalone`,
        theme_color: `#ff9900`,
        background_color: `#0066ff`,
        description: `Open source community-based game.`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': [
            'X-Frame-Options: DENY',
            'X-XSS-Protection: 1; mode=block',
            'X-Content-Type-Options: nosniff',
            'Referrer-Policy: strict-origin-when-cross-origin',
            'Strict-Transport-Security: max-age=31536000; includeSubDomains; preload',
            "Feature-Policy: accelerometer 'none'; camera 'none'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; payment 'none'; usb 'none'",
            "Content-Security-Policy: connect-src 'self' img.lekoarts.de www.netlify.com; default-src 'self'; img-src 'self' img.lekoarts.de www.netlify.com; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'",
          ],
        },
      },
    },
  ],
}
