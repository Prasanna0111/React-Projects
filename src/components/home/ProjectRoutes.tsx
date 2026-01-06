import { useNavigate } from "react-router-dom";
import CustomButton from "../common/CustomButton";

export default function ProjectRoutes() {
  const navigate = useNavigate();
  return (
    <div>
      <CustomButton
        name={"Counter"}
        route={() => {
          navigate("/counter");
        }}
      />
      <CustomButton
        name={"Show / Hide"}
        route={() => {
          navigate("/showhide");
        }}
      />
      <CustomButton
        name={"To Do"}
        route={() => {
          navigate("/todo");
        }}
      />
    </div>
  );
}
