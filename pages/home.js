import Head from 'next/head'

import MainLayout from '../componets/layouts/mainLayout'
import FeaturedMedia from "../componets/ui/featured/featuredMedia"
import ForYouList from "../componets/ui/for-you-list/forYouList"
import JustAdded from "../componets/ui/justAdded/justAdded"
import PosterView from "../componets/ui/poster-view/posterView"

export default function HomeView() {
  return (
      <MainLayout>
      <FeaturedMedia/>
         <ForYouList/>
         <JustAdded/>
         <PosterView/>
       

        
        <div>
            
        </div>
      </MainLayout>
     
   

  )
}
