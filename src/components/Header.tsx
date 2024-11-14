import { FC } from "react";
import Lottie from "lottie-react";
import todoAnimation from "../assets/todo-animation.json";

const Header: FC = () => {
  return (
    <div className="w-full md:pl-10 lg:pl-28 xl:pl-48 py-4 flex items-center">
      <Lottie
        className="w-24 drop-shadow-lg "
        animationData={todoAnimation}
        loop
        autoPlay
      />
      <div className="text-2xl font-redHatText font-bold">TODO</div>
    </div>
  );
};

export default Header;
