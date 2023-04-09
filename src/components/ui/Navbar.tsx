import { useContext, useState } from 'react';

import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { AppBar, Badge, Box, Button, IconButton, Input, InputAdornment, Link, Toolbar, Typography } from '@mui/material';
import { ClearOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';

import { UiContext } from '@/context';

export const Navbar = () => {
  const { asPath, push } = useRouter();
  const { toggleSideMenu } = useContext( UiContext );
  
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const onSearchTerm = () => {
    if ( searchTerm.trim().length === 0 ) return;
    clearSearch();
    push(`/search/${ searchTerm }`);
  }
  
  const clearSearch = () => {
    setSearchTerm('');
    setIsSearchVisible(false);
  }
  
  return (
    <AppBar>
      <Toolbar>
        <NextLink href='/' passHref legacyBehavior>
          <Link display='flex' alignItems='center'>
            <Typography variant='h6'>Teslo |</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </Link>
        </NextLink>

        <Box flex={ 1 } />

        <Box sx={{ display: isSearchVisible ? 'none' : { xs: 'none', sm: 'flex' } }}>
          <NextLink href='/category/men' passHref legacyBehavior>
            <Link display='flex' alignItems='center'>
              <Button color={ asPath === '/category/men' ? 'primary' : 'info' }>Hombres</Button>
            </Link>
          </NextLink>

          <NextLink href='/category/women' passHref legacyBehavior>
            <Link display='flex' alignItems='center'>
              <Button color={ asPath === '/category/women' ? 'primary' : 'info' }>Mujeres</Button>
            </Link>
          </NextLink>

          <NextLink href='/category/kid' passHref legacyBehavior>
            <Link display='flex' alignItems='center'>
              <Button color={ asPath === '/category/kid' ? 'primary' : 'info' }>Niños</Button>
            </Link>
          </NextLink>
        </Box>
        
        <Box flex={ 1 } />

        {/* Pantallas grandes */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          {
            isSearchVisible
              ? (
                <Input
                  autoFocus
                  className='fadeIn'
                  type='text'
                  placeholder='Buscar...'
                  value={ searchTerm }
                  onChange={ (e) => setSearchTerm( e.target.value ) }
                  onKeyDown={ (e) => e.key === 'Enter' ? onSearchTerm() : null }
                  onBlur={ () => setIsSearchVisible(false) }
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton onClick={ () => setIsSearchVisible(false) }>
                        <ClearOutlined />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              )
              : (
                <IconButton
                  onClick={ () => setIsSearchVisible(true) }
                  className='fadeIn'
                >
                  <SearchOutlined />
                </IconButton>
              )
          }
        </Box>

        {/* Pantallas pequeñas */}
        <IconButton 
          sx={{ display: { xs: 'block', sm: 'none' } }}
          onClick={ toggleSideMenu }
        >
          <SearchOutlined />
        </IconButton>

        <NextLink href='/cart' passHref legacyBehavior>
          <Link>
            <IconButton>
              <Badge badgeContent={ 2 } color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>

        <Button onClick={ toggleSideMenu }>
          Menú
        </Button>
        
      </Toolbar>
    </AppBar>
  );
};
