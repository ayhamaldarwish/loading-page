import { AboutUs, /* Contact, */ Hero, Services } from "../components/section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <AboutUs />
      <Services />
      {/* <Contact /> */}
    </main>
  );
}

