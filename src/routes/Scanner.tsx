import { useNavigate } from "react-router-dom";

function Scanner() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Scanner</h1>
      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={() => navigate("/pantry")}
      />
    </>
  );
}

export default Scanner;
