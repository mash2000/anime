const sidebar = () => {
  const sidebarBlock = new StickySidebar('.product__sidebar', {
    topSpacing: 30,
    bottomSpacing: 30,
    containerSelector: '.container',
    innerWrapperSelector: '.product__sidebar__view',
    resizeSensor: true,
    stickyClass: 'is-affixed',
    minWidth: 991,
  })
}

sidebar()