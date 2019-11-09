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

const BlogPostHero = ({ title, subtitle, mainImage, readTime }) => (
  <BlogPostHeroContainer color={heroBackgroundColor}>
    <InfoWrap>
      <BlogPostHeroInfo>
        <BlogPostTitle>{title}</BlogPostTitle>
        <BlogPostSubtitle>{subtitle}</BlogPostSubtitle>
        <ReadTime readTime={readTime.text} />
      </BlogPostHeroInfo>
    </InfoWrap>
    <ImageWrap>
      <BlogPostHeroImage image={mainImage.url} />
    </ImageWrap>
  </BlogPostHeroContainer>
)

BlogPostHero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  mainImage: PropTypes.object.isRequired,
  readTime: PropTypes.object.isRequired,
}

export default BlogPostHero
