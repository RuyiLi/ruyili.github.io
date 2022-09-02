import lume from 'lume/mod.ts'
import sass from 'lume/plugins/sass.ts'
import prism from 'lume/plugins/prism.ts'
import metas from 'lume/plugins/metas.ts'

const site = lume({
  src: './src',
})

site.copy('img')
site.copy('static')

site.use(sass())
site.use(prism())
site.use(metas())

export default site
