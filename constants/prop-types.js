import PropTypes from 'prop-types'

export const NODE_PROP_TYPES = PropTypes.shape({
  content: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  data: PropTypes.object,
  marks: PropTypes.array,
  nodeType: PropTypes.string,
  value: PropTypes.string,
})

export const ARTICLE_HERO_PROP_TYPES = {
  authorName: PropTypes.string.isRequired,
  authorSlug: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  categorySlug: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  image: PropTypes.string,
  mobileImage: PropTypes.string,
  readTime: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export const AUDIO_PROP_TYPES = PropTypes.shape({
  url: PropTypes.string,
  title: PropTypes.string,
})

export const IMAGE_PROP_TYPES = PropTypes.shape({
  url: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
})

export const QUOTE_CONTENT_PROP_TYPES = {
  author: PropTypes.string,
  position: PropTypes.string,
  avatar: IMAGE_PROP_TYPES,
  text: PropTypes.string,
  audio: AUDIO_PROP_TYPES,
  tweetable: PropTypes.bool,
  hashtags: PropTypes.arrayOf(PropTypes.string),
}

export const QUOTE_PROP_TYPES = {
  content: PropTypes.shape(QUOTE_CONTENT_PROP_TYPES),
  router: PropTypes.object,
  color: PropTypes.string,
}

export const HIGHLIGHTED_LINK_PROPTYPES = {
  color: PropTypes.string.isRequired,
  content: NODE_PROP_TYPES,
}

export const DROP_CAP_PROPTYPES = {
  color: PropTypes.string.isRequired,
  content: NODE_PROP_TYPES,
}

export const FULL_WIDTH_IMAGE_PROPTYPES = {
  content: PropTypes.shape({
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string,
    }),
  }),
}

export const CTA_CONTENT_PROP_TYPES = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
}

export const CTA_PROP_TYPES = {
  color: PropTypes.string.isRequired,
  content: PropTypes.shape(CTA_CONTENT_PROP_TYPES),
}

export const RAW_HTML_PROP_TYPES = {
  content: PropTypes.shape({
    name: PropTypes.string,
    html: PropTypes.string.isRequired,
  }),
}

export const VIDEO_PROP_TYPES = {
  content: PropTypes.shape({
    title: PropTypes.string,
    wistiaVideoId: PropTypes.string,
    youtubeVideoId: PropTypes.string,
  }),
}

export const TYPEFORM_PROP_TYPES = {
  content: PropTypes.shape({
    url: PropTypes.string.isRequired,
    isChatbot: PropTypes.bool,
  }),
}

export const RICH_TEXT_PROP_TYPES = PropTypes.shape({
  blocks: PropTypes.arrayOf(
    PropTypes.oneOfType([
      NODE_PROP_TYPES,
      PropTypes.shape(QUOTE_PROP_TYPES),
      PropTypes.shape(HIGHLIGHTED_LINK_PROPTYPES),
      PropTypes.shape(CTA_PROP_TYPES),
      PropTypes.shape(RAW_HTML_PROP_TYPES),
      PropTypes.shape(DROP_CAP_PROPTYPES),
      PropTypes.shape(TYPEFORM_PROP_TYPES),
      PropTypes.shape(FULL_WIDTH_IMAGE_PROPTYPES),
      PropTypes.shape(VIDEO_PROP_TYPES),
      PropTypes.object, // TODO: instead of PropTypes.object we should create a shape for each block type and put it into the array
    ])
  ),
})

export const AUTHOR_PROP_TYPES = PropTypes.shape({
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bio: RICH_TEXT_PROP_TYPES,
})

export const CATEGORY_PROP_TYPES = PropTypes.shape({
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
})

export const RELATED_ARTICLE_PROP_TYPES = {
  author: PropTypes.string.isRequired,
  image: PropTypes.string,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
}

export const HIGHLIGHTS_PAGE_SECTION_PROP_TYPES = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      category: CATEGORY_PROP_TYPES,
      author: AUTHOR_PROP_TYPES,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      mainImage: IMAGE_PROP_TYPES,
      readTime: PropTypes.shape({
        text: PropTypes.string.isRequired,
      }),
    })
  ),
}
