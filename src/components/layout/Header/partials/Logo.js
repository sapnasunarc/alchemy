import { Image } from "../../../elements/image";
import blackLogo from "../../../../assets/images/black-alchemy.svg";
import { Link } from "react-router-dom";

export const Logo = ({ ...props }) => {
  return (
    <Link to="/" {...props}>
      <Image src={blackLogo} alt="Logo" width={150} />
    </Link>
  );
};
