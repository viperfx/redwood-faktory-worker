const faktory = require('faktory-worker')

faktory.register('ResizeImage', async () => {
  console.log('run ResizeImage')
})

export default async ({ args }) => {
  await faktory.work().catch((error) => {
    console.error(error)
    process.exit(1)
  })
}
