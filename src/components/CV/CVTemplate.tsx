import React, { forwardRef } from 'react';
import { heroData, publicationData, timelineData, 
    aboutItem, employmentItem, competitionItem, contactItem, socialLinksItem,
    services,
} from '../../data/data';
import {
    ContactType,
  } from '../../data/dataDef';

/* --- minimal local types ---------------------------------------------- */
// type TimelineItem = {
//   date: string;
//   location: string;
//   title: string;
//   content?: React.ReactNode;
//   type?: 'education' | 'experience'; // your data.tsx may include it
// };

// type PublicationItem = {
//   title: string;
//   authors: string;
//   conference?: string;
// };

/* ---- 作者渲染：加粗+下划线 “Xiangbo Gao” ---- */
function renderAuthors(authors: string) {
    return authors.split(',').map((raw, idx) => {
      const name = raw.trim();
      const styled =
        (name.toLowerCase() === 'xiangbo gao' || name.toLowerCase() === 'x gao') ? (
          <strong key={idx}>
            <u>{name}</u>
          </strong>
        ) : (
          name
        );
      return idx === 0 ? styled : [', ', styled];
    });
  }
  
  /* ---- 过滤 & 处理 Publication 数据 ---- */
  const ALL_PUBS = publicationData;
  
  /* 1) 先区分 arXiv (不区分大小写匹配 “arxiv”) */
  const preprints = ALL_PUBS.filter(p =>
    /arxiv/i.test(p.conference || p.title),
  );
  const published = ALL_PUBS.filter(p => !/arxiv/i.test(p.conference || p.title));
  
  /* 2) 去掉 “, YYYY” 尾巴 */
  function cleanVenue(str = '') {
    return str.replace(/,\s*\d{4}$/u, '').trim();
  }

  function etalauthor(str = '') {
    return str.replace('...', 'et al.').trim();
  }
/* ---------------------------------------------------------------------- */
export const CVTemplate = forwardRef<HTMLDivElement>((_, ref) => {
  // ▶️  split timeline data into edu / exp (fallback if no explicit type)
  const all = timelineData;
  const education = all.filter(t => t.type === 'education');
  const experience = all.filter(t => t.type === 'experience');
  const hobbyItem = aboutItem.aboutItems.find(a => a.label === 'Interests');

  return (
    <div ref={ref} className="cv-container">
      {/* ------------------ HEADER ------------------ */}
      <header className="cv-header">
        <h1>{heroData.name}</h1>
        <div className="cv-socials">
          {socialLinksItem.map(({ href, Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" title={label}>
              <Icon className="cv-social-icon" />
            </a>
          ))}
        </div>
        {heroData.description}
      </header>

      {/* ---------- CONTACT & SOCIAL ---------- */}
      <section>
      <h2>Contact</h2>
        <ul className="cv-contact">
            {contactItem.items
            .filter(i => i.type === ContactType.Email)   // ← 仅保留 Email
            .map((c, idx) => (
                <li key={idx}>
                Email: {c.text}
                </li>
            ))}
        </ul>

        {/* <div className="cv-socials">
          {socialLinksItem.map(({ href, Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" title={label}>
              <Icon className="cv-social-icon" />
            </a>
          ))}
        </div> */}
      </section>

      {/* ------------------ EDUCATION --------------- */}
      <section>
        <h2>Education</h2>
        <ul>
            {education.map(({ date, location, title }, idx) => (
            <li key={idx} className="cv-two-col">
                <span>
                <strong>{title}</strong>, {location}
                </span>
                <span className="cv-date">{date}</span>
            </li>
            ))}
        </ul>
    </section>

      {/* ------------------ EXPERIENCE -------------- */}
      {experience.length > 0 && (
        <section>
          <h2>Experience</h2>
          <ul>
            {experience.map(({ date, location, title, content }, idx) => (
              <li key={idx}>
                <span>
                  <strong>{title}</strong>, {location}
                  {content}
                </span>
                <span className="cv-date">{date}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

        {/* Publications */}
        {published.length > 0 && (
        <section>
            <h2>Publications</h2>
            <ol>
            {published.map((p, idx) => (
                <li key={idx} className="pub-item">
                <div>
                  <a
                    href={p.paperlink}
                    target="_blank"
                    rel="noreferrer"
                    className="pub-link"
                  >
                    <span className="pub-icon">🔗</span>
                    <span className="pub-title">{p.title}</span>
                  </a>
                  <div className="pub-conf">{cleanVenue(p.conference)}</div>
                </div>
                <div className="pub-auth">{renderAuthors(etalauthor(p.authors))}</div>
              </li>
            ))}
            </ol>
        </section>
        )}

        {/* Preprints */}
        {preprints.length > 0 && (
        <section>
            <h2>Preprints</h2>
            <ol>
            {preprints.map((p, idx) => (
                <li key={idx} className="pub-item">
                <div>
                    <a
                    href={p.paperlink}
                    target="_blank"
                    rel="noreferrer"
                    className="pub-link"
                    >
                    <span className="pub-icon">🔗</span>
                    <span className="pub-title">{p.title}</span>
                    </a>
                </div>
                <div className="pub-auth">{renderAuthors(etalauthor(p.authors))}</div>
                </li>
            ))}
            </ol>
        </section>
        )}
    {/* ---------- EMPLOYMENT ---------- */}
    
    {employmentItem.length > 0 && (
    <section>
        <h2>Employment</h2>
        <ul>
        {employmentItem.map(({ date, location, title }, idx) => (
            <li key={idx} className="cv-two-col">
            <span>
                <strong>{title}</strong>, {location}
            </span>
            <span className="cv-date">{date}</span>
            </li>
        ))}
        </ul>
    </section>
    )}

    {/* ---------- SERVICES ---------- */}
    {services.length > 0 && (
    <section>
        <h2>Services</h2>
        <ul>
        {services.map(({ date, title, description }, idx) => (
            <li key={idx} className="cv-two-col">
            <span>
                <strong>{title}</strong>
                {description && <div>{description}</div>}
            </span>
            <span className="cv-date">{date}</span>
            </li>
        ))}
        </ul>
    </section>
    )}

    {/* ---------- COMPETITIONS / AWARDS ---------- */}
    {competitionItem.length > 0 && (
    <section>
        <h2>Awards & Competitions</h2>
        <ul>
        {competitionItem.map(({ date, title, content }, idx) => (
            <li key={idx} className="cv-two-col">
            <span>
                <strong>{title}</strong>
                {content /* 详情段保持原样，可是 <p> / 文本 */}
            </span>
            <span className="cv-date">{date}</span>
            </li>
        ))}
        </ul>
    </section>
    )}

    {/* ---------- HOBBIES ---------- */}
    {hobbyItem && (
        <section>
          <h2>Hobbies</h2>
          <p>{hobbyItem.text}</p>
        </section>
    )}
    </div>
  );
});
CVTemplate.displayName = 'CVTemplate';