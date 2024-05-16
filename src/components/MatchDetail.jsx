import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import InPageNavigation from "./InPageNavigation";


function MatchDetail() {
  let {id} = useParams();

 
  
const [data,setData] = useState([])
async function FetchMatchDetail(){
  const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':  import.meta.env.VITE_API_KEY,
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	
  setData(result);
} catch (error) {
	console.error(error);
}
}


useEffect ( () => {
  FetchMatchDetail()
},[])

return (
    <div>
    <div className="w-full text-center p-4 font-semibold">Match Detail</div>
    {data.length <= 0 ? (
         <h1>loading...</h1>
         ) : (
           <InPageNavigation 
           teams={[
            data.matchInfo.team1.shortName,data.matchInfo.team2.shortName,

           ]}>
            
    
    


    {
      data.matchInfo.team1.playerDetails.map((data,i) =>(
        <h1 key={i}>
          <p className="text-2xl">{data.fullName}</p>
          <p className="opacity-50">{data.role}</p>
        </h1>
      ))
    }
    {
      data.matchInfo.team2.playerDetails.map((data,i) =>(
        <h1 key={i}>
          <p className="text-2xl">{data.fullName}</p>
          <p className="opacity-50">{data.role}</p>
        </h1>
      ))
    }
  

   </InPageNavigation>
   )}
      </div>
  
    
  
  );
}



export default MatchDetail;