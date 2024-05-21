import React from "react";

function UserDetails({ params }: { params: any }) {
  return <div style={{backgroundColor: "green"}}>UserDetails {params.userId}</div>;
}

export default UserDetails;
