import { FC, memo } from 'react';

import Page from '../components/Layout/Page';
import Introduction from '../components/Sections/Introduction';
import MediaUsage from '../components/Sections/MediaUsage';
import Challenge from '../components/Sections/Challenge';
import { homePageMeta } from '../data/data';

const Home: FC = memo(() => {
  const { title, description } = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Introduction />
      <MediaUsage />
      <Challenge />
    </Page>
  );
});

export default Home;
