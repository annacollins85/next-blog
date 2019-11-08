import React from 'react'
import Link from 'next/link'

import { HIGHLIGHTS_PAGE_SECTION_PROP_TYPES } from '../../constants/prop-types'
import lightenHexColor from '../../utils/lighten-hex-color'
import ReadTimeWithAuthor from '../read-time/read-time-with-author'

import {
  HighlightsHeroContainer,
  ImageWrap,
  HighlightsHeroImage,
  InfoWrap,
  HeroArticleInfo,
  ArticleTitle,
  ArticleSubtitle,
  CategoryLink,
} from './styled-components'

const HighlightsHero = ({ articles }) => {
  const article = articles[0]

  const {
    title,
    subtitle,
    slug,
    mainImage,
    category,
    author,
    readTime,
  } = article

  const heroBackgroundColor = lightenHexColor(category.color, 0.1)

  return (
    <HighlightsHeroContainer color={heroBackgroundColor}>
      <InfoWrap>
        <HeroArticleInfo>
          <Link href={`/${category.slug}`}>
            <CategoryLink color={category.color}>{category.name}</CategoryLink>
          </Link>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleSubtitle>{subtitle}</ArticleSubtitle>
          <ReadTimeWithAuthor
            author={author.name}
            authorSlug={author.slug}
            readTime={readTime.text}
          />
        </HeroArticleInfo>
      </InfoWrap>
      <ImageWrap>
        <Link href={`/${category.slug}/${slug}/`}>
          <HighlightsHeroImage image={mainImage.url} />
        </Link>
      </ImageWrap>
    </HighlightsHeroContainer>
  )
}

HighlightsHero.propTypes = HIGHLIGHTS_PAGE_SECTION_PROP_TYPES

export default HighlightsHero
