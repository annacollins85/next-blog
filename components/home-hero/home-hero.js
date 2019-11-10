import React from 'react'
import { PropTypes } from 'prop-types'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'

import { IMAGE_PROP_TYPES } from '../../constants/prop-types'

import {
  HomeHeroBackground,
  ContentContainer,
  Avatar,
  IntroHeading,
  ScrollArrowContainer,
  ScrollArrow,
} from './styled-components'

const HomeHero = ({ intro, mainImage }) => (
  <HomeHeroBackground>
    <div />
    <ContentContainer>
      <Avatar alt={mainImage.title} src={mainImage.url}></Avatar>
      <IntroHeading>
        <Typewriter
          options={{
            strings: [intro],
            autoStart: true,
            loop: true,
          }}
        />
      </IntroHeading>
    </ContentContainer>
    <ScrollArrowContainer>
      <Link to="blogPostsSection">
        <ScrollArrow>&#8595;</ScrollArrow>
      </Link>
    </ScrollArrowContainer>
  </HomeHeroBackground>
)

HomeHero.propTypes = {
  intro: PropTypes.string.isRequired,
  mainImage: IMAGE_PROP_TYPES,
}

export default HomeHero
