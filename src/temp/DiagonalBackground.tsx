// import { FC, ReactNode } from "react";
// import { useDarkTheme } from "../App";

// interface DiagonalBackgroundProps {
//   children: ReactNode;
// }

// const DiagonalBackground: FC<DiagonalBackgroundProps> = ({ children }) => {
//   const { darkTheme } = useDarkTheme();

//   return (
//     <div className="relative w-full h-screen max-w-screen-2xl mx-auto bg-blue-400 flex items-center justify-center">
//       {!darkTheme ? (
//         <>
//           <div className="absolute inset-0 bg-white "></div>
//           <div className="absolute inset-0 clip-diagonal bg-gradient-to-tl from-gradient-start to-gradient-end "></div>
//         </>
//       ) : (
//         <>
//           <div className="absolute inset-0  bg-gradient-to-br from-gradient-start to-gradient-end"></div>
//           <div className="absolute inset-0 clip-diagonal bg-gradient-to-tl from-slate-400 to-slate-800"></div>
//         </>
//       )}
//       <div className=" z-10">{children}</div>
//     </div>
//   );
// };

// export default DiagonalBackground;
