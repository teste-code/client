import PageContainer from '@/components/pages/containers/pageContainer/PageContainer'
import Address from '@/components/pages/sections/about/Address'
import Contacts from '@/components/pages/sections/about/Contacts'
import React from 'react'

const page = () => {
  return (
    <PageContainer>
    <Contacts />
    <Address />
  </PageContainer>
  )
}

export default page
