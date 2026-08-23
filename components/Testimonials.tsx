import type { Dictionary } from "../lib/dictionaries";

export default function Testimonials({ dict }: { dict: Dictionary }) {
  const items = [
    { quote: dict.t1Quote, author: dict.t1Author },
    { quote: dict.t2Quote, author: dict.t2Author },
    { quote: dict.t3Quote, author: dict.t3Author },
  ];

  return (
    <section className="px-6 py-16" id="utisci">
      <div className="mx-auto max-w-[1140px]">
        <div className="mx-auto mb-11 max-w-[640px] text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-roof before:block before:h-[2px] before:w-[18px] before:bg-roof">
            {dict.testimonialsEyebrow}
          </div>
          <h2 className="font-display text-[26px] font-semibold leading-tight text-sea sm:text-[32px] lg:text-[38px]">
            {dict.testimonialsTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            {dict.testimonialsNote}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-xl2 border border-sea/10 bg-paper p-7"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mb-4 h-7 w-7 flex-none text-roof/25"
                aria-hidden="true"
              >
                <path d="M10 7.5C7.2 8.6 5.5 11 5.5 14v2.5h5V11H7.9c.3-1.1 1.2-2 2.6-2.6l-.5-.9zm8 0c-2.8 1.1-4.5 3.5-4.5 6.5v2.5h5V11h-2.6c.3-1.1 1.2-2 2.6-2.6l-.5-.9z" />
              </svg>
              <blockquote className="flex-1 text-[14.5px] leading-relaxed text-ink-soft">
                {item.quote}
              </blockquote>
              <figcaption className="mt-5 border-t border-sea/10 pt-4 text-sm font-semibold text-sea">
                {item.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
