import { certifications } from "../constants";

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const Seal = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m12 3 2.2 1.6 2.7-.1.8 2.6 2.2 1.5-.9 2.6.9 2.6-2.2 1.5-.8 2.6-2.7-.1L12 21l-2.2-1.6-2.7.1-.8-2.6-2.2-1.5.9-2.6-.9-2.6 2.2-1.5.8-2.6 2.7.1L12 3Z" />
    <path d="m9.2 12 1.8 1.8 3.9-4" />
  </svg>
);

const Certifications = () => {
  return (
    <div className="cert-shell max-w-7xl mx-auto px-6">
      <div className="cert-heading">
        <div>
          <div className="cert-eyebrow"><span /> Professional development</div>
          <h2><span>Professional</span><br />Certifications</h2>
        </div>
        <div className="cert-heading-copy">
          <p>Verified certifications from leading technology organizations, covering data, AI, cloud, security, and business intelligence.</p>
          <div className="cert-summary">
            <strong>{String(certifications.length).padStart(2, "0")}</strong>
            <span>Verified<br />certifications</span>
          </div>
        </div>
      </div>

      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            key={cert.link}
            className="cert-card"
            aria-label={`View ${cert.name} certificate`}
          >
            <div className="cert-card-glow" />
            <div className="cert-card-top">
              <div className="cert-provider" aria-hidden="true">
                {cert.issuer.charAt(0)}
              </div>
              <span className="cert-verified"><Seal /> Verified certification</span>
              <span className="cert-arrow"><ArrowUpRight /></span>
            </div>
            <div className="cert-card-body">
              <span className="cert-index">Certification {String(index + 1).padStart(2, "0")}</span>
              <h3>{cert.name}</h3>
            </div>
            <div className="cert-card-footer">
              <span>{cert.issuer}</span>
              <time>{cert.date}</time>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
