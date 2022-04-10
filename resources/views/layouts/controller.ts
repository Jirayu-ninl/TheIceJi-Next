export default function Controller(pathname: string) {
  const showNav = pathname === '/' ? false : true
  const showFooter = pathname === '/' ? false : true

  const layout = { showFooter, showNav }
  return layout
}
