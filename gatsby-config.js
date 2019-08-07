module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {}
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': [
            'Strict-Transport-Security: max-age=31536000; includeSubDomains; preload',
            "Content-Security-Policy: default-src 'self'; script-src 'self'; object-src 'none'; base-uri 'none'; style-src 'self'; img-src 'self' https://res.cloudinary.com;",
            'Cache-Control: public, max-age=15, must-revalidate',
            "Feature-Policy: accelerometer 'none'; ambient-light-sensor 'none'; autoplay 'self'; camera 'none'; encrypted-media 'none'; fullscreen 'self'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; midi 'none'; payment 'none'; picture-in-picture *; speaker 'none'; sync-xhr 'none'; usb 'none'; vr 'none'"
          ]
        }
      }
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
