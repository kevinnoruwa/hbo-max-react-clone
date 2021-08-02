import Head from 'next/head'

import MainLayout from '../componets/layouts/mainLayout'
import FeaturedMedia from "../componets/ui/featured/featuredMedia"
import ForYouList from "../componets/ui/for-you-list/forYouList"
import JustAdded from "../componets/ui/justAdded/justAdded"
import PosterView from "../componets/ui/poster-view/posterView"
import CastInfo from '../componets/ui/CastInfo/castInfo'

export default function MovieView() {
  return (
      <MainLayout>
      <FeaturedMedia/>
         <PosterView/>
           <CastInfo/>

      </MainLayout>
     
   

  )
}
