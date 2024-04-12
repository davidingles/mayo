export function changeTheme() {
  const htmlElement = document.querySelector('html')
  // Verificar el estilo actual y alternar entre 'dark' y 'light'
  if (htmlElement.style.colorScheme === 'dark') {
    htmlElement.style.colorScheme = 'light'
  } else {
    htmlElement.style.colorScheme = 'dark'
  }
}
