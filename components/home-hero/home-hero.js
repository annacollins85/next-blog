import React from 'react'
import { PropTypes } from 'prop-types'
import Typewriter from 'typewriter-effect'

import {
  HomeHeroBackground,
  ContentContainer,
  Avatar,
  IntroHeading,
} from './styled-components'

const HomeHero = ({ intro, mainImage }) => (
  <HomeHeroBackground>
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
  </HomeHeroBackground>
)

HomeHero.propTypes = {
  intro: PropTypes.string.isRequired,
  mainImage: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
}

export default HomeHero
