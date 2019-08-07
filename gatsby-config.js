module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {}
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {}
    }
  ],
  siteMetadata: {
    title: `ZEIW`,
    author: `ZEIW`,
    description: `Open source community-based game 🏓`,
    social: [
      {
        name: `terms`,
        url: `https://zeiw.me/terms`
      },
      {
        name: `privacy`,
        url: `https://zeiw.me/privacy`
      },
      {
        name: `security`,
        url: `https://zeiw.me/security`
      },
      {
        name: `status`,
        url: `https://status.zeiw.me`
      }
    ]
  }
}
