import { useEffect, useState } from 'react';
import './App.css';
import Search from './component/Search';
import Usercard from './component/Usercard';
import axios from 'axios';
import { useContext } from 'react';
import { Searchcontext } from './context/Searchcontext';
import Detailsuser from './component/Detailsuser';

function App() {
  const {text} = useContext(Searchcontext);
  const [data , setdata] = useState([]);
  const [page , setpage] = useState(1)

// when search somthing the previous data will be empty 
  useEffect(()=>{
    setdata([]);
    setpage(1)
  },[text])

  // API fetch call with debouncing 
  useEffect(() => {
    let cancel
    axios({
      method: 'GET',
      url: `https://rickandmortyapi.com/api/character/?name=${text}&page=${page}`,
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setdata(data => {
        return [...new Set([...data, ...res.data.results])]
      })
    }).catch(e => {
      if (axios.isCancel(e)) return
    })
    return () => cancel()
  }, [text, page])


  // infinity scroll
  useEffect(() => {
    function handleScroll() {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight){
        return;
      }else{
        setpage(page+1);
      }
      
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page]);

  

  return (
    <div className="App">
      <Search/>
      {data.map((obj,index)=>{
        return <Usercard obj={obj} key={index}/>
      })}
      <Detailsuser/>

    </div>
  );
}

export default App;
