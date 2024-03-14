'use client'

import { AppProgressBar } from 'next-nprogress-bar';

const ProgressBar = () => {
   return (
      <AppProgressBar
         height="2px"
         color="#38bdf8"
         options={{ showSpinner: false }}
         shallowRouting
      />
   )
}

export default ProgressBar
