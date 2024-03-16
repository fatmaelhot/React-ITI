import React from 'react';


const AboutMe = () => {


  return (
    <div className="container-fluid  bg-white">
      <div className="row">
      <div id="myabout" className=" pt-2">
    <div className="about text-dark d-flex justify-content-center align-items-center py-5">
        <h2 className="text-uppercase mb-3 fs-2 fw-bolder pt-1">ABOUT ME </h2>
    </div>
    <div  className="d-flex align-items-center justify-content-center mb-3">
       
    <div className="container d-flex justify-content-center px-1 text-dark py-3">
        <p className="w-50">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, beatae. Corrupti suscipit nesciunt iusto obcaecati voluptate vitae. Sequi quidem unde ipsa fugiat iusto, quas atque, facilis, aliquam ea eaque qui.
        </p>
        <button type="button" className="btn btn-secondary m-1 p-2 w-25 pt-1 fs-5 pb-2 ">Dowenload CV</button>
    </div>
   </div>
   </div>
      </div>
    </div>
  );
};

export default AboutMe;
