import React from "react";

export default function NewsItem(props) {
    return (
      <div className="my-3">
        <div className="card" style={{backgroundColor: "#F2F2F2"}}>
          <img src={props.imgUrl ? props.imgUrl : "https://media3.s-nbcnews.com/i/newscms/2018_21/2442281/og-nbcnews1200x630_c986de7e1bb6ad2281723b692aa61990.png"} className="card-img-top" style={{maxHeight:'220px'}}  />
          <div className="card-body" style={{maxHeight: '400px', minHeight: '300px'}}>
            <h5 className="card-title"><a href={props.newsUrl} target="_blank" style={{textDecoration:'none', color: '#152238', fontSize:'18px'}} title={props.title}>{props.title}</a></h5>
            <p className="card-text" style={{fontSize: '14px'}}>
              {props.description ? props.description : props.title}...
            </p>
            <p className="card-text my-2"><small className="text-muted">Source {props.source}</small></p>
            <p className="card-text"><small className="text-muted">Published By {props.author ? props.author: 'Unknown'} on {new Date(props.publishedAt).toDateString()}</small></p>
            <a href={props.newsUrl} target="_blank" className="btn btn-sm btn-dark">
             Read More
            </a>
          </div>
        </div>
      </div>
    );
}
