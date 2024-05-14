import PageContainer from '@/components/pages/containers/pageContainer/PageContainer';
import NotFound from '@/components/pages/errors/notfound/NotFound';
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title:"Pagina não encontrada",
};
const NotFoundPage = () => {
  return (
    <PageContainer>
      <NotFound />
    </PageContainer>
  )
}

export default NotFoundPage
