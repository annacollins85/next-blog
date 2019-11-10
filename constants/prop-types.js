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

export const IMAGE_PROP_TYPES = PropTypes.shape({
  url: PropTypes.string,
  title: PropTypes.string,
})

export const DROP_CAP_PROPTYPES = {
  color: PropTypes.string.isRequired,
  content: NODE_PROP_TYPES,
}

export const RICH_TEXT_PROP_TYPES = PropTypes.shape({
  blocks: PropTypes.arrayOf(
    PropTypes.oneOfType([NODE_PROP_TYPES, PropTypes.shape(DROP_CAP_PROPTYPES)])
  ),
})
