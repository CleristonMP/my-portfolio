import About from '@/components/About';
import Header from '@/components/Header';
import Presentation from '@/components/Presentation';
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import Tech from '@/components/Tech';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <About />
        <Tech />
      </main>
    </>
  );
}
