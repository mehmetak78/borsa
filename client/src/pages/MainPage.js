import React from 'react';
import HisseCard from "../components/HisseCard";


const MainPage = () => {

  return (
    <div className="container-mak">
      <HisseCard title="ASELS" img = "http://unsplash.it/100/100" />
      <HisseCard title="THYAO" img = "http://unsplash.it/101/101" />
      <HisseCard title="GARAN" img = "http://unsplash.it/102/102" />
      <HisseCard title="TAV" img = "http://unsplash.it/103/103" />
    </div>
  );
};

export default MainPage;
