// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Iyanuoluwa Ajao | Software Engineer',
  siteDescription: 'Iyanuoluwa uses code to solve real world problems. He knows how to know things',
  siteUrl: 'https://iyanuashiri.me',
  icon: {
    favicon: "./src/favicon.png",
  },
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Documentation', // Required
        baseDir: './docs', // Where .md files are located
        pathPrefix: '/docs', // Add route prefix. Optional
        template: './src/templates/Documentation.vue', // Optional
        plugins: [
          ['gridsome-plugin-remark-shiki', {theme: 'Material-Theme-Palenight', skipInline: true}]
        ],
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Iyanuoluwa Ajao',
          description: 'Iyanuoluwa uses code to solve real world problems. He knows how to know things',
          feed_url: 'https://iyanuashiri.me/rss.xml',
          site_url: 'https://iyanuashiri.me/'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://iyanuashiri.me' + node.path,
          author: 'Iyanuoluwa Ajao',
          date: node.date
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000, // default
        exclude: ["/exclude-me"],
        config: {
          "/*": {
            changefreq: "weekly",
            priority: 0.5,
          }
        },
      },
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-130170274-1",
      },
    },
  ],
  templates: {
    Tag: '/tag/:id'
  },
  transformers: {
    remark: {
      plugins: [
        ['gridsome-plugin-remark-shiki', {theme: 'Material-Theme-Palenight', skipInline: true}]
      ],
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
}