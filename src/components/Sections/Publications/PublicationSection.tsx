import {FC, memo, PropsWithChildren} from 'react';

const PublicationSection: FC<PropsWithChildren<{title: string}>> = memo(({title, children}) => {
  return (
    <div>
      <h1 className='text-xl font-bold uppercase text-neutral-800 my-2'>{title}</h1>
      <div>{children}</div>
    </div>
  );
});

PublicationSection.displayName = 'PublicationSection';
export default PublicationSection;
