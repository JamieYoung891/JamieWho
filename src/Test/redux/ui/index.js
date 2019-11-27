import { combineReducers } from 'redux'

import loader from './loader'
import nav from './nav'
import content from './content'
import contentItem from './contentItem'
import project from './project'
import skill from './skill'

export default combineReducers({ loader, nav, content, contentItem, project, skill })