import React from "react";
import {BounceLoader} from 'react-spinners'

function Loading() {
  return (
    <div className="py-40 flex justify-center items-center">
      <BounceLoader color="#004fff" />
    </div>
  );
}

export default Loading;
