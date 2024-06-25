import React from 'react'
import {Link, Outlet, useNavigation, useSearchParams} from 'react-router-dom'
function A() {
  const [searchparams,setsearchparams]=useSearchParams();
  // const navigation=useNavigation();
  // const submitbutton = () =>{
  //  const text=navigation.text==="submitting"?"Saving":navigation.text==="loading"?"saved":"go";
  //   return text
  // }
  return (
    <div>A

        <input type='text' value={searchparams} onChange={(e)=>setsearchparams(e.target.value)}/>
        {/* <button type='submit'>{submitbutton()}</button> */}
        <Link to="/a/123">A2</Link>
        <Link to="/a/b" preventScrollReset={true}>B</Link>
        <Link to="/a/c">C</Link>
        <Outlet/>
    </div>
  )
}

export default A