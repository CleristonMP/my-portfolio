import About from '@/components/About';
import Header from '@/components/Header';
import Presentation from '@/components/Presentation';
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <About />
      </main>
    </>
  );
}
