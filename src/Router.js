import React from "react";

function Editor() {
  return <div>Editor</div>
}

function Notes() {
  return <div>Notes</div>
}

function Present() {
  return <div>Present</div>
}

const routes = {
  '/editor': Editor,
  '/notes': Notes,
  '/present': Present,
}

function Router() {
  const { pathname } = window.location
  const Component = routes[pathname]
  console.log(pathname)

  return (
    <Component />
  );
}

export default Router
