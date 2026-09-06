import type { Locale } from "./i18n-config";

export type PrivacyBlock = { p: string } | { list: string[] };
export type PrivacySection = { heading: string; blocks: PrivacyBlock[] };

export type PrivacyContent = {
  title: string;
  updatedLabel: string;
  updatedDate: string;
  intro: string;
  controllerHeading: string;
  controllerIntro: string;
  sections: PrivacySection[];
};

// Contact details are injected at render time from lib/links so they stay in
// one place. {email}, {phone} and {brand} placeholders are replaced there.
const sr: PrivacyContent = {
  title: "Politika privatnosti",
  updatedLabel: "Poslednje ažuriranje",
  updatedDate: "7. septembar 2026.",
  intro:
    "Ova Politika privatnosti objašnjava kako {brand} („mi”, „nas”, „naše”) prikuplja, koristi i štiti lične podatke posetilaca našeg sajta i osoba koje nas kontaktiraju putem WhatsApp-a, e-pošte, telefona i drugih kanala. Podatke obrađujemo u skladu sa Opštom uredbom o zaštiti podataka (GDPR) i Zakonom o zaštiti podataka o ličnosti Republike Srbije.",
  controllerHeading: "Rukovalac podacima",
  controllerIntro:
    "Za obradu vaših ličnih podataka odgovoran je rukovalac:",
  sections: [
    {
      heading: "1. Koje podatke prikupljamo",
      blocks: [
        { p: "U zavisnosti od toga kako komunicirate sa nama, možemo prikupljati sledeće podatke:" },
        {
          list: [
            "Kontakt podaci — ime, broj telefona, WhatsApp broj i e-mail adresa.",
            "Sadržaj komunikacije — poruke koje nam pošaljete putem WhatsApp-a, e-pošte, kontakt forme ili telefonom.",
            "Podaci o smeštaju — informacije, opisi i fotografije koje nam dostavite radi izrade i održavanja sajta.",
            "Tehnički podaci — IP adresa, tip uređaja i pregledača, kao i podaci prikupljeni putem kolačića i alata za analitiku.",
          ],
        },
      ],
    },
    {
      heading: "2. Svrhe i pravni osnov obrade",
      blocks: [
        { p: "Vaše podatke obrađujemo u sledeće svrhe i po sledećem pravnom osnovu (član 6. GDPR):" },
        {
          list: [
            "Odgovaranje na upite i komunikacija sa vama — na osnovu vašeg zahteva i naših legitimnih interesa.",
            "Izrada i održavanje sajta — radi izvršenja ugovora zaključenog sa vama.",
            "Slanje poruka i obaveštenja putem WhatsApp-a i e-pošte — na osnovu vaše saglasnosti i/ili izvršenja ugovora.",
            "Merenje uspešnosti oglasa i unapređenje sajta — na osnovu vaše saglasnosti (kolačići) i našeg legitimnog interesa.",
          ],
        },
      ],
    },
    {
      heading: "3. WhatsApp komunikacija",
      blocks: [
        {
          p: "Za komunikaciju sa korisnicima koristimo WhatsApp, uključujući WhatsApp Business platformu. Kada nam pišete putem WhatsApp-a ili kada vam mi šaljemo poruke (na primer obaveštenja o upitu ili rezervaciji, odgovore na pitanja i informacije o našim uslugama), obrađujemo vaš broj telefona, ime ili naziv profila i sadržaj poruka.",
        },
        {
          p: "Poruke šaljemo isključivo osobama koje su nas prethodno kontaktirale ili koje su dale saglasnost da ih kontaktiramo. Ne šaljemo neželjene (spam) poruke. U svakom trenutku možete zatražiti da prestanemo da vam šaljemo poruke tako što ćete nam odgovoriti sa „STOP” ili nas kontaktirati na navedenu e-mail adresu.",
        },
        {
          p: "WhatsApp je usluga kompanije Meta Platforms Ireland Ltd. Prilikom korišćenja WhatsApp-a vaši podaci se obrađuju i u skladu sa uslovima korišćenja i politikom privatnosti kompanije Meta. Sve podatke obrađujemo u skladu sa GDPR-om i samo u obimu koji je neophodan za pružanje naših usluga.",
        },
      ],
    },
    {
      heading: "4. Kolačići i analitika",
      blocks: [
        {
          p: "Naš sajt koristi kolačiće neophodne za osnovno funkcionisanje i, uz vašu saglasnost, kolačiće za merenje uspešnosti oglasa i analitiku (na primer Google Ads i Google Analytics). Saglasnost možete dati ili odbiti putem banera za kolačiće, a sajt radi potpuno isto i ako ih odbijete.",
        },
      ],
    },
    {
      heading: "5. Deljenje podataka i obrađivači",
      blocks: [
        { p: "Vaše podatke ne prodajemo trećim licima. Podatke možemo deliti sa pouzdanim pružaocima usluga (obrađivačima) koji nam pomažu u radu:" },
        {
          list: [
            "Meta Platforms (WhatsApp) — za razmenu poruka sa vama.",
            "Google — za analitiku i oglašavanje.",
            "Pružaoci hostinga i infrastrukture — za rad i bezbednost sajta.",
          ],
        },
        {
          p: "Ovi pružaoci obrađuju podatke isključivo po našim uputstvima i u skladu sa GDPR-om. Podaci mogu biti preneti van Evropskog ekonomskog prostora, uz odgovarajuće mere zaštite (na primer standardne ugovorne klauzule).",
        },
      ],
    },
    {
      heading: "6. Čuvanje podataka",
      blocks: [
        {
          p: "Podatke čuvamo samo onoliko koliko je potrebno za ispunjenje navedenih svrha ili koliko nalažu zakonske obaveze. Kada podaci više nisu potrebni, bezbedno ih brišemo ili anonimizujemo.",
        },
      ],
    },
    {
      heading: "7. Vaša prava",
      blocks: [
        { p: "U skladu sa GDPR-om, imate pravo na:" },
        {
          list: [
            "pristup svojim podacima i informacije o njihovoj obradi,",
            "ispravku netačnih i dopunu nepotpunih podataka,",
            "brisanje podataka („pravo na zaborav”),",
            "ograničenje obrade i prigovor na obradu,",
            "prenosivost podataka,",
            "povlačenje saglasnosti u svakom trenutku, bez uticaja na zakonitost prethodne obrade.",
          ],
        },
        {
          p: "Za ostvarivanje ovih prava kontaktirajte nas na {email}. Takođe imate pravo da podnesete pritužbu nadležnom organu za zaštitu podataka (u Srbiji: Poverenik za informacije od javnog značaja i zaštitu podataka o ličnosti).",
        },
      ],
    },
    {
      heading: "8. Bezbednost podataka",
      blocks: [
        {
          p: "Preduzimamo razumne tehničke i organizacione mere kako bismo zaštitili vaše podatke od neovlašćenog pristupa, gubitka, izmene ili zloupotrebe.",
        },
      ],
    },
    {
      heading: "9. Izmene ove politike",
      blocks: [
        {
          p: "Ovu Politiku privatnosti možemo povremeno ažurirati. Aktuelna verzija je uvek dostupna na ovoj stranici, uz naznačen datum poslednjeg ažuriranja.",
        },
      ],
    },
    {
      heading: "10. Kontakt",
      blocks: [
        {
          p: "Za sva pitanja u vezi sa privatnošću i obradom vaših podataka, pišite nam na {email} ili nas pozovite na {phone}.",
        },
      ],
    },
  ],
};

