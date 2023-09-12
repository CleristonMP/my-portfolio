import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import About from '@/components/About';
import Header from '@/components/Header';
import Presentation from '@/components/Presentation';
import Tech from '@/components/Tech';
import Feature from '@/components/Feature';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <About />
        <Tech />
        <Feature />
      </main>
    </>
  );
}
