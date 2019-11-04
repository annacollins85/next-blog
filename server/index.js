require('dotenv').config()

const express = require('express')
const next = require('next')

const { contentfulService } = require('./contentful-service')

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(async () => {
    const server = express()

    server.get('/blog/:slug', async (req, res) => {
      const pageContent = await contentfulService.getPageContent({
        pageName: 'blogPost',
        slug: req.params.slug,
      })

      const actualPage = '/blog-post'
      const queryParams = { __pageContent: pageContent }

      return app.render(req, res, actualPage, queryParams)
    })

    server.get('/', async (req, res) => {
      const pageContent = await contentfulService.getPageContent()

      const actualPage = '/home-page'
      const queryParams = { __pageContent: pageContent }

      return app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
