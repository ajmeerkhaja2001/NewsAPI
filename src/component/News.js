import React, { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
// import upArrow from './uparrow.svg'
import Spinner from "./spinner";
import InfiniteScroll from "react-infinite-scroll-component";
const News =(props)=> {
  const navigattop=()=>{
    window.scrollTo(0,0);
  }
  
  const a = [
     {
       status: "ok",
       totalresults: 20,
       articles: [
         {
           source: {
             id: "engadget",
             name: "Engadget",
           },
           author: "Mariella Moon",
           title:
             "Beats Studio Buds+ leak on Amazon with a May 18th release date",
           description:
             "Beats might release its next-gen Studio Buds model on May 18th. MacRumors spotted an Amazon listing that showed images and details for Apple's Beats Studio Buds+ — the page even allowed customers to pre-order the earbuds until it was yanked offline. The earbu…",
           url: "https://www.engadget.com/beats-studio-buds-leak-on-amazon-with-a-may-18th-release-date-091639570.html",
           urlToImage:
             "https://s.yimg.com/uu/api/res/1.2/gP2crGO5235WlAW8JtSefg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/d71767a0-e408-11ed-ade5-2f185ffd3c47.cf.jpg",
           publishedAt: "2023-04-26T09:16:39Z",
           content:
             "Beats might release its next-gen Studio Buds model on May 18th. MacRumors spotted an Amazon listing that showed images and details for Apple's Beats Studio Buds+ the page even allowed customers to pr… [+1587 chars]",
         },
        
       
         
        
         
       ],
     },
   ];
const[articles,setArticles]=useState(a)
const[loading,setLoading]=useState(false)
const[page,setPage]=useState(1)
// const[pagesize,setPageSize]=useState()
const[totalresults,setTotalresults]=useState(0)


  // document.title= ` ${props.catagorie} - daily News`;

  // useEffect(() => {
  //   fetchNews();
  // }, [useLocation()]);



 
  // const pageupdate=async ()=> {
  //   // let url=`https://newsapi.org/v2/everything?q=apple&from=2023-04-27&to=2023-04-27&sortBy=popularity&apiKey=2ee58c09bbf640eb83c208ac171e7e0d&page=${ page-1}&pagesize${ pagesize}`;
  //   // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.catagorie}&page=${pageno}&pagesize=12&apiKey=2ee58c09bbf640eb83c208ac171e7e0d`;
  
  //   //the below url has key of ajukhajaajmeer786@gmail.com
  
  //   let url =`https://newsapi.org/v2/top-headlines?country=in&category=${props.catagorie}&page=${page}&pagesize=12&apiKey=e9530c6d6bb140e29bbd8868c82a2f3d`;
    
  // setLoading(true)
  //   props.setProgress(30);
  
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
    
  
  //   console.log(parsedData);
    
  // setArticles(parsedData.articles)
  // setPage(page)
  // setLoading(false)
  // setTotalresults(parsedData.totalResults)

  
  // }
 
    useEffect(() => {
      
    const fetchData = async () => {
      let url =`https://newsapi.org/v2/top-headlines?country=in&category=${props.catagorie}&page=${page}&pagesize=12&apiKey=e9530c6d6bb140e29bbd8868c82a2f3d`;
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles);
      setTotalresults(data.totalResults)
      

    };

    fetchData();
  }, [useLocation()]);
  const fetchMoreDate =async ()=>{
    //  setPage(page+1)
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.catagorie}&page=${ state.page}&pagesize=12&apiKey=2ee58c09bbf640eb83c208ac171e7e0d`;

    // the below url has key of ajukhajaajmeer786@gmail.com

    // let url =`https://newsapi.org/v2/top-headlines?country=in&category=${props.catagorie}&page=${ page}&pagesize=12&apiKey=e9530c6d6bb140e29bbd8868c82a2f3d`;

    
     setLoading(true);

     let url =`https://newsapi.org/v2/top-headlines?country=in&category=${props.catagorie}&page=${page+1}&pagesize=12&apiKey=e9530c6d6bb140e29bbd8868c82a2f3d`;
     //eslint-disable-next-line
     setPage(page+1)

    let response = await fetch(url);
    let parsedData = await response.json();
    setArticles(articles.concat(parsedData.articles))

   
    
  }
  
    return (
      <div className="container " >
        
        <h2 id="myaknews"> Top {props.catagorie} Headlines </h2>
<InfiniteScroll dataLength={ articles.length} next = { fetchMoreDate} hasMore = { articles.length<= totalresults} loader = {<Spinner/>}>

        <div id="newsitems" className="grid">
          { articles.map((element) => {
            return (
              <NewsItem
                newsurl={element.url} title={element.title} description={element.description} imgurl={element.urlToImage} aurthor={element.author} date={element.publishedAt} 
              />
            );
          })}

        
        </div>
        </InfiniteScroll>
        <div id='topbtndiv'className="fixed-bottom">
  <button type="button" className="" id="topbtn" onClick={ navigattop}>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
</svg></button>
</div>

      </div>
    );
  }

News.defaultProps = {
  catagorie: "business",
};
News.propTypes = {
  catagorie: PropTypes.string,
};
export default News