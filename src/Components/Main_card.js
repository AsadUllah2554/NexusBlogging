import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import './cards.css';
import { auth } from '../firebase-config';

const Card = (props) => {
  return (
    <div className="card">
           
      <div className="card-content">
     
        <h2 className="card-title">{props.title}</h2>

     { props.auth && props.autherId === auth.currentUser.uid && <i class="ri-delete-bin-line del-btn"
        onClick={()=>props.deletePost(props.id)}
        ></i>}
        <p >{props.post}</p>
        <p className="card-date">{moment(props.date).format('MMMM Do YYYY')}</p>
        <h6>@{props.name}</h6>
        
        <ReactMarkdown className="card-excerpt" source={props.excerpt} />
        <Link to={`/post/${props.id}`} className="card-link">Read More</Link>
      </div>
    </div>
  );
}

export default Card;
