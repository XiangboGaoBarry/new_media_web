import {FC, memo} from 'react';
import Image from 'next/image';

import {PublicationItem} from '../../../data/dataDef';

const PublicationItem: FC<{item: PublicationItem}> = memo(({item}) => {
  const {title, authors, imageSrc, conference, paperlink, paperlinksmall, githublink, description} = item;
  return (
      <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0 md:grid-cols-4">
        <div className="col-span-3 flex-col md:col-span-3">
          <h2 className="text-xl font-bold my-1">{title}</h2>
          <h3 className="text-sm">{authors}</h3>
          <h3 className="text-sm">{conference}</h3>
          <div>
            <a className="italic text-cyan-700 hover:not-italic" href={paperlink}>Paper</a><span> | </span> 
            <a className="italic text-cyan-700 hover:not-italic" href={paperlinksmall}>Compressed Paper</a> 
            {githublink && <span> | <a className="italic text-cyan-700 hover:not-italic" href={githublink}>Code</a></span>}
          </div>
          <p className="text-md">{description}</p>
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

