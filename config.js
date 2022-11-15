const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://lordachoo.com',
    gaTrackingId: 'G-RMEEEJVXW9',
    trailingSlash: false,
  },
  header: {
    logo: 'https://firebasestorage.googleapis.com/v0/b/lordachoo-c2966.appspot.com/o/images%2F1x1.svg?alt=media&token=2868a92f-c4a4-4092-a335-9bff9280a66e',
    logoLink: '/',
    title:
      "<a href='/'>LordAchoo.com</A>",
    githubUrl: 'https://github.com/lordachoo/lordachoo.com-gatsby-gitbook.git',
    helpUrl: '',
    tweetText: '',
    social: `<!--<li>
		    <a href="https://twitter.com/hasurahq" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discordapp.com/invite/hasura" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>-->`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/resume', 
      '/projects',
    ],
    collapsedNav: [
      '/projects',
    ],
    links: [{ text: 'LinkedIn Profile', link: 'https://www.linkedin.com/in/anelson1/' }],
    frontLine: false,
    ignoreIndex: true,
    title:
      "LordAchoo's Sandbox",
  },
  siteMetadata: {
    title: 'Lordachoo.com - Andrew Nelson',
    description: 'Lordachoo.com - Andrew Nelson\'s website site (Gatsby/MDX)',
    ogImage: null,
    docsLocation: 'https://github.com/lordachoo/lordachoo.com-gatsby-gitbook/blob/main/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: true, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
