'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import LoadingBar from 'react-top-loading-bar'


const ProgressBar = () => {
   const pathname = usePathname()
   const searchParams = useSearchParams()
   const router = useRouter()
   const [progress, setProgress] = useState(0)

   // useEffect(() => {
   //    const url = `${pathname}?${searchParams}`
   //    console.log(url)
   //    // You can now use the current URL
   //    // ...
   // }, [pathname, searchParams])

   return (
      <LoadingBar
         color='#f11946'
         progress={progress}
         onLoaderFinished={() => setProgress(0)}
      />
   )
}

export default ProgressBar
