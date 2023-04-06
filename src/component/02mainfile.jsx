import React from 'react'
import { Outlet } from 'react-router-dom'
import Head from './03header'

const Mainfile = () => {
  return (
    <>
          {/* <Head></Head> */}

          <Outlet>
              
          </Outlet>
          

    </>
  )
}

export default Mainfile
