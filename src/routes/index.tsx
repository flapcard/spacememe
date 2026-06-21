import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/spcmeme-logo.png";
import rocket from "@/assets/rocket-hero.jpg";
import doge from "@/assets/doge-astronaut.jpg";
import moon from "@/assets/moon.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SPACE MEME $SPCMEME — To The Moon" },
      { name: "description", content: "$SPCMEME — the meme coin engineered for orbit. Fair launch on launchpad. Every buy earns $SPCXB rewards. 1,000,000,000 supply." },
      { property: "og:title", content: "SPACE MEME $SPCMEME — To The Moon" },
      { property: "og:description", content: "Fair launch memecoin inspired by SpaceX. Buy $SPCMEME, claim $SPCXB on launchpad." },
    ],
  }),
  component: Home,
});

const FAQ = [
  { q: "What is $SPCMEME?", a: "Space Meme is a community memecoin engineered with the discipline of a rocket program and the energy of the internet. Fair launch, no presale, no team allocation." },
  { q: "How is the launch fair?", a: "100% of the supply is seeded on the launchpad at T-0. No insiders, no snipers — same liftoff for everyone." },
  { q: "What is $SPCXB?", a: "$SPCXB is the booster reward. Every buy of $SPCMEME automatically allocates $SPCXB to your wallet. Claim it anytime on the launchpad." },
  { q: "What is the total supply?", a: "1,000,000,000 $SPCMEME. Fixed. No mint function. No rug hatch." },
  { q: "Where do we go?", a: "The Moon. Then Mars. Then the orderbook on every CEX." },
];

