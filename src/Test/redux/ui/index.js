import { combineReducers } from 'redux'

import loader from './loader'
import nav from './nav'
import progressIndicator from './progressIndicator'
import content from './content'
import project from './project'
import skill from './skill'

export default combineReducers({
  loader,
  nav,
  progressIndicator,
  content,
  project,
  skill
})