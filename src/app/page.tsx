"use client";
import Image from "next/image";
import Script from "next/script";
import RsvpForm from "@/components/RsvpForm";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2400&q=80";

const STORY_IMAGE =
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=80";

export default function Home() {
  return (
    <main>
      {/* Desk chat widget · Prod Chatbot */}
      <Script
        src="https://dz6ejslmb2lbc.cloudfront.net/zealdesk/chatbot/widget.js"
        data-widget-id="01M3TXVMGHS3WMN2SG8VQDKCDY"
        data-color="#C2410C"
        data-launcher-icon="headset"
        data-position="bottom-right"
        data-tags="prod-test"
        strategy="afterInteractive"
      />

      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Bride and groom celebrating their wedding"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#321F24]/90 via-[#321F24]/40 to-[#321F24]/10" />

        <div className="relative z-10 w-full px-6 pb-16 pt-28 text-center text-[#FFF8F2] sm:pb-20 sm:pt-32">
          <p className="animate-fade-up text-xs uppercase tracking-[0.45em] text-[#E8B9A8]">
            With joyful hearts &amp; happy families
          </p>

          <h1 className="animate-fade-up-delay mt-4 font-[family-name:var(--font-script)] text-[clamp(3.5rem,12vw,7rem)] leading-none text-[#FFF8F2]">
            Kavya &amp; Rohan
          </h1>

          <div className="animate-line-grow mx-auto mt-5 h-px w-24 bg-[#D89A82]" />

          <p className="animate-fade-up-delay-2 mx-auto mt-6 max-w-md font-[family-name:var(--font-display)] text-xl font-light tracking-wide text-[#FFF8F2]/90 sm:text-2xl">
            Two hearts, one beautiful beginning, and a day we can&apos;t wait
            to share with you.
          </p>

          <div className="animate-fade-up-delay-2 mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#celebration"
              className="bg-[#FFF8F2] px-8 py-3.5 text-xs uppercase tracking-[0.22em] text-[#321F24] transition hover:bg-[#F1CBBE]"
            >
              Celebration details
            </a>

            <a
              href="#rsvp"
              className="border border-[#FFF8F2]/50 px-8 py-3.5 text-xs uppercase tracking-[0.22em] text-[#FFF8F2] transition hover:border-[#E8B9A8] hover:text-[#E8B9A8]"
            >
              RSVP
            </a>
          </div>

          <p className="animate-fade-up-delay-2 mt-10 text-sm uppercase tracking-[0.3em] text-[#FFF8F2]/70">
            08 · 02 · 2027
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-pad bg-[#FFF8F2]">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={STORY_IMAGE}
              alt="Wedding couple sharing a joyful moment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#A66A5B]">
              Our story
            </p>

            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-medium text-[#321F24] sm:text-5xl">
              From friendship to forever
            </h2>

            <p className="mt-6 max-w-md text-base font-light leading-relaxed text-[#321F24]/75">
              It began with a simple hello, countless conversations, and a
              friendship that slowly became something much more. Now we&apos;re
              ready to begin our next chapter together, surrounded by the
              people we love most.
            </p>
          </div>
        </div>
      </section>

      {/* Celebration */}
      <section
        id="celebration"
        className="section-pad relative overflow-hidden bg-[#321F24] text-[#FFF8F2]"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#C9826D]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-[#E8B9A8]/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#E8B9A8]">
            The celebration
          </p>

          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-medium sm:text-5xl">
            A day to remember
          </h2>

          <p className="mx-auto mt-4 max-w-lg font-light text-[#FFF8F2]/75">
            Come celebrate our wedding day with blessings, laughter, good food,
            music, and the people who make life special.
          </p>

          <div className="mt-14 grid gap-12 sm:grid-cols-2 sm:gap-8">
            <div>
              <p className="font-[family-name:var(--font-script)] text-3xl text-[#E8B9A8]">
                Wedding Ceremony
              </p>

              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[#FFF8F2]/60">
                Monday, February 8
              </p>

              <p className="mt-2 font-[family-name:var(--font-display)] text-2xl">
                6:00 in the evening
              </p>

              <p className="mt-4 font-light leading-relaxed text-[#FFF8F2]/70">
                The Rose Courtyard
                <br />
                Udaipur, Rajasthan
              </p>
            </div>

            <div>
              <p className="font-[family-name:var(--font-script)] text-3xl text-[#E8B9A8]">
                Reception
              </p>

              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[#FFF8F2]/60">
                Same evening
              </p>

              <p className="mt-2 font-[family-name:var(--font-display)] text-2xl">
                8:00 onwards
              </p>

              <p className="mt-4 font-light leading-relaxed text-[#FFF8F2]/70">
                Lakeview Terrace
                <br />
                Dinner · Music · Dancing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section id="rsvp" className="section-pad bg-[#F8EAE4]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#A66A5B]">
            Kindly reply
          </p>

          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-medium text-[#321F24] sm:text-5xl">
            Will you celebrate with us?
          </h2>

          <p className="mx-auto mt-4 max-w-md font-light text-[#321F24]/70">
            Please RSVP by January 10 so we can make every little detail
            special for you.
          </p>

          <RsvpForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#211519] px-6 py-12 text-center text-[#FFF8F2]/50">
        <p className="font-[family-name:var(--font-script)] text-3xl text-[#E8B9A8]">
          Kavya &amp; Rohan
        </p>

        <p className="mt-3 text-xs uppercase tracking-[0.3em]">
          With love · 08.02.2027
        </p>
      </footer>
    </main>
  );
}