function Home() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-black text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/60 border-b border-border">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <span className="font-display text-xl tracking-widest">SPACE<span className="text-blue">·</span>MEME</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.25em] font-sans">
            <a href="#about" className="hover:text-blue transition">About</a>
            <a href="#tokenomics" className="hover:text-blue transition">Tokenomics</a>
            <a href="#booster" className="hover:text-blue transition">$SPCXB</a>
            <a href="#faq" className="hover:text-blue transition">Q&amp;A</a>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://x.com/spacememebsc" target="_blank" rel="noreferrer" className="px-3 py-2 text-xs uppercase tracking-widest border border-border hover:border-blue hover:text-blue transition">Twitter</a>
            <a href="https://t.me/spacexmeme" target="_blank" rel="noreferrer" className="px-3 py-2 text-xs uppercase tracking-widest border border-border hover:border-blue hover:text-blue transition">Telegram</a>
            <a href="https://flap.sh/bnb/0x1be2e66911e5fe97a638d20bcce3d2bc61857777" target="_blank" rel="noreferrer" className="px-3 py-2 text-xs uppercase tracking-widest bg-blue text-white border border-blue hover:bg-white hover:text-black hover:border-white transition">flap.sh</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex flex-col justify-end">
        <div className="absolute inset-0">
          <img src={rocket} alt="Rocket launch" width={1920} height={1080} className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
          <div className="absolute inset-0 scanline pointer-events-none opacity-40" />
        </div>
        <div className="relative max-w-7xl mx-auto w-full px-6 pb-24 pt-40">
          <p className="text-xs tracking-[0.4em] text-blue mb-6 font-mono">MISSION · SPCMEME-01 · FAIR LAUNCH</p>
          <h1 className="font-display text-[14vw] md:text-[10vw] leading-[0.85] mb-6">
            SPACE<br/><span className="text-blue glow-blue">MEME</span>
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground mb-8">
            The memecoin engineered for orbit. Inspired by the most ambitious rocket program on Earth — built for the most degenerate community in the universe.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://flap.sh/bnb/0x1be2e66911e5fe97a638d20bcce3d2bc61857777" target="_blank" rel="noreferrer" className="bg-blue text-white px-8 py-4 font-display tracking-widest text-sm hover:opacity-90 transition ring-blue">Buy on flap.sh</a>
            <a href="#launchpad" className="border border-white/40 px-8 py-4 font-display tracking-widest text-sm hover:border-blue hover:text-blue transition">Claim $SPCXB</a>
            <a href="#about" className="border border-white/40 px-8 py-4 font-display tracking-widest text-sm hover:border-blue hover:text-blue transition">Read Mission Brief</a>
          </div>
        </div>
        {/* ticker */}
        <div className="relative border-y border-border bg-black/80 py-3 overflow-hidden">
          <div className="flex anim-marquee whitespace-nowrap font-mono text-xs tracking-[0.3em] text-muted-foreground">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 gap-12 px-6">
                <span>$SPCMEME · LIVE</span><span className="text-blue">●</span>
                <span>SUPPLY 1,000,000,000</span><span className="text-blue">●</span>
                <span>FAIR LAUNCH</span><span className="text-blue">●</span>
                <span>EVERY BUY → $SPCXB BOOSTER</span><span className="text-blue">●</span>
                <span>TO THE MOON</span><span className="text-blue">●</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-32 stars-bg">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] text-blue mb-4 font-mono">01 / ABOUT</p>
            <h2 className="text-5xl md:text-6xl mb-8">A Memecoin<br/>Engineered Like<br/>A <span className="text-blue">Rocket</span>.</h2>
            <p className="text-muted-foreground mb-4 text-lg">$SPCMEME isn't another rug with a dog picture. It's a fair-launch experiment combining the precision of aerospace and the chaos of meme culture.</p>
            <p className="text-muted-foreground mb-8">No presale. No team tokens. No insider allocations. Liquidity locks at T-0. Mission control: the community.</p>
            <div className="grid grid-cols-3 gap-4 border-t border-border pt-6">
              <Stat n="0%" l="Team Alloc" />
              <Stat n="100%" l="Fair Launch" />
              <Stat n="∞" l="Moon Energy" />
            </div>
          </div>
          <div className="relative anim-float">
            <img src={doge} alt="Doge astronaut" width={1024} height={1024} loading="lazy" className="w-full max-w-md mx-auto" />
            <img src={logo} alt="" aria-hidden width={300} height={100} loading="lazy" className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-2/3 invert opacity-90" />
          </div>
        </div>
      </section>

      {/* TOKENOMICS */}
      <section id="tokenomics" className="py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.4em] text-blue mb-4 font-mono">02 / TOKENOMICS</p>
          <h2 className="text-5xl md:text-7xl mb-16">Mission Spec.</h2>
          <div className="grid md:grid-cols-4 gap-px bg-border">
            <Spec k="Name" v="Space Meme" />
            <Spec k="Ticker" v="$SPCMEME" />
            <Spec k="Supply" v="1,000,000,000" highlight />
            <Spec k="Launch" v="Fair · Launchpad" />
            <Spec k="Tax" v="0 / 0" />
            <Spec k="Liquidity" v="Locked" />
            <Spec k="Booster" v="$SPCXB Rewards" highlight />
            <Spec k="Destination" v="The Moon 🌑" />
          </div>
        </div>
      </section>

      {/* BOOSTER / SPCXB */}
      <section id="booster" className="relative py-32 overflow-hidden border-t border-border">
        <img src={moon} alt="" aria-hidden width={1024} height={1024} loading="lazy" className="absolute -right-32 top-1/2 -translate-y-1/2 w-[700px] opacity-70" />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-[0.4em] text-blue mb-4 font-mono">03 / BOOSTER PROGRAM</p>
            <h2 className="text-5xl md:text-6xl mb-8">Every Buy<br/>Earns <span className="text-blue glow-blue">$SPCXB</span>.</h2>
            <p className="text-muted-foreground text-lg mb-6">For every $SPCMEME purchase, a proportional amount of $SPCXB — the Booster token — is allocated to your wallet automatically.</p>
            <p className="text-muted-foreground mb-10">Claim your accumulated $SPCXB anytime directly on the launchpad. Hold longer, boost harder.</p>
            <a id="launchpad" href="#" className="inline-block bg-white text-black px-8 py-4 font-display tracking-widest text-sm hover:bg-blue hover:text-white transition">Claim $SPCXB on Launchpad</a>
          </div>
          <div className="grid gap-4">
            {[
              { s: "T-00:01", t: "Buy $SPCMEME", d: "Place an order on the launchpad. Fair price for everyone." },
              { s: "T+00:02", t: "Earn $SPCXB", d: "Booster tokens auto-allocate to your wallet, proportional to your buy." },
              { s: "T+∞", t: "Claim Anytime", d: "Head to the launchpad and claim your $SPCXB rewards on your schedule." },
            ].map((step) => (
              <div key={step.s} className="border border-border p-6 hover:border-blue transition group bg-card/40">
                <div className="font-mono text-xs text-blue tracking-widest mb-2">{step.s}</div>
                <div className="font-display text-2xl mb-2 group-hover:text-blue transition">{step.t}</div>
                <p className="text-sm text-muted-foreground">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs tracking-[0.4em] text-blue mb-4 font-mono">04 / Q&amp;A</p>
          <h2 className="text-5xl md:text-7xl mb-16">Mission<br/>Briefing.</h2>
          <div className="divide-y divide-border border-y border-border">
            {FAQ.map((item, i) => (
              <button key={i} onClick={() => setOpen(open === i ? null : i)} className="w-full text-left py-6 group block">
                <div className="flex items-center justify-between gap-6">
                  <span className="font-display text-xl md:text-2xl group-hover:text-blue transition">{item.q}</span>
                  <span className="font-mono text-blue text-2xl shrink-0">{open === i ? "−" : "+"}</span>
                </div>
                {open === i && <p className="mt-4 text-muted-foreground max-w-2xl">{item.a}</p>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-40 text-center border-t border-border stars-bg">
        <h2 className="font-display text-6xl md:text-9xl glow-blue text-blue mb-6">TO THE MOON</h2>
        <p className="text-muted-foreground tracking-[0.3em] text-xs mb-10">SPACE MEME · $SPCMEME · T-MINUS ZERO</p>
        <div className="flex justify-center gap-3 flex-wrap px-6">
          <a href="https://flap.sh/bnb/0x1be2e66911e5fe97a638d20bcce3d2bc61857777" target="_blank" rel="noreferrer" className="bg-blue text-white border border-blue px-8 py-4 font-display tracking-widest text-sm hover:bg-white hover:text-black hover:border-white transition">Buy on flap.sh →</a>
          <a href="https://x.com/spacememebsc" target="_blank" rel="noreferrer" className="border border-white/40 px-8 py-4 font-display tracking-widest text-sm hover:border-blue hover:text-blue transition">Twitter →</a>
          <a href="https://t.me/spacexmeme" target="_blank" rel="noreferrer" className="border border-white/40 px-8 py-4 font-display tracking-widest text-sm hover:border-blue hover:text-blue transition">Telegram →</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4 text-xs uppercase tracking-[0.25em] text-muted-foreground font-mono">
          <span>© Space Meme — Mission Control</span>
          <span>$SPCMEME is a memecoin. Not financial advice. DYOR before boarding.</span>
        </div>
      </footer>
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-blue">{n}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
    </div>
  );
}

function Spec({ k, v, highlight }: { k: string; v: string; highlight?: boolean }) {
  return (
    <div className={`p-8 ${highlight ? "bg-blue text-white" : "bg-black"}`}>
      <div className={`text-xs uppercase tracking-[0.3em] mb-3 font-mono ${highlight ? "text-white/70" : "text-muted-foreground"}`}>{k}</div>
      <div className="font-display text-2xl md:text-3xl break-words">{v}</div>
    </div>
  );
}
