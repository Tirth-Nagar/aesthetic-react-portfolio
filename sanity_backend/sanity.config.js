import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import achievements from './schemas/achievements'
import projects from './schemas/projects'
import technologies from './schemas/technologies'
import contact from './schemas/contact'
import journey from './schemas/journey'

export default defineConfig({
  name: 'default',
  title: 'aesthetic-react-portfolio',

  projectId: 'q80ganhp',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: [achievements, projects, technologies, contact, journey],
  },
})
