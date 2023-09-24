const path = require('path')

const fs = require('fs-extra')

export default async ({ args }) => {
  const sourcePath = path.resolve(__dirname, '../api/src/lib/common')
  const destPath = path.resolve(__dirname, '../web/src/lib/common')

  try {
    if (fs.existsSync(sourcePath) && fs.lstatSync(sourcePath).isDirectory()) {
      fs.copySync(sourcePath, destPath)

      console.log(`Dossier copié depuis ${sourcePath} vers ${destPath}`)
    } else {
      console.error(
        `Le dossier source ${sourcePath} n'existe pas ou n'est pas un dossier.`
      )
    }
  } catch (error) {
    console.error(
      `Une erreur s'est produite lors de la copie : ${error.message}`
    )
  }
}
