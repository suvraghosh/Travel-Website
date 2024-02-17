import React from 'react'

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string
}

const CampSite = ({backgroundImage, title, subtitle, peopleJoined}: CampProps) => {
  return (
    <div className={`bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl h-full w-full min-w-[1100px] ${backgroundImage}`}>
      Camp Site
    </div>
   )
} 


function Camp() {
  return (
    <section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <CampSite 
          backgroundImage="bg-bg-img-1"
          title="Camp Site"
          subtitle="Camp Site" 
          peopleJoined = "70+ Joined"
        />
        <CampSite 
          backgroundImage="bg-bg-img-2"
          title="Camp Site"
          subtitle="Camp Site" 
          peopleJoined = "70+ Joined"
        />
      </div>
    </section>
  )
}

export default Camp