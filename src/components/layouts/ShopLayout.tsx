import Head from 'next/head';

import { Navbar } from '../ui/Navbar';
import { SideMenu } from '../ui/SideMenu';

interface Props {
  children: React.ReactNode;
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}

export const ShopLayout = ( { children, title, pageDescription, imageFullUrl }: Props ) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
        
        <meta name='description' content={ pageDescription } />

        <meta name='og:title' content={ title } />
        <meta name='og:description' content={ pageDescription } />

        {
          imageFullUrl && (
            <meta name='og:image' content={ imageFullUrl } />
          )
        }
        
      </Head>

      <nav>
        <Navbar />
      </nav>

      <SideMenu />
      
      <main style={{
        margin: '80px auto',
        padding: '10px 30px 0px 30px'
      }}>
        { children }
      </main>

      {/* Footer */}
      <footer>
        {/* TODO: Mi custom footer */}
      </footer>
    </>
  )
}
