import CMS from 'netlify-cms-app'

import IndexPage from './templates/IndexPage'

CMS.registerPreviewTemplate('index', IndexPage)
CMS.registerPreviewTemplate('posts', IndexPage)
CMS.registerPreviewTemplate('recipes', IndexPage)
