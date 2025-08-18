import React, { useMemo } from 'react';

const OnePager: React.FC = () => {
  const services = useMemo(
    () => [
      {
        id: 'data-processing',
        title: 'Data Processing',
        text:
          'Build resilient processing jobs for batch and real-time workloads. Optimize ETL/ELT, ensure data quality, and reduce latency.',
      },
      {
        id: 'data-pipeline',
        title: 'Data Pipeline',
        text:
          'Design, orchestrate, and monitor pipelines end‑to‑end. Versioned datasets, lineage, and cost‑aware scalability built in.',
      },
      {
        id: 'real-time-processing',
        title: 'Real-time Processing',
        text:
          'Stream processing and event-driven architectures for sub-second insights. Kafka/Kinesis, Flink/Spark Streaming, and scalable pub/sub.',
      },
      {
        id: 'ui-automation',
        title: 'UI Automation',
        text:
          'Automate repetitive UI flows with reliable, observable test and ops tooling to speed up delivery and de‑risk releases.',
      },
    ],
    []
  );

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        :root {
          --bg: #0b1020;
          --card: #121938;
          --text: #e6e8ef;
          --muted: #aab1c5;
          --brand: #5aa9ff;
          --brand-2: #8ef0d0;
          --accent: #ffd166;
          --border: #2a335a;
          --shadow: rgba(0, 0, 0, 0.4);
        }
        * { box-sizing: border-box; }
        html, body { height: 100%; }
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
          color: var(--text);
          background: radial-gradient(1200px 800px at 10% -10%, #1b2246 0%, var(--bg) 60%);
        }
        a { color: inherit; text-decoration: none; }
        a:hover { text-decoration: underline; }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
        header { position: sticky; top: 0; z-index: 10; backdrop-filter: saturate(180%) blur(8px); background: rgba(11, 16, 32, 0.75); border-bottom: 1px solid var(--border); }
        .nav { display: flex; align-items: center; justify-content: space-between; height: 64px; }
        .brand { display: flex; align-items: baseline; gap: 10px; font-weight: 700; }
        .brand .dot { width: 10px; height: 10px; border-radius: 50%; background: linear-gradient(135deg, var(--brand), var(--brand-2)); box-shadow: 0 0 16px var(--brand); }
        .brand-name { letter-spacing: 0.3px; }
        .nav a { color: var(--muted); margin-left: 18px; font-weight: 600; }
        .nav a:hover { color: var(--text); }
        .hero { padding: 80px 0 40px; }
        .hero-inner { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 28px; align-items: center; }
        .kicker { color: var(--brand-2); font-weight: 700; letter-spacing: 1px; text-transform: uppercase; font-size: 12px; }
        h1 { margin: 10px 0 14px; font-size: 40px; line-height: 1.15; }
        .lead { color: var(--muted); font-size: 18px; line-height: 1.6; }
        .cta-row { margin-top: 20px; display: flex; gap: 12px; flex-wrap: wrap; }
        .btn { display: inline-flex; align-items: center; gap: 8px; padding: 10px 16px; border-radius: 10px; border: 1px solid var(--border); background: #0f1530; color: var(--text); font-weight: 700; }
        .btn.primary { background: linear-gradient(135deg, var(--brand), var(--brand-2)); color: #071225; border: none; }
        .btn:hover { filter: brightness(1.05); box-shadow: 0 5px 24px -8px var(--shadow); text-decoration: none; }
        .card { background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.12)), var(--card); border: 1px solid var(--border); border-radius: 16px; box-shadow: 0 10px 30px -20px var(--shadow); }
        .hero-visual { padding: 24px; }
        .visual { height: 240px; border-radius: 12px; background: radial-gradient(600px 300px at 10% 0%, #1c2758, #0f1530 60%); border: 1px dashed #354072; position: relative; overflow: hidden; }
        .orbit { position: absolute; inset: 0; display: grid; place-items: center; }
        .planet { width: 140px; height: 140px; border-radius: 50%; background: linear-gradient(135deg, var(--brand), var(--brand-2)); filter: blur(6px) saturate(1.2); opacity: 0.35; }
        section { padding: 28px 0; }
        .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .service { padding: 18px; }
        .service h3 { margin: 4px 0 8px; }
        .service p { color: var(--muted); line-height: 1.55; }
        .contact { margin-top: 8px; padding: 18px; display: grid; grid-template-columns: 1fr; gap: 10px; }
        .contact .row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
        .contact .label { color: var(--muted); }
        footer { padding: 28px 0 40px; color: var(--muted); text-align: center; }
        @media (max-width: 900px) {
          .hero-inner { grid-template-columns: 1fr; }
          .grid { grid-template-columns: 1fr; }
        }
      `,
        }}
      />

      <header>
        <div className="container nav">
          <div className="brand">
            <span className="dot" aria-hidden="true"></span>
            <span className="brand-name">an-systems</span>
          </div>
          <nav aria-label="Primary">
            <a href="#data-processing">Data Processing</a>
            <a href="#data-pipeline">Data Pipeline</a>
            <a href="#real-time-processing">Real-time Processing</a>
            <a href="#ui-automation">UI Automation</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <div className="hero-inner">
            <div>
              <div className="kicker">Software Engineering Consultant</div>
              <h1>Data platforms and automation that deliver business outcomes</h1>
              <p className="lead">
                We help teams ship reliable data systems and automated user interfaces. Engagements span
                architecture reviews, implementation sprints, and enablement.
              </p>
              <div className="cta-row">
                <a
                  className="btn primary"
                  href="mailto:anandP@an-systems.in?subject=Consulting%20inquiry%20(an-systems)&body=Hi%20an-systems%2C%0A%0AWe'd%20like%20to%20discuss%20..."
                >
                  Contact us
                </a>
                <a className="btn" href="#services">
                  Explore services
                </a>
              </div>
            </div>
            <div className="hero-visual card">
              <div className="visual">
                <div className="orbit">
                  <div className="planet"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div id="services-header" style={{ marginBottom: 8 }}>
            <div className="kicker">What we do</div>
            <h2 style={{ margin: '6px 0 2px' }}>Core capabilities</h2>
          </div>
          <div className="grid">
            {services.map((s) => (
              <article key={s.id} id={s.id} className="service card">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact">
          <div id="contact-header" style={{ marginBottom: 8 }}>
            <div className="kicker">Get in touch</div>
            <h2 style={{ margin: '6px 0 2px' }}>Let’s talk</h2>
          </div>
          <div className="card contact">
            <div className="row">
              <span className="label">Owner:</span>
              <strong>an-systems</strong>
            </div>
            <div className="row">
              <span className="label">Email:</span>
              <a href="mailto:anandP@an-systems.in">anandP@an-systems.in</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          © {new Date().getFullYear()} an-systems · Data processing · Data pipeline · Real-time processing · UI automation
        </div>
      </footer>
    </>
  );
};

export default OnePager;


