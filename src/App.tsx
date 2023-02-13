// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import { Magic } from "magic-sdk";
// import Home from "./Home";

// function App() {
//   const [value, setValue] = React.useState("");

//   return (
//     <div className="App">
//       <form
//         onSubmit={async (e) => {
//           e.preventDefault();

//           try {
//             const magic = new Magic(
//               process.env.REACT_APP_MAGIC_PUBLISHABLE_KEY as string
//             );
//             const didToken = await magic.auth.loginWithMagicLink({
//               email: value,
//             });
//             console.log(value);
//             console.log(didToken);

//             setValue("");
//           } catch (err) {
//             console.log(err);
//           }
//         }}
//       >
//         <input
//           type="text"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>

//       <Home />
//     </div>
//   );
// }

// export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Magic } from "magic-sdk";
import Home from "./Home";

function App() {
  const [value, setValue] = React.useState("");

  return <div className="App"></div>;
}

export default App;
