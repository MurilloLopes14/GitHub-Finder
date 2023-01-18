//* Styles
import { LoaderStyle } from "./LoaderStyle";

//* Components
import { ClockLoader } from "react-spinners";

type Props = {};

export const Loader = (props: Props) => {
  return (
    <LoaderStyle>
      <ClockLoader
        size={100}
        color={"#9CB9C9"}
        cssOverride={{ boxShadow: "0 0 5px 5px #9cb9c9" }}
      />
    </LoaderStyle>
  );
};
