import React from "react";
import AlphaSubtitle from "../Reutils/AlphaSubtitle";

function Subhero() {
  return (
    <div className='bg-alpha-green h-24 w-full'>
      <div className='max-w-[1440px] mx-auto flex flex-row items-center lg:justify-start justify-center h-full lg:space-x-20 px-10'>
        <AlphaSubtitle title='SERVICE AUTORIZAT' />
        <AlphaSubtitle title='DISTRIBUTIE EXCLUSIVA' />
        <AlphaSubtitle title='SOLUTII PERFORMANTE' />
      </div>
    </div>
  );
}

export default Subhero;
