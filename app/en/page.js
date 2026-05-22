import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';
import CardGrid from '@/components/CardGrid';
import FaqList from '@/components/FaqList';
import { Icon } from '@/components/Icons';
import {
  englishSite,
  englishPillars,
  englishServices,
  englishResearchArticles,
  englishFaqs,
  englishKnowledgeCollections,
  englishCollaborationTracks,
  englishMediaHighlights,
  englishContactCards
} from '@/data/english';
import { siteConfig } from '@/data/site';

export const metadata = {
  title: 'Dr. Ahmed Al-Muaiqly | Ancient Egyptian Archaeology Researcher',
  description: englishSite.description
};

const englishHeroHighlights = [
  { label: 'Researcher in ancient Egyptian archaeology' },
  { label: 'Historical articles and studies' },
  { label: 'Egyptology and archaeological analysis' },
  { label: 'Knowledge platforms for ancient Egypt' }
];

const englishBiography = {
  intro:
    'A research profile grounded in archaeological interest, historical articles, and documented engagement with ancient Egyptian civilization.',
  body: [
    'Dr. Ahmed Al-Muaiqly is a researcher in ancient Egyptian archaeology and a historical consultant devoted to Egyptology and ancient Egyptian civilization.',
    'His work focuses on historical articles, studies, archaeological analysis, and clear presentation of ancient Egyptian evidence and contexts.',
    'This website introduces his profile, research interests, scientific output, and official channels for cooperation with institutions and knowledge platforms.'
  ]
};

const englishCredentials = [
  {
    icon: 'book',
    degree: 'Academic background in archaeology and ancient history',
    institution: 'Specialized study of ancient Egyptian civilization',
    details: 'Focus on archaeological evidence, inscriptions, symbols, and the historical context of ancient Egypt.'
  },
  {
    icon: 'temple',
    degree: 'Research experience in Egyptology',
    institution: 'Articles, studies, and archaeological analyses',
    details: 'Research interest in sites, inscriptions, architecture, and documented historical interpretation.'
  },
  {
    icon: 'shield',
    degree: 'Field-oriented archaeological analysis',
    institution: 'Observation and interpretation of Egyptian archaeological evidence',
    details: 'Combining desk research with field-oriented reading of archaeological sites and material culture.'
  },
  {
    icon: 'scroll',
    degree: 'Historical consulting and specialized content',
    institution: 'Knowledge platforms and ancient Egypt initiatives',
    details: 'Preparing and reviewing historical content for platforms and cultural initiatives focused on ancient Egyptian civilization.'
  }
];

const englishVisionMission = [
  {
    icon: 'eye',
    title: 'Vision',
    text: 'To support a documented historical awareness that values evidence, accuracy, and the civilizational depth of ancient Egypt.'
  },
  {
    icon: 'shield',
    title: 'Mission',
    text: 'To make reliable historical knowledge accessible through clear scholarly presentation and responsible engagement with heritage questions.'
  }
];

