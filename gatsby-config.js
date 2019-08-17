require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `ZEIW`,
    siteTitleAlt: `ZEIW`,
    siteHeadline: `ZEIW`,
    siteUrl: `https://zeiw.me`,
    siteDescription: `Open source community-based game 🏓`,
    siteLanguage: `en`,
    siteImage: `/img/cover.jpg`,
    author: `@zeiwhq`,
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
        short_name: `ZEIW`,
        description: `Open source community-based game 🏓`,
        start_url: `/`,
        background_color: `#0066ff`,
        theme_color: `#ff9900`,
        display: `standalone`,
        icons: [
          {
            src: `/favicon/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicon/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
