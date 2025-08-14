import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  return (
    <div>
      <h4>The param passed is:{id}</h4>
    </div>
  );
}

export default UserDetails;
