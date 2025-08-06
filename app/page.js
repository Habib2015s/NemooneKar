'use client';

import MainBox from './MainBox';
import Text from './Text';
import FooterMenu from './FooterMenu';
import Menu from './Menu';
export default function Page() {
  return (
    <div>
      {/* Navbar */}
      <Menu/>

      {/* بقیه صفحه */}
      <div className="pt-32">
        <MainBox />
        <Text />
        <FooterMenu />
      </div>
    </div>
  );
}
