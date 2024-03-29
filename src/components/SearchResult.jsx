import React,{useState,useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom'
import {fetchDataFromApi} from '../utils/api'
import LeftNav from '../components/LeftNav'
import SearchResultVideoCard from './SearchResultVideoCard'
import { Context } from "../context/contextApi";

const SearchResult = () => {
  const[result , setResult] = useState()
  const {searchQuery} = useParams()
  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h")
    fetchSearchResults()
  },[searchQuery])

  const fetchSearchResults = () => {
    setLoading(true)
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
      setResult(res?.contents)
      setLoading(false)
    })
  }

  return (
    <div className='flex flex-row h-[calc(100%-56px)] '>
      <LeftNav/>
      <div className='grow w-[calc(100%-256px)] bg-black h-full overflow-y-auto'>
        {result?.map((item) => {
          if (item?.type !== "video") return false; 
          let video = item.video
          return ( 
          <SearchResultVideoCard
             key= {video.videoId} 
             video={video}
          /> )
        })}
      </div>
    </div>
  )
}

export default SearchResult