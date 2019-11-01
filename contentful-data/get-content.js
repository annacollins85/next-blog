const fs = require('fs')

const contentfulClient = require('contentful')

const modelsDefinition = require('./models-definition')

require('dotenv').config()

const SPACE = process.env.CONTENTFUL_SPACE_ID
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN

const client = contentfulClient.createClient({
  space: SPACE,
  accessToken: TOKEN,
})

const contentTypes = Object.keys(modelsDefinition)

const getContent = contentType => {
  const { contentfulKey, model: Model } = modelsDefinition[contentType]
  client
    .getEntries({ content_type: contentfulKey, include: 10 })
    .then(entries => (entries.total ? entries.items : []))
    .then(entries => {
      const fileName = `${__dirname}/.data-${contentType.toLowerCase()}.json`
      return new Promise((resolve, reject) => {
        const modeledEntries = entries.map(entry => {
          return new Model(entry).toJSON()
        })
        fs.writeFile(fileName, JSON.stringify(modeledEntries, null, 2), err => {
          if (err) reject(err)
          resolve(err)
        })
      })
    })
    .catch(error => console.log({ error }))
}

Promise.all([contentTypes.map(contentType => getContent(contentType))])
