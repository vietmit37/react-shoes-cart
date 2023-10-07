import { PropsWithChildren } from 'react';

import Header from '@components/Header';

type IProps = {
}

function MainLayout({ children }: PropsWithChildren<IProps>) {
  return (
    <>
      <Header />
      <div className="mainContainer">
        {children}
      </div>
    </>
  );
}

export default MainLayout;
