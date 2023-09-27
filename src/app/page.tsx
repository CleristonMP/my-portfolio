import 'bootstrap/dist/css/bootstrap.css';
import Header from '@/components/Header';
import Presentation from '@/components/Presentation';
import About from '@/components/About';
import Tech from '@/components/Tech';
import Course from '@/components/Course';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <About />
        <Tech />
        <Course />
        <Portfolio />
        <Footer />
      </main>
    </>
  );
}
