import React,{Fragment} from "react";
import Cards from "./components/Cards";
// import "./index.css";
import NetflixData from "./components/NetflixData";

function App() {

  // const currentDate = new Date().toLocaleDateString();
  // const currentTime = new Date().toLocaleTimeString();

  // let curDate = new Date();
  // curDate = curDate.getHours();
  // let greeting = '';
  // let cssStyle = { };

  // if(curDate >=1 && curDate <12)
  // {
  //   greeting = 'Good Morning';
  //   cssStyle.color = "green";
  // }else if(curDate >=12 && curDate <19)
  // {
  //   greeting = 'Good Afternoon';
  //   cssStyle.color = "orange";
  // }else{
  //   greeting = 'Good Night';
  //   cssStyle.color = "black";
  // }


  return (
    <Fragment>
    {/* <div>
        <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
    </div> */}
    <h1 className="heading__style">list of Top 5 netflix series in 2021</h1>
    {
      NetflixData.map((value,i) => {
        return(
          <div key={i}>
            <Cards 
              imgsrc={value.imgsrc}
              title={value.title}
              sname={value.sname}
              link={value.link}
            />
        </div>
        );
      })
    }
    </Fragment>
  );
}

export default App;
