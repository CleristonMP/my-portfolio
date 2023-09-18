import 'bootstrap/dist/css/bootstrap.css';
import Header from '@/components/Header';
import Presentation from '@/components/Presentation';
import About from '@/components/About';
import Tech from '@/components/Tech';
import Feature from '@/components/Feature';
import Portfolio from '@/components/Portfolio';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <About />
        <Tech />
        <Feature />
        <Portfolio />
      </main>
    </>
  );
}