function EnglishHero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-shell">
        <div className="hero-panel egypt-card glass-card">
          <div className="hero-copy hero-copy-floating en-hero-copy">
            <h1 className="hero-name en-hero-name">
              <span>Dr. Ahmed</span>
              <span>Al-Muaiqly</span>
            </h1>
            <p className="hero-role">{englishSite.role}</p>
            <p className="hero-slogan">{englishSite.slogan}</p>
            <p className="hero-text">{englishSite.description}</p>

            <div className="hero-actions hero-actions-main hero-actions-single">
              <Link href="/en/about" className="btn btn-secondary hero-btn-secondary">
                Academic Profile
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-bottom-grid hero-bottom-grid-refined">
          <div className="hero-points hero-points-clean">
            {englishHeroHighlights.map((item) => (
              <div className="hero-point" key={item.label}>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-stats egypt-card glass-card">
            <div className="hero-stat-item">
              <strong>Research</strong>
              <span>in ancient Egyptian archaeology</span>
            </div>
            <div className="hero-stat-item">
              <strong>Articles</strong>
              <span>historical studies and analyses</span>
            </div>
            <div className="hero-stat-item">
              <strong>Platforms</strong>
              <span>focused on ancient Egypt</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function EnglishHomePage() {
  return (
    <div className="en-page en-home-page" dir="ltr">
      <EnglishHero />

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Core Focus"
            title="Documented Scholarship in Service of Egyptian History"
            text="A research-based approach that balances academic accuracy, clear presentation, and responsible engagement with ancient Egyptian heritage."
          />
          <CardGrid items={englishPillars} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split-grid split-grid-about">
          <div className="egypt-card glass-card visual-panel home-pharaoh-panel about-feature-panel">
            <div className="visual-panel-inner about-feature-inner">
              <span className="visual-chip">Profile Overview</span>
              <h3>Academic Experience</h3>
              <p>
                A concise introduction to the academic biography, research interests, and cooperation channels in Egypt and abroad.
              </p>
              <div className="about-mini-grid">
                <div className="about-mini-card">
                  <strong>Academic Experience</strong>
                  <span>Specialized study of ancient Egyptian civilization through academic research and field engagement.</span>
                </div>
                <div className="about-mini-card">
                  <strong>Documented Approach</strong>
                  <span>Historical interpretation grounded in evidence, inscriptions, and trusted academic references.</span>
                </div>
                <div className="about-mini-card">
                  <strong>Cultural Cooperation</strong>
                  <span>Collaboration pathways with researchers and heritage institutions in Egypt and abroad.</span>
                </div>
                <div className="about-mini-card">
                  <strong>Historical Awareness</strong>
                  <span>Knowledge presented with clarity while preserving scholarly depth for wider audiences.</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionTitle
              eyebrow="About Dr. Ahmed"
              title="A Research Biography Rooted in Study and Field Work"
              text={englishBiography.intro}
              align="right"
            />
            <div className="text-flow egypt-card glass-card about-card">
              {englishBiography.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="hero-actions compact">
                <Link href="/en/about" className="btn btn-primary">Read Full Profile</Link>
                <Link href="/en/contact" className="btn btn-secondary">Request Official Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="International Education"
            title="Academic Credentials that Support Trust and Credibility"
            text="A structured presentation of qualifications, certificates, and research affiliations forming the academic background of Dr. Ahmed Al-Muaiqly in Egyptology and heritage studies."
          />
          <CardGrid items={englishCredentials} variant="credentials" />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            eyebrow="Vision and Mission"
            title="A Scholarly Vision that Protects History and Identity"
            text="A responsible academic position toward Egyptian history, cultural identity, and documented heritage knowledge."
          />
          <div className="card-grid card-grid-mission">
            {englishVisionMission.map((item) => (
              <article className="egypt-card glass-card mission-card" key={item.title}>
                <span className="card-icon"><Icon name={item.icon} size={30} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Services"
            title="Areas of Cooperation and Services"
            text="Research, consulting, and knowledge services for researchers, students, institutions, and those interested in Egyptology and historical heritage."
          />
          <CardGrid items={englishServices} variant="services" />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            eyebrow="Research and Articles"
            title="Research Themes Reflecting Specialized Depth"
            text="Research and knowledge themes through which documented articles, insights, and materials can serve readers, researchers, and those interested in ancient Egyptian history."
          />
          <CardGrid items={englishResearchArticles} variant="topics" />
          <div className="center-actions">
            <Link href="/en/articles" className="btn btn-secondary">View Full Page</Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            eyebrow="Additional Gateways"
            title="Knowledge Resources, Institutional Cooperation, and Media Presence"
            text="Three additional gateways strengthen the value of the website: a knowledge library, a formal cooperation channel, and a space for media and seminar themes."
          />
          <div className="phase2-grid">
            <article className="egypt-card glass-card phase2-card">
              <div>
                <span className="eyebrow">Knowledge Library</span>
                <h3>Articles, Briefs, and Analytical Files</h3>
                <p>{englishKnowledgeCollections[0].text}</p>
              </div>
              <Link href="/en/knowledge" className="btn btn-secondary">Browse Library</Link>
            </article>
            <article className="egypt-card glass-card phase2-card">
              <div>
                <span className="eyebrow">Official Collaboration</span>
                <h3>A Dedicated Channel for Institutions</h3>
                <p>{englishCollaborationTracks[0].text}</p>
              </div>
              <Link href="/en/collaboration" className="btn btn-secondary">Submit Collaboration Request</Link>
            </article>
            <article className="egypt-card glass-card phase2-card">
              <div>
                <span className="eyebrow">Media Presence</span>
                <h3>Themes for Interviews and Seminars</h3>
                <p>{englishMediaHighlights[0].summary}</p>
              </div>
              <Link href="/en/media" className="btn btn-secondary">View Themes</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid split-grid-contact">
          <div>
            <SectionTitle
              eyebrow="FAQ"
              title="Clear Answers for Frequent Questions"
              text="A concise section that helps visitors understand the work, services, and official communication channels with clarity."
              align="right"
            />
            <FaqList items={englishFaqs.slice(0, 4).map((item) => ({ q: item.q, a: item.a }))} />
          </div>
          <div>
            <SectionTitle
              eyebrow="Quick Contact"
              title="Official Contact Details and Channels"
              text="All main communication channels are presented clearly, including WhatsApp, email, phone, and location information."
              align="right"
            />
            <div className="card-grid card-grid-contact-short">
              {englishContactCards.map((item) => (
                <article className="egypt-card glass-card mini-contact-card" key={item.title}>
                  <span className="card-icon"><Icon name={item.icon} size={24} /></span>
                  <h3>{item.title}</h3>
                  <p className={item.title.includes('Phone') ? 'phone-ltr' : ''}>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="cta-box egypt-card glass-card cta-box-home">
              <div>
                <span className="eyebrow">Direct Contact</span>
                <h3>Clear and Direct Communication Channels</h3>
                <p>Official channels suitable for inquiries, cooperation requests, and arranging formal meetings.</p>
              </div>
              <div className="cta-actions">
                <a href={`https://wa.me/${siteConfig.whatsapp}`} className="btn btn-primary" target="_blank" rel="noreferrer">WhatsApp</a>
                <Link href="/en/contact" className="btn btn-secondary">Contact Page</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
