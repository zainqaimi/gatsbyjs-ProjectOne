import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Home/Hero"
import OurClient from "../components/Home/OurClient"
import Community from "../components/Home/Community"
import Unseen from "../components/Home/Unseen"
import Achievements from "../components/Home/Achievements"

const index = () => {
  return (
    <Layout>
      <Hero />
      <OurClient />
      <Community/>
      <Unseen/>
      <Achievements/>
    </Layout>
  )
}

export default index
