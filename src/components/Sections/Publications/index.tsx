import {FC, memo} from 'react';

import {selected, onsubmission, autoPublicationsUnlisted, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import PublicationSection from './PublicationSection';
import PublicationItem from './PublicationItem';

const Publication: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Publications}>
      <h1 className="text-center text-2xl font-bold uppercase text-neutral-800 my-4">Publications</h1>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <PublicationSection title="Selected">
          {selected.map((item, index) => (
            <PublicationItem item={item} key={`${item.title}-${index}`} />
          ))}
        </PublicationSection>
        <PublicationSection title="Preprints">
          {onsubmission.map((item, index) => (
            <PublicationItem item={item} key={`${item.title}-${index}`} />
          ))}
        </PublicationSection>
        {autoPublicationsUnlisted.length > 0 && (
          <PublicationSection title="More Publications">
            {autoPublicationsUnlisted.map((item, index) => (
              <PublicationItem item={item} key={`${item.title}-${index}`} />
            ))}
          </PublicationSection>
        )}
      </div>
    </Section>
  );
});

Publication.displayName = 'Publication';
export default Publication;
