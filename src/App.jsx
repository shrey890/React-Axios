import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
	const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState('');
  // ! Promise Method
	// useEffect(() => {
	// 	axios
	// 		.get(`https://jsonplaceholder.typicode.com/posts`)
	// 		.then((response) => setMyData(response.data))
  //     .catch((error) =>setIsError(error.message))
	// }, []);
  // ! Async Method
  const apiData = async()=>{
try {
  const response =await axios.get('https://jsonplaceholder.typicode.com/posts')
  setMyData(response.data);
} catch (error) {
  setIsError(error.message);
}
  }
  useEffect(()=>{
    apiData()
  
  },[])
	return (
		<div >  
    <h1>Axios</h1>
{isError !== '' && <h2>{isError}</h2>}
    <div className="grid">

			{myData.slice(0,10).map(({ id, title, body }) => (
				<div key={id} className="card">
					<h2>{title.slice(0,15).toUpperCase()}</h2>
					<p>{body.slice(0,120)}</p>
				</div>
			))}
		</div>
    </div>

	);
};

export default App;
