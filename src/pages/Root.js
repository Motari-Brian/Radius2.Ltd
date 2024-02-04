import React from 'react'
import NavigationBar from '../components/NavigationBar'
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
        <NavigationBar/>
        <Outlet />
    </div>
  )
}

export default Root