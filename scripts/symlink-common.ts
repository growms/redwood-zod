const fs = require('fs')
const path = require('path')

export default async ({ args }) => {
  const sourcePath = path.resolve(__dirname, '../api/src/lib/common')
  const destPath = path.resolve(__dirname, '../web/src/lib/common')

  // Vérifier si le dossier source existe
  if (fs.existsSync(sourcePath) && fs.lstatSync(sourcePath).isDirectory()) {
    // Créer un lien symbolique
    fs.symlinkSync(sourcePath, destPath, 'dir')
    console.log(`Symlink créé depuis ${sourcePath} vers ${destPath}`)
  } else {
    console.error(
      `Le dossier source ${sourcePath} n'existe pas ou n'est pas un dossier.`
    )
  }
}
