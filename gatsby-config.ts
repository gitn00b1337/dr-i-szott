import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `drszott`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    // {
    //   resolve: 'gatsby-source-contentful',
    //   options: {
    //     "accessToken": "SoVlVlDQpCctjxCavbnDbO7pBfxEP7P5-FxMcz_4kRk",
    //     "spaceId": "3ytm6tmz7vvt"
    //   }
    // },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png",
      }
    }, 
    "gatsby-plugin-mdx", 
    'gatsby-plugin-fontawesome-css',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "images",
        path: path.join(__dirname, `src`, `images`),
      },
      __key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {number} [portalZIndex=undefined]
         * The z-index to apply to all portal nodes. This is useful
         * if your app uses a lot z-index to position elements.
         */
        portalZIndex: undefined,
      },
    },
  ]
};

export default config;
