require('dotenv').config()

const express = require('express')
const next = require('next')

const { contentfulService } = require('./contentful-service')

const dev = process.env.NODE_ENV !== 'production'

const port = process.env.PORT || 3000

const app = next({ dev })
const handle = app.getRequestHandler()

const contentfulWebhookHandle = async (req, res) => {
  // Validate that the webhook contains the required secret header
  if (
    req.header('webhook-verification') ===
    process.env.CONTENTFUL_PREVIEW_WEBHOOK_SECRET
  ) {
    await contentfulService.refreshPages()
    res.status(200)
    res.send()
  } else {
    res.status(500)
    res.send()
  }
}

app
  .prepare()
  .then(async () => {
    const server = express()

    // Allow content modifications in Contentful to reset preview server in Now
    // (used to test authoring changes)
    server.post('/webhooks/contentful', contentfulWebhookHandle)

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

    server.listen(port, err => {
      if (err) throw err
      console.log('> Ready on http://localhoport')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
