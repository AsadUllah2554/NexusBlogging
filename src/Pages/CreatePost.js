import React,{useState,useEffect} from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreatePost(props){
    let navigate =useNavigate();

    useEffect(() => {
        if(!props.auth){
            navigate("/login")
        }
    }, []);

    
    const [data,setData] = useState({
        title:"",
        post:""

    })

    function handleChange(event){
        // It is good practice to destruct event object and pull out the value you need to use instead of [event.target.name] : event.target.value
        const {name,value } = event.target
        setData(prevData=>{
        return{
            ...prevData,
            [name] :  value, 
        }
       })
    }


    function handleSubmit(event){
        event.preventDefault()

    }

    const postsCollectionRef = collection(db,"posts")
    const createPost = async ()=>{
        //addDoc takes 2 arguments,1st: name of collection,2nd argument data we want to add
await addDoc(postsCollectionRef,
    {title:data.title,postText:data.post,author:{name: auth.currentUser.displayName ,id:auth.currentUser.uid}})

    navigate("/")
    }
    
    return(
        <div className="create--post--page">

      
       <form action="" onSubmit={handleSubmit}>
       <h1 className="green-heading">Create a Post</h1>
       <div className="inputField">
        <label htmlFor="" >Title</label>
        <input type="text" name="title" id="" placeholder="title..."
        onChange={handleChange} className="input" />
        </div>

        <br />
        <div className="inputField">
        <label htmlFor="">Post</label>
      <textarea name="post" id="" cols="30" rows="10"  placeholder="post... "
        onChange={handleChange} className="input input100"></textarea>
        </div>
        <button className="main-banner-btn" onClick={createPost} >Submit Post</button>
        </form>     




        </div>
    )
}

export default CreatePost