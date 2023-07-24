import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SidebarWithHeader from './Components/SidebarWithHeader';
import LargeWithAppLinksAndSocial from './Components/Footer';
import FAQ from './Components/FAQ';
import TermsOfService from './Components/TermsOfService';
import PrivacyPolicy from './Components/PrivacyPolicy';
import Support from './Components/Support';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const router = (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/FAQ/' element={<FAQ />} />
      <Route path='/TOS/' element={<TermsOfService />} />
      <Route path='/privacy-policy/' element={<PrivacyPolicy />} />
      <Route path='/support/' element={<Support />} />
    </Routes>
  </Router>
);
const theme = extendTheme({
  styles: {
    global: {
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
});
root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <SidebarWithHeader>
        {router}
        <Box pos='relative'>
          <LargeWithAppLinksAndSocial></LargeWithAppLinksAndSocial>
        </Box>
      </SidebarWithHeader>
    </ChakraProvider>
  </StrictMode>,
);
