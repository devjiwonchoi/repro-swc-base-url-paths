import { transform } from '@swc/core'

const input = `
import { bar } from 'src/bar'

console.log(bar)
`

async function main() {
  const { code } = await transform(input, {
    jsc: {
      baseUrl: process.cwd(),
    },
  })

  console.log(code)
}

main()
