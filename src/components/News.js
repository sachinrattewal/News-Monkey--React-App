import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setarticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalrecords, settotalrecords] = useState(0);
  const itemsperPage = 6;

  const updateNews = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${itemsperPage}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setarticles(parsedData.articles);
    settotalrecords(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };


  useEffect(() => {
    updateNews();
    document.title = `NewsMonkey - ${firstCap(props.category)} Headlines`
  }, [])

  const previousPage = async () => {
    setLoading(true);
    setpage(page - 1);
    updateNews();
  };

  const nextPage = async () => {
    setLoading(true);
    if (page + 1 > Math.ceil(totalrecords / itemsperPage)) {
    } else {
      setpage(page - 1);
      updateNews();
    }
  };

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${itemsperPage}`;
    setpage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    settotalrecords(parsedData.totalResults);
    setLoading(false);
  };

  const firstCap = (str) => {
    return str.charAt(0).toUpperCase() + str.substr(1);
  };

  return (
    <div className="container my-3">
      <h1 className="text-center" style={{ margin: "35px 0px", marginTop: '80px' }}>
        NewsMonkey - Top {firstCap(props.category)} Headlines
      </h1>
      {loading ? <Spinner /> : ''}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalrecords}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description.slice(0,180) : ""}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    publishedAt={element.publishedAt}
                    author={element.author}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* {!loading && <div className='container my-4' style={{display: "flex", justifyContent:"space-between"}}>
                    <button disabled={page<=1} className='btn btn-dark' onClick={previousPage}>&larr; Previous</button>
                    <button disabled={page+1>Math.ceil(totalrecords/itemsperPage)} className='btn btn-dark' onClick={nextPage}>Next &rarr;</button>
                </div>} */}
    </div>
  );
}
