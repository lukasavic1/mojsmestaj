import { isLocale, defaultLocale, type Locale } from "../../lib/i18n-config";
import { getDictionary } from "../../lib/dictionaries";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Pain from "../../components/Pain";
import ExampleSite from "../../components/ExampleSite";
import Calculator from "../../components/Calculator";
import Solution from "../../components/Solution";
import DoneForYou from "../../components/DoneForYou";
import Offer from "../../components/Offer";
import Guarantee from "../../components/Guarantee";
import TemplatesSection from "../../components/TemplatesSection";
import Pricing from "../../components/Pricing";
import Faq from "../../components/Faq";
import Testimonials from "../../components/Testimonials";
import FinalCta from "../../components/FinalCta";
import Footer from "../../components/Footer";

export default async function LocalePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Nav dict={dict} locale={locale} />
      <main>
        {/* Order follows the sales argument: problem, solution, who does what,
            what you get, proof, guarantee, price, objections, contact. */}
        <Hero dict={dict} />
        <Pain dict={dict} />
        <Calculator dict={dict} />
        <Solution dict={dict} />
        <DoneForYou dict={dict} />
        <Offer dict={dict} />
        <ExampleSite dict={dict} />
        <TemplatesSection dict={dict} />
        <Testimonials dict={dict} />
        <Guarantee dict={dict} />
        <Pricing dict={dict} />
        <Faq dict={dict} />
        <FinalCta dict={dict} />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
