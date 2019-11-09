import React from 'react'
import PropTypes from 'prop-types'

import ReadTime from '../read-time'

import {
  BlogPostHeroContainer,
  ImageWrap,
  BlogPostHeroImage,
  InfoWrap,
  BlogPostHeroInfo,
  BlogPostTitle,
  BlogPostSubtitle,
} from './styled-components'

const BlogPostHero = ({ title, subtitle, image, readTime, releaseDate }) =>
  console.log({ image }) || (
    <BlogPostHeroContainer>
      <InfoWrap>
        <BlogPostHeroInfo>
          <BlogPostTitle>{title}</BlogPostTitle>
          <BlogPostSubtitle>{subtitle}</BlogPostSubtitle>
          <ReadTime readTime={readTime} />
        </BlogPostHeroInfo>
      </InfoWrap>
      <ImageWrap>
        <BlogPostHeroImage image={image.url} alt={image.title} />
      </ImageWrap>
    </BlogPostHeroContainer>
  )

BlogPostHero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  readTime: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
}

export default BlogPostHero
