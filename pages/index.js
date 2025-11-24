import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>StartupsSimplified | Your AI Guided Startup Creator</title>
        <meta
          name="description"
          content="StartupsSimplified helps you go from idea to launch. Personalized idea generation, legal formation assistance, landing page creation, marketing and scaling tools."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
