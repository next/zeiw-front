require(`dotenv`).config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    siteTitle: `ZEIW`,
    siteTitleAlt: `ZEIW`,
    siteHeadline: `ZEIW`,
    siteUrl: `https://zeiw.me`,
    siteDescription: `Open source community-based game 🏓`,
    siteLanguage: `en`,
    siteImage: `/cover.jpg`,
    author: `@zeiwhq`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {}
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ZEIW`,
        short_name: `ZEIW`,
        description: `Open source community-based game 🏓`,
        start_url: `/`,
        background_color: `#0066ff`,
        theme_color: `#ff9900`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            "Content-Security-Policy: block-all-mixed-content",
            "Feature-Policy: accelerometer 'none'; camera 'none'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; payment 'none'; usb 'none'"
          ]
        }
      }
    }
  ]
};
