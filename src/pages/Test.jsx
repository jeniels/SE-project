import React from 'react';
import { Helmet } from 'react-helmet';


function Test() {
  return (
   <>
    <Helmet>
        <script src="./src/script/code.js"></script>
    </Helmet>
    <div className="se-widget" data-widget="lCfDTm46Vx" style={{ height: '100px' }}/>
    {/* <iframe src = "http://localhost:8501/"/> */}
    </>    
  )
}

export default Test