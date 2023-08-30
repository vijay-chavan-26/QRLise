import React from 'react'
import TopNavbar from '../components/TopNavbar'
import HomeBannerSwiper from '../components/home/HomeBannerSwiper'
import HomeCategorySwiper from '../components/home/HomeCategorySwiper'
import HomeSearchField from '../components/home/HomeSearchField'
import HomeFoodCards from '../components/home/HomeFoodCards'
import CategoryDropdown from '../components/home/CategoryDropdown'
import HomeLinks from '../components/home/HomeLinks'

const Home = () => {
  return (
    <div className='mx-5 py-5'>
        <TopNavbar />
        <HomeBannerSwiper />
        <HomeCategorySwiper />
        <HomeSearchField />
        <HomeFoodCards />
        <HomeLinks />
        <CategoryDropdown />
        
    </div>
  )
}

export default Home