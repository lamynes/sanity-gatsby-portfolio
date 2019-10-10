export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d9f6055172290ebcd6033a0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5vhwivps',
                  apiId: '56eafe8f-c1c0-4d8a-a314-9950db0178d5'
                },
                {
                  buildHookId: '5d9f60561722900b56603392',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-h1gsq864',
                  apiId: '19620e4a-e6ef-44e3-940e-c626b8ad7cfe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lamynes/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-h1gsq864.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
