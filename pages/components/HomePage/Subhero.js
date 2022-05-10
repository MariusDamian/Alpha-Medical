import { React, useState, useEffect, useContext } from "react";
import AlphaSubtitle from "../Reutils/AlphaSubtitle";
import { dataContext } from "../../../Util/ContextData";

function Subhero() {
  const { eng, setEng } = useContext(dataContext);
  return (
    <div className='bg-alpha-green h-24 w-full'>
      <div className='max-w-[1440px] mx-auto flex flex-row items-center lg:justify-start justify-center h-full lg:space-x-20 px-10'>
        <AlphaSubtitle title={eng ? "SERVICE AUTORIZAT" : "AUTHORISED SERVICE"} />
        <AlphaSubtitle title={eng ? "DISTRIBUTIE EXCLUSIVA" : "EXCLUSIVE DISTRIBUTION"} />
        <AlphaSubtitle title={eng ? "SOLUTII PERFORMANTE" : "PERFORMANT SOLUTIONS"} />
      </div>
    </div>
  );
}

export default Subhero;
