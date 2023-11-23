import React from 'react';
import RootLayout from '../components/RootLayout.tsx';
import MainLayout from '../components/MainLayout.tsx';

function AppMainPage() {
  return (
    <RootLayout>
      <MainLayout>
        <h2>Welcome to the Main Page</h2>
        <p>This is the content of your main page.</p>
      </MainLayout>
    </RootLayout>
  );
}

export default AppMainPage;
