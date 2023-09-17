// import {useState,createContext, useContext} from 'react';

// const ThemeContext =  createContext();

// const ThemeProvider =({childern})=>{
//     const[theme,setTheme]=useState('light')

//     return (
//         <ThemeContext.Provider value={[theme,setTheme]}>
//             {childern}
//         </ThemeContext.Provider>
//     );
// };
// // custom hook export
// const useTheme = () =>useContext(ThemeContext);
// export {useTheme,ThemeProvider};
import { useState, createContext, useContext } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children} {/* Corrected prop name */}
    </ThemeContext.Provider>
  );
};

// Custom hook export
const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
