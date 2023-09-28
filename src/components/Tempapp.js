import React  ,{useEffect ,useState } from 'react' ;
import './css/style.css';

const Tempapp =() => {
    const [city , setCity] = useState(null);
    const [search , setSearch] = useState("Bhimavaram");

    useEffect(() => {
           const fetchApi = async() =>{
            const url = ''
            const response = await fetch();
           }
          fetchApi();
    })
    return(
        <>
           <div className = 'box'>
            <div className='inputData'>
                <input type ="search" className ='inputFeild' onChange={(event) => {

                }}   />
            </div>
           </div>

           <div className = 'info'>
              <h2 className='location'> </h2>
           </div>
        </>
   )
    
}
export default Tempapp;

  