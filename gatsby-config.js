module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
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
        url: `https://github.com/ZEIW/ZEIW/blob/master/TERMS.md`
      },
      {
        name: `privacy`,
        url: `https://github.com/ZEIW/ZEIW/blob/master/PRIVACY.md`
      },
      {
        name: `security`,
        url: `https://github.com/ZEIW/ZEIW/security/policy`
      },
      {
        name: `status`,
        url: `https://status.zeiw.me`
      }
    ]
  }
}
