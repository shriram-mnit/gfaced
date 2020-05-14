import React from 'react';
import './FaceRecognition.css';

function Box(props){
    const box=props.box;
    const listItems=[];
    for(var i=0;i<box.length ;i++)
   { listItems.push(<div className='bounding-box' style={{top: box[i].topRow, right: box[i].rightCol, bottom: box[i].bottomRow, left: box[i].leftCol}}></div>
   )}
    
  return(
        <div>
          {listItems[0]}{listItems[1]}{listItems[2]}{listItems[3]}{listItems[4]}{listItems[5]}{listItems[6]}{listItems[7]}{listItems[8]}{listItems[9]}
           {listItems[10]}{listItems[11]}{listItems[12]}{listItems[13]}{listItems[14]}{listItems[15]}{listItems[16]}{listItems[17]}{listItems[18]}{listItems[19]}
            {listItems[20]}{listItems[21]}{listItems[22]}{listItems[23]}{listItems[24]}{listItems[25]}{listItems[26]}{listItems[27]}{listItems[28]}{listItems[29]}
             {listItems[30]}{listItems[31]}{listItems[32]}{listItems[33]}{listItems[34]}{listItems[35]}{listItems[36]}{listItems[37]}{listItems[38]}{listItems[39]}
              {listItems[40]}{listItems[41]}{listItems[42]}{listItems[43]}{listItems[44]}{listItems[45]}{listItems[46]}{listItems[47]}{listItems[48]}{listItems[49]}
               {listItems[50]}{listItems[51]}{listItems[52]}{listItems[53]}{listItems[54]}{listItems[55]}{listItems[56]}{listItems[57]}{listItems[58]}{listItems[59]}
                {listItems[60]}{listItems[61]}{listItems[62]}{listItems[63]}{listItems[64]}{listItems[65]}{listItems[66]}{listItems[67]}{listItems[68]}{listItems[69]}
          
</div>
)

}

const FaceRecognition = ({ imageUrl, box }) => {
 return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>

         <Box box={box} />
        
        
 </div>
    </div>
  );
}

export default FaceRecognition;
