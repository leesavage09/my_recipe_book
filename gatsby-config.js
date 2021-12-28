if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: `.env.development`,
  });
}

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.myrecipebook.leesavage.co.uk",
    title: "My Recipe Book",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
       cssLoaderOptions: {
         esModule: false,
         modules: {
           namedExport: false,
         },
       },
     },
   },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
