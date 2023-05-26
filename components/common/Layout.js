import { Header } from './Header';

export const Layout = ({ navigation, children }) => {
  return (
    <div>
      <Header navigation={navigation} />
      <main>{children}</main>
    </div>
  );
};
