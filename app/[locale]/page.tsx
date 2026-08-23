import { isLocale, defaultLocale, type Locale } from "../../lib/i18n-config";
import { getDictionary } from "../../lib/dictionaries";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Pain from "../../components/Pain";
import ExampleSite from "../../components/ExampleSite";
import Calculator from "../../components/Calculator";
import Steps from "../../components/Steps";
import Value from "../../components/Value";
import TemplatesSection from "../../components/TemplatesSection";
import Pricing from "../../components/Pricing";
import Faq from "../../components/Faq";
import Trust from "../../components/Trust";
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
        <Hero dict={dict} />
        <Pain dict={dict} />
        <ExampleSite dict={dict} />
        <Calculator dict={dict} />
        <Steps dict={dict} />
        <Value dict={dict} />
        <TemplatesSection dict={dict} />
        <Pricing dict={dict} />
        <Faq dict={dict} />
        <Trust dict={dict} />
        <Testimonials dict={dict} />
        <FinalCta dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
