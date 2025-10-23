import {FC, memo} from 'react';

import {SectionId, services} from '../../data/data';
import Section from '../Layout/Section';

const Services: FC = memo(() => {
  return (
    <Section className="bg-neutral-50" sectionId={SectionId.Services}>
      <h1 className="my-4 text-center text-2xl font-bold uppercase text-neutral-800">Professional Services</h1>
      <div className="space-y-6">
        {services.map(({title, description, date}, index) => {
          const trimmedDate = date.trim();
          const descriptionContent =
            typeof description === 'string' ? <p className="text-neutral-700">{description}</p> : description;
          return (
            <article className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-neutral-200" key={`${title}-${index}`}>
              <h2 className="text-lg font-semibold text-neutral-900">{title}</h2>
              {trimmedDate && <p className="text-sm text-neutral-500">{trimmedDate}</p>}
              <div className="mt-3 text-sm text-neutral-700 [&_a]:text-cyan-700 [&_a:hover]:not-italic [&_a]:italic">
                {descriptionContent}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
});

Services.displayName = 'Services';
export default Services;
