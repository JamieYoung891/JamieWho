export const indicateNav = (indicatorClassName, contentMode) => {
  if (contentMode === ("portfolio" || "contacts")) return



  const navSubContents = document.getElementsByClassName("nav-sub-contents")[0];

  if (navSubContents.childElementCount > 0) {
    const indicatorElms = navSubContents.children,
      triggerElms = document.getElementsByClassName("jamie-who-content")[0].children;

    for (let i = 0; i < indicatorElms.length; i++) {
      const sectRect = () => { return triggerElms[i].getBoundingClientRect() };

      if (
        contentMode !== "portfolio" &&
        sectRect().top <= window.innerHeight / 5 &&
        sectRect().bottom > window.innerHeight / 5
      ) {
        if (!(indicatorElms[i].classList.contains(indicatorClassName)))
          indicatorElms[i].classList.add(indicatorClassName)
      } else if (contentMode !== "portfolio") {
        if ((indicatorElms[i].classList.contains(indicatorClassName)))
          indicatorElms[i].classList.remove(indicatorClassName)
      }
    }
  }
}