

// import BatmanCards from "./components/BatmanCards";// 1) importing as Default 
import Header, { BatmanCards, Footer } from "./components/BatmanCards"; // 2) importing as Obj(Named)/
// Advantage of Named Import/Export is : get many functions improt & export
// also MIXED Import/Export can be done . BEST***: syntax:  default , {named}

// a Parent function
export const App = () => {
  // IMP: always Put  : a wraper(IMP: Fragment) ,  inside it any no. of children tages can be placed
  return (
    <>
      <Header/>
      
      <BatmanCards />
      <BatmanCards />
      <BatmanCards />

      <Footer/>
      
    </>
  );
};




