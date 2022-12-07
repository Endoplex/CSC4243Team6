import { saveAs } from 'file-saver'

  const Index = () => {
    const downloadImage = () => {
      saveAs('', 'image.jpg') // Put your image url here.
    }

    return <Button onClick={downloadImage}>Download!</Button>
  }