const en: PrivacyContent = {
  title: "Privacy Policy",
  updatedLabel: "Last updated",
  updatedDate: "September 7, 2026",
  intro:
    "This Privacy Policy explains how {brand} (“we”, “us”, “our”) collects, uses and protects the personal data of visitors to our website and of people who contact us via WhatsApp, email, phone and other channels. We process personal data in accordance with the General Data Protection Regulation (GDPR) and applicable data protection law.",
  controllerHeading: "Data controller",
  controllerIntro: "The controller responsible for processing your personal data is:",
  sections: [
    {
      heading: "1. What data we collect",
      blocks: [
        { p: "Depending on how you interact with us, we may collect the following data:" },
        {
          list: [
            "Contact data — name, phone number, WhatsApp number and email address.",
            "Communication content — messages you send us via WhatsApp, email, the contact form or by phone.",
            "Accommodation data — information, descriptions and photos you provide so we can build and maintain your website.",
            "Technical data — IP address, device and browser type, and data collected through cookies and analytics tools.",
          ],
        },
      ],
    },
    {
      heading: "2. Purposes and legal basis",
      blocks: [
        { p: "We process your data for the following purposes and on the following legal basis (Article 6 GDPR):" },
        {
          list: [
            "Responding to inquiries and communicating with you — based on your request and our legitimate interests.",
            "Building and maintaining your website — to perform our contract with you.",
            "Sending messages and notifications via WhatsApp and email — based on your consent and/or performance of the contract.",
            "Measuring ad performance and improving the website — based on your consent (cookies) and our legitimate interest.",
          ],
        },
      ],
    },
    {
      heading: "3. WhatsApp communication",
      blocks: [
        {
          p: "We use WhatsApp, including the WhatsApp Business platform, to communicate with users. When you message us on WhatsApp or when we send you messages (for example notifications about an inquiry or booking, answers to your questions and information about our services), we process your phone number, name or profile name, and the content of the messages.",
        },
        {
          p: "We only send messages to people who have contacted us first or who have given consent to be contacted. We do not send unsolicited (spam) messages. You can ask us to stop messaging you at any time by replying “STOP” or by contacting us at the email address below.",
        },
        {
          p: "WhatsApp is a service provided by Meta Platforms Ireland Ltd. When using WhatsApp, your data is also processed under Meta’s terms of service and privacy policy. We process all data in accordance with GDPR and only to the extent necessary to provide our services.",
        },
      ],
    },
    {
      heading: "4. Cookies and analytics",
      blocks: [
        {
          p: "Our website uses cookies necessary for basic functionality and, with your consent, cookies for measuring ad performance and analytics (for example Google Ads and Google Analytics). You can give or decline consent via the cookie banner, and the site works exactly the same if you decline.",
        },
      ],
    },
    {
      heading: "5. Data sharing and processors",
      blocks: [
        { p: "We do not sell your data to third parties. We may share data with trusted service providers (processors) who help us operate:" },
        {
          list: [
            "Meta Platforms (WhatsApp) — to exchange messages with you.",
            "Google — for analytics and advertising.",
            "Hosting and infrastructure providers — to run and secure the website.",
          ],
        },
        {
          p: "These providers process data only on our instructions and in accordance with GDPR. Data may be transferred outside the European Economic Area, subject to appropriate safeguards (for example standard contractual clauses).",
        },
      ],
    },
    {
      heading: "6. Data retention",
      blocks: [
        {
          p: "We keep data only for as long as necessary to fulfil the stated purposes or as required by law. When data is no longer needed, we securely delete or anonymise it.",
        },
      ],
    },
    {
      heading: "7. Your rights",
      blocks: [
        { p: "Under GDPR, you have the right to:" },
        {
          list: [
            "access your data and information about how it is processed,",
            "rectify inaccurate data and complete incomplete data,",
            "erase your data (“right to be forgotten”),",
            "restrict processing and object to processing,",
            "data portability,",
            "withdraw consent at any time, without affecting the lawfulness of prior processing.",
          ],
        },
        {
          p: "To exercise these rights, contact us at {email}. You also have the right to lodge a complaint with the competent data protection authority.",
        },
      ],
    },
    {
      heading: "8. Data security",
      blocks: [
        {
          p: "We take reasonable technical and organisational measures to protect your data against unauthorised access, loss, alteration or misuse.",
        },
      ],
    },
    {
      heading: "9. Changes to this policy",
      blocks: [
        {
          p: "We may update this Privacy Policy from time to time. The current version is always available on this page, with the date of the last update indicated.",
        },
      ],
    },
    {
      heading: "10. Contact",
      blocks: [
        {
          p: "For any questions about privacy and the processing of your data, write to us at {email} or call us at {phone}.",
        },
      ],
    },
  ],
};

// hr / bs / me are mutually intelligible Štokavian variants; they fall back to
// the Serbian text so no locale is left without a policy.
const byLocale: Record<Locale, PrivacyContent> = { sr, en, hr: sr, bs: sr, me: sr };

export function getPrivacyContent(locale: Locale): PrivacyContent {
  return byLocale[locale] ?? sr;
}
