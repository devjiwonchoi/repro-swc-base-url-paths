import { transform } from '@swc/core'

const input = `
import { foo } from '@/foo'
import { bar } from 'src/bar'

console.log(foo, bar)
`

async function main() {
  const { code } = await transform(input, {
    jsc: {
      baseUrl: process.cwd(),
      paths: {
        '@/*': ['./src/*'],
      },
    },
  })

  console.log(code)
}

main()
