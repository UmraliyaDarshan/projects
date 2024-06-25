import React from 'react'
import {Link, Outlet} from 'react-router-dom'
function A() {
  return (
    <div>A
        <Link to="/a/b" preventScrollReset={true}>B</Link>
        <Link to="/a/c">C</Link>
        <Outlet/>
    </div>
  )
}

export default A