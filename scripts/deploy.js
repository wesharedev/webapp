const { execSync } = require('child_process')
const deploymentConfig = require('../src/config/deployment.json')

const { s3Region, s3Path, cloudFrontDistId } = deploymentConfig[process.env.ENV]

const run = async (command) => {
  console.log(command)
  const stdout = execSync(command)
  console.log(stdout.toString())
}

const uploadS3 = async () => {
  await run (`aws s3 sync dist/ s3://${s3Path} --region ${s3Region}`)
}

const invalidateCache = async () => {
  await run(`aws cloudfront create-invalidation --distribution-id ${cloudFrontDistId} --paths "/index.html"`)
}

// Build and deploy the app to Firebase

async function deploy() {
  await uploadS3()
  await invalidateCache()
}

deploy().then(() => console.log('Deploy success!'))
