import React, { forwardRef } from 'react';
import { heroData, publicationData, timelineData } from '../../data/data';

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

function renderAuthors(authors: string) {
    return authors.split(',').map((raw, idx) => {
      const name = raw.trim();
      const node =
        name.toLowerCase() === 'xiangbo gao' ? (
        <strong key={idx}>
            <u>{name}</u>
        </strong>
        ) : (
          name
        );
      return idx === 0 ? node : [', ', node];
    });
  }

/* ---------------------------------------------------------------------- */
export const CVTemplate = forwardRef<HTMLDivElement>((_, ref) => {
  // ▶️  split timeline data into edu / exp (fallback if no explicit type)
  const all = timelineData;
  const education = all.filter(t => t.type === 'education');
  const experience = all.filter(t => t.type === 'experience');

  return (
    <div ref={ref} className="cv-container">
      {/* ------------------ HEADER ------------------ */}
      <header className="cv-header">
        <h1>{heroData.name}</h1>
        {heroData.description}
      </header>

      {/* ------------------ EDUCATION --------------- */}
      <section>
        <h2>Education</h2>
        <ul>
          {education.map(({ date, location, title }, idx) => (
            <li key={idx}>
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

      {/* ------------------ PUBLICATIONS ----------- */}
      <section>
        <h2>Publications</h2>
        <ol>
          {(publicationData).map((p, idx) => (
            <li key={idx}>
              {renderAuthors(p.authors)}. {p.title}.
              {p.conference && <> <em>{p.conference}</em>.</>}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
});

CVTemplate.displayName = 'CVTemplate';