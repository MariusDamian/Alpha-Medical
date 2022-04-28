import React from "react";
import AlphaSubtitle from "../Reutils/AlphaSubtitle";

function Subhero() {
  return (
    <div className='bg-alpha-green h-24 w-full'>
      <div className='max-w-[1440px] mx-auto flex flex-row items-center justify-start h-full space-x-20'>
        <AlphaSubtitle title='SERVICE AUTORIZAT' />
        <AlphaSubtitle title='DISTRIBUITORI EXCLUSIVI' />
        <AlphaSubtitle title='ECHIPAMENTE MEDICALE' />
      </div>
    </div>
  );
}

export default Subhero;
