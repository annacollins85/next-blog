import React from 'react'
import { PropTypes } from 'prop-types'

import { HomeHeroContainer } from './styled-components'

const HomeHero = ({ intro, image }) => (
  <HomeHeroContainer>
    <div>HOLA</div>
    {/* <img src={image.url}></img> */}
  </HomeHeroContainer>
)

HomeHero.propTypes = {
  intro: PropTypes.string.isRequired,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
}

export default HomeHero
