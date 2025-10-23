import {FC, memo} from 'react';
import Image from 'next/image';

import type {PublicationItem} from '../../../data/dataDef';

const PublicationItem: FC<{item: PublicationItem}> = memo(({item}) => {
  const {title, authors, imageSrc, conference, paperlink, paperlinksmall, githublink, description, projectpage} = item;
  const trimmedAuthors = authors.trim();
  const trimmedConference = conference.trim();
  const trimmedDescription = description.trim();

  const trimmedProjectPage = projectpage.trim();
  const trimmedPaperLink = paperlink.trim();
  const trimmedCompressedPaperLink = paperlinksmall.trim();
  const trimmedGithubLink = githublink.trim();

  const links = [
    trimmedProjectPage ? {href: trimmedProjectPage, label: 'Project Page'} : null,
    trimmedPaperLink ? {href: trimmedPaperLink, label: 'Paper'} : null,
    trimmedCompressedPaperLink && trimmedCompressedPaperLink !== trimmedPaperLink
      ? {href: trimmedCompressedPaperLink, label: 'Compressed Paper'}
      : null,
    trimmedGithubLink ? {href: trimmedGithubLink, label: 'Code'} : null,
  ].filter((link): link is {href: string; label: string} => link !== null);

  return (
      <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0 md:grid-cols-4">
        <div className="col-span-3 flex-col md:col-span-3">
          <h2 className="text-xl font-bold my-1">{title}</h2>
          {trimmedAuthors && <h3 className="text-sm">{trimmedAuthors}</h3>}
          {trimmedConference && <h3 className="text-sm">{trimmedConference}</h3>}
          {links.length > 0 && (
            <div>
              {links.map(({href, label}, index) => (
                <span key={label}>
                  {index > 0 && ' | '}
                  <a className="italic text-cyan-700 hover:not-italic" href={href}>{label}</a>
                </span>
              ))}
            </div>
          )}
          {trimmedDescription && <p className="text-md">{trimmedDescription}</p>}
        </div>
        {!!imageSrc && (
            <div className="col-span-1 mx-8 flex justify-center md:justify-start">
              <div className="relative h-120 w-100">
                <Image alt="about-me-image" objectFit="cover" src={imageSrc} />
              </div>
            </div>
          )}
    </div>
  );
});

PublicationItem.displayName = 'PublicationItem';
export default PublicationItem;
