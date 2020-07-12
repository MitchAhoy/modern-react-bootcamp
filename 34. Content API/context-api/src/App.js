import React from 'react';
import NavBar from './NavBar'
import Form from './Form'
import PageContent from './PageContent'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <LanguageProvider>
          <NavBar />
          <Form />
        </LanguageProvider>
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
