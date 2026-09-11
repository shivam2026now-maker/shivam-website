import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {articleSchemaTypes} from './schemaTypes'
import {structure} from './structure'

export default defineConfig({
  name: 'shivam-website-studio',
  title: 'Shivam Website Studio',
  projectId: '2mcdfmo7',
  dataset: 'production',
  plugins: [
    structureTool({structure}),
    visionTool(),
  ],
  schema: {
    types: articleSchemaTypes,
  },
})
