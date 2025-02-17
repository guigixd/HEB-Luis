import Navbar from '@/components/navbar/navbar'
import ListContext from '@/hooks/ListContext'
import AppBarHeader from '@/components/navbar/appBarHeader/appBarHeader'
import '@/styles/globals.css'
import { Poppins } from '@next/font/google'
import { useEffect, useState } from 'react'
import SearchContext from '@/hooks/SearchContext'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  const [lInfo, setLInfo] = useState({})
  const [sInfo, setSInfo] = useState("")

  return (
    <ListContext.Provider value={{listInfo: lInfo, setListInfo: setLInfo}}>
      <SearchContext.Provider value={{searchInfo: sInfo, setSearchInfo: setSInfo}}>
        <main className={poppins.className}>
          <AppBarHeader/>
          <Component {...pageProps} />
          <Navbar/>
        </main>
      </SearchContext.Provider>
    </ListContext.Provider>
  )
}
