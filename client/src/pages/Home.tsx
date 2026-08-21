// Field Signal design philosophy: cinematic proof, operational clarity, and human contact in one marine narrative.
const asset = (file: string) => `${import.meta.env.BASE_URL}assets/${file}`;

import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Mail,
  Phone,
  Play,
  Radio,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const contacts = [
  {
    name: "Ordin Husa",
    role: "Head of Energy",
    company: "GS1 Norway",
    phone: "+47 913 78 124",
    phoneHref: "+4791378124",
    email: "oh@gs1.no",
    image: asset("people/ordin-husa.png"),
    source: "https://gs1.no/ansatte/",
  },
  {
    name: "Håvard Thomlevold",
    role: "Project Manager",
    company: "Invig",
    phone: "+47 917 41 991",
    phoneHref: "+4791741991",
    email: "haavard.thomlevold@invig.no",
    image: asset("people/haavard-thomlevold.png"),
    source: "https://invig.no/team",
  },
  {
    name: "Sigurd Wedding Mikalsen",
    role: "Project Manager",
    company: "Invig",
    phone: "+47 941 83 603",
    phoneHref: "+4794183603",
    email: "sigurd@invig.no",
    image: asset("people/sigurd-mikalsen.jpg"),
    source: "https://invig.no/team",
  },
  {
    name: "André Nilsen",
    role: "EVP",
    company: "InformatiQ",
    phone: "+47 990 05 769",
    phoneHref: "+4799005769",
    email: "an@informatiq.no",
    image: asset("people/andre-nilsen.jpg"),
    source: "https://www.informatiq.no/",
  },
  {
    name: "Arne Kjetil Nilsen",
    role: "Advisor logistiQ",
    company: "InformatiQ",
    phone: "+47 9080 8993",
    phoneHref: "+4790808993",
    email: "akn@informatiq.no",
    image: asset("people/arne-kjetil-nilsen.png"),
    source: "https://www.informatiq.no/#contact",
  },
];

const steps = [
  {
    number: "01",
    title: "Identify once",
    text: "A GS1-based identity gives each component a durable, globally unique reference.",
  },
  {
    number: "02",
    title: "Read in context",
    text: "The same ID can reveal the correct equipment data for the person, system and access rights involved.",
  },
  {
    number: "03",
    title: "Connect the work",
    text: "From inspection history to logistics and planned valve operations, data stays linked to the physical asset.",
  },
];

const partners = [
  { name: "ORLEN Upstream Norway", src: asset("partners/orlen.png"), href: "https://orlen.no/" },
  { name: "CoOper8", src: asset("partners/cooper8.png"), href: "https://cooper8.no/" },
  { name: "eqhub", src: asset("partners/eqhub.png"), href: "https://cooper8.no/services/eqhub/" },
  { name: "InformatiQ", src: asset("partners/informatiq.png"), href: "https://www.informatiq.no/" },
  { name: "Invig", src: asset("partners/invig.png"), href: "https://invig.no/" },
  { name: "Offshore Norge", src: asset("partners/offshore-norge.png"), href: "https://www.offshorenorge.no/" },
  { name: "GS1 Norway", src: asset("partners/gs1-norway.png"), href: "https://gs1.no/" },
];

