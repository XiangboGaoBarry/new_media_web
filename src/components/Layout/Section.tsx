import classNames from 'classnames';
import { memo, type PropsWithChildren } from 'react';
import type { SectionId } from '../../data/data';

type SectionProps = PropsWithChildren<{
  sectionId: SectionId;
  sectionTitle?: string;
  noPadding?: boolean;
  className?: string;
}>;

const Section = memo(({ children, sectionId, noPadding = false, className }: SectionProps) => {
  return (
    <section
      id={sectionId}
      className={classNames(className, { 'px-4 py-16 md:py-24 lg:px-8': !noPadding })}
    >
      <div className={classNames({ 'mx-auto max-w-screen-xl': !noPadding })}>
        {children}
      </div>
    </section>
  );
});

Section.displayName = 'Section';
export default Section;