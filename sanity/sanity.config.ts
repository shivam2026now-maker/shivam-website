import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {projectSchemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'shivam-website-studio',
  title: 'Shivam Website Studio',
  projectId: '2mcdfmo7',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: projectSchemaTypes,
  },
})
