export const toggleNav = () => {
  const button = document.getElementsByClassName("jamie-who-nav")[0]
  if (button) button.classList.toggle("nav-show")
}