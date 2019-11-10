import React from 'react'
import PropTypes from 'prop-types'

import { IMAGE_PROP_TYPES } from '../../constants/prop-types'

import ReadTime from '../read-time'

import {
  BlogPostHeroContainer,
  ImageWrap,
  BlogPostHeroImage,
  InfoWrap,
  BlogPostHeroInfo,
  BlogPostTitle,
  BlogPostSubtitle,
  ReleaseDate,
} from './styled-components'

const BlogPostHero = ({ title, subtitle, image, readTime, releaseDate }) => (
  <BlogPostHeroContainer>
    <InfoWrap>
      <BlogPostHeroInfo>
        <BlogPostTitle>{title}</BlogPostTitle>
        <BlogPostSubtitle>{subtitle}</BlogPostSubtitle>
        <ReleaseDate>{releaseDate}</ReleaseDate>
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
  image: IMAGE_PROP_TYPES.isRequired,
  readTime: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
}

export default BlogPostHero
