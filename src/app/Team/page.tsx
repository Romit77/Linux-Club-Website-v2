import React , {lazy} from "react";

export default function Team() {
   
  const Members = lazy(()=>import("@/components/component/Members"));

  return (
    <div>
      <Members />
    </div>
  );
}
