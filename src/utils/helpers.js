// Rem Converter 16px = 1rem
const getRems = pixelWidth => {
  const baseSize = 16
  return pixelWidth / baseSize
}

export { getRems }
