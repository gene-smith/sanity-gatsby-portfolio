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
                  buildHookId: '5cdda0a148792dd0d00c9c39',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-9x5j6ku7',
                  apiId: '1b16c396-93ff-46fb-ac92-427db4428920'
                },
                {
                  buildHookId: '5cdda0a1346065877bde45c4',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-wsie8ura',
                  apiId: '9b0a88ff-df8e-40d6-bfca-6f8cb38550df'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gene-smith/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-wsie8ura.netlify.com', category: 'apps'}
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
