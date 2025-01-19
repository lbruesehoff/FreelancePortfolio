"use client";
import { Provider } from "react-redux";
import NavBar from "./_components/nav-bar/nav-bar";
import store from "./_store/store-config";
import Hero from "./_components/hero/hero";
import Footer from "./_components/footer/footer";
import Feature from "./_components/feature/feature";
import Services from "./_components/services/services";
import Contact from "./_components/contact/contact";

export default function Home() {
  return (
    <div>
      <Provider store={store}>
        <NavBar />
        <Hero />
        <Feature />
        <Services />
        <Contact />
        <Footer />
      </Provider>
    </div>
  );
}