const organizationNotes = [
  {
    value: "informatiq",
    index: "01",
    label: "Who is InformatiQ?",
    summary: "Integrated digital solutions for oil and gas logistics and operations.",
    body: (
      <>
        <p><strong>InformatiQ builds integrated solutions for oil and gas operations.</strong> LogistiQ is a full-scale logistics solution covering the end-to-end process: from planning and procurement through transport, supply base operations, offshore delivery and returns.</p>
        <p>It connects planning systems, ERP/SAP, suppliers, transport providers, supply bases and offshore operations in one platform. TraQ is LogistiQ’s real-time control tower, combining ERP, Peppol, GS1, GPS, AIS, QR/RFID and IoT data to provide live status, location, logistics events and deviation handling from supplier to final destination.</p>
      </>
    ),
    href: "https://www.informatiq.no/",
    linkLabel: "Visit InformatiQ",
  },
  {
    value: "gs1",
    index: "02",
    label: "What does GS1 Norway contribute?",
    summary: "A common language for unique identification and trusted data sharing.",
    body: (
      <>
        <p><strong>GS1 Norway provides the standards that make a shared identity work across organizations.</strong> A globally unique GS1 identifier gives physical equipment a durable digital reference that can be understood by people, systems and partners throughout the lifecycle.</p>
        <p>This creates a consistent foundation for linking the asset to the correct data, while each organization can apply its own access rights, processes and operational systems.</p>
      </>
    ),
    href: "https://gs1.no/",
    linkLabel: "Visit GS1 Norway",
  },
  {
    value: "invig",
    index: "03",
    label: "What does Invig do?",
    summary: "Making physical assets digitally identifiable through RFID, IoT and GS1 Digital Link.",
    body: (
      <>
        <p><strong>Invig helps organisations structure the physical world through traceability technology.</strong> Its solutions combine RFID, IoT and GS1 Digital Link to connect physical assets to relevant digital information, from identification and location to operational status.</p>
        <p>For subsea equipment, this creates a practical bridge between the component in the field, its unique identity and the systems that need to use its data.</p>
      </>
    ),
    href: "https://newpage.invig.no/",
    linkLabel: "Visit Invig",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Subsea Equipment Identity home">
          <span className="brand-mark-wrap"><img src={asset("brand/subsea-identity-mark.png")} alt="" className="brand-mark" /></span>
          <span>
            <strong>GS1 / SUBSEA ID</strong>
            <small>Equipment identity concept</small>
          </span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#film">Concept film</a>
          <a href="#identity">The connection</a>
          <a href="#people">Contacts</a>
        </nav>
        <a className="header-cta" href="#people">
          Talk to the team <ArrowUpRight size={16} strokeWidth={1.7} />
        </a>
      </header>

      <main id="top">
        <section className="top-film-section" id="film" aria-labelledby="film-heading">
          <div className="top-film-rail" aria-hidden="true"><span>01</span><i /><small>FILM</small></div>
          <div className="top-film-intro">
            <div className="campaign-signature" aria-label="GS1 Subsea ID operational identity">
              <span className="signal-ring campaign-ring" aria-hidden="true"><span /></span>
              <span><strong>GS1 / SUBSEA ID</strong><small>OPERATIONAL IDENTITY FIELD</small></span>
            </div>
            <p className="signal-label"><Radio size={13} /> GS1-BASED SUBSEA EQUIPMENT IDENTITY</p>
            <h1 id="film-heading">Watch the concept <em>in motion.</em></h1>
            <p>From vessel launch to ROV inspection, see how one GS1-based, globally unique identity connects the physical asset to the right operational data — from asset history to planned work and digital twin context.</p>
            <p className="ons-callout"><span>ONS 2026 · 24–27 AUG</span> Meet us at ONS to explore the concept in person.</p>
          </div>
          <div className="top-film-frame">
            <iframe
              src="https://player.vimeo.com/video/1219827771?h=c4aa5e03cc&title=0&byline=0&portrait=0&dnt=1"
              title="Subsea Identification proof of concept"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
            <div className="top-film-status"><span className="signal-dot" /> OPERATIONAL PROOF / CONCEPT FILM</div>
            <div className="signal-ring signal-ring-top" aria-hidden="true"><span /></div>
            <div className="top-film-meta"><span>CONCEPT FILM</span><span>04:28 / SUBSEA ID</span></div>
          </div>
        </section>

        <section className="people-section people-section-priority" id="people" aria-labelledby="people-heading">
          <div className="people-stage" aria-hidden="true"><span>02</span><i /><small>ONS</small></div>
          <div className="people-topline">
            <p className="signal-label"><span className="signal-dot" /> CONTACT</p>
            <p>Talk with the people working across standards, traceability, operational data and digital twin context.</p>
          </div>
          <h2 id="people-heading">Meet us at ONS.</h2>
          <div className="contact-grid">
            {contacts.map((person, index) => (
              <article className="contact-card" key={person.email}>
                <div className="contact-portrait-wrap">
                  <img src={person.image} alt={`Portrait of ${person.name}`} loading="lazy" />
                  <span>{person.company}</span>
                </div>
                  <div className="contact-details">
                    <div className="contact-log"><span>ONS FIELD LOG / 0{index + 1}</span><i /></div>
                  <div className="contact-title-row">
                    <div>
                      <h3>{person.name}</h3>
                      <p>{person.role}</p>
                    </div>
                    <a href={person.source} target="_blank" rel="noreferrer" aria-label={`Open ${person.name}'s organization page`}>
                      <ArrowUpRight size={18} />
                    </a>
                    </div>
                    <div className="contact-status"><span className="signal-dot" /> AVAILABLE TO MEET AT ONS</div>
                    {person.phone ? <a href={`tel:${person.phoneHref}`} className="contact-link"><Phone size={15} /> {person.phone}</a> : null}
                  {person.email ? (
                    <a href={`mailto:${person.email}`} className="contact-link"><Mail size={15} /> {person.email}</a>
                  ) : (
                    <a href={person.source} className="contact-link" target="_blank" rel="noreferrer"><Mail size={15} /> Contact via InformatiQ</a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="proof-strip" aria-label="Concept context">
          <p>Designed for the connections that happen between equipment, people and systems.</p>
          <div>
            <span>GS1 ID</span>
            <span>ROV OPERATIONS</span>
            <span>DIGITAL TWIN</span>
          </div>
        </section>

        <section className="film-section" aria-labelledby="story-heading">
          <div className="section-rail" aria-hidden="true">02 / FILM</div>
          <div className="film-intro">
            <p className="signal-label"><span className="signal-dot" /> CONCEPT FILM</p>
            <h2 id="story-heading">One shared ID. From equipment to operational context.</h2>
            <p>
              Follow a ROV from vessel launch to subsea inspection, identification and a connected operational view.
            </p>
          </div>
          <div className="video-frame film-still">
            <img src={asset("imagery/subsea-rov-tree.jpg")} alt="ROV inspecting a subsea production tree" loading="lazy" />
            <div className="video-glow" aria-hidden="true" />
            <div className="film-still-caption"><span className="signal-ring signal-ring-small" aria-hidden="true"><span /></span> THE PHYSICAL ASSET</div>
          </div>
          <div className="film-footer">
            <span>04:28 MIN</span>
            <span>Proof of concept</span>
            <a href="https://vimeo.com/1219827771/c4aa5e03cc" target="_blank" rel="noreferrer">
              Watch on Vimeo <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        <section className="identity-section" id="identity" aria-labelledby="identity-heading">
          <div className="section-stage-mark" aria-hidden="true"><span>03</span><i /> <small>IDENTITY</small></div>
          <div className="identity-header">
            <p className="signal-label"><span className="signal-dot" /> ONE SHARED REFERENCE</p>
            <h2 id="identity-heading">One ID. Different views. <em>Connected work.</em></h2>
          </div>
          <div className="identity-layout">
            <ol className="step-list">
              {steps.map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                  <Check size={18} strokeWidth={1.5} aria-hidden="true" />
                </li>
              ))}
            </ol>
            <div className="twin-panel">
              <img
                src={asset("imagery/subsea-digital-twin.jpg")}
                alt="Digital twin visualization of a subsea production tree"
                loading="lazy"
              />
              <div className="twin-copy">
                <span>INFORMATIQ / DIGITAL TWIN</span>
                <strong>From equipment to context</strong>
              </div>
              <div className="asset-data-tag">GS1 ID / 70735394596</div>
            </div>
          </div>
        </section>

        <section className="access-section" aria-label="Access to the right data">
          <div className="section-stage-mark access-stage-mark" aria-hidden="true"><span>04</span><i /> <small>ACCESS</small></div>
          <div className="access-copy">
            <span className="giant-index">03</span>
            <h2>Data that meets the person who needs it.</h2>
            <p>
              The same unique identity can support a quick owner check, a complete asset history, planned work or a systems-level handoff. What is shown depends on the role and rights of the user.
            </p>
            <a className="text-action" href="#people">
              Discuss the concept <ArrowDown size={17} />
            </a>
          </div>
          <div className="access-image-wrap">
            <img
              src={asset("imagery/subsea-identity-detail.jpg")}
              alt="Industrial equipment identity plate on an offshore subsea assembly"
              loading="lazy"
            />
            <div className="access-image-note">IDENTITY / CONTEXT / ACCESS</div>
          </div>
        </section>

        <section className="organization-section" aria-labelledby="organization-heading">
          <div className="section-stage-mark organization-stage-mark" aria-hidden="true"><span>05</span><i /> <small>CONTEXT</small></div>
          <div className="organization-intro">
            <p className="signal-label"><span className="signal-dot" /> THE COLLABORATION</p>
            <h2 id="organization-heading">The people, standards and systems behind the connection.</h2>
            <p>Explore the roles that help connect unique equipment identity with practical logistics, traceability and operational context.</p>
          </div>
          <Accordion type="single" collapsible className="organization-accordion">
            {organizationNotes.map((note) => (
              <AccordionItem value={note.value} key={note.value} className="organization-item">
                <AccordionTrigger className="organization-trigger">
                  <span className="organization-index">{note.index}</span>
                  <span className="organization-label"><strong>{note.label}</strong><small>{note.summary}</small></span>
                </AccordionTrigger>
                <AccordionContent className="organization-content">
                  <div className="organization-body">{note.body}</div>
                  <a href={note.href} target="_blank" rel="noreferrer" className="organization-link">{note.linkLabel} <ArrowUpRight size={15} /></a>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="partner-section" aria-label="Collaborating organizations">
          <p className="signal-label"><span className="signal-dot" /> COLLABORATING ORGANIZATIONS</p>
          <div className="partner-grid">
            {partners.map((partner) => (
              <a className="partner-plaque" key={partner.name} href={partner.href} target="_blank" rel="noreferrer" aria-label={`Open ${partner.name} website`}>
                <img src={partner.src} alt={partner.name} loading="lazy" />
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <img src={asset("brand/subsea-identity-mark.png")} alt="" />
          <span>GS1-based subsea equipment identity</span>
        </div>
        <p>Connecting equipment, data and operations across the industry.</p>
        <a href="#top">Back to surface <ArrowUpRight size={15} /></a>
      </footer>
    </div>
  );
}
