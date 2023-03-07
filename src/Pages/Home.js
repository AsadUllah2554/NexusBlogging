import React,{useState,useEffect} from "react";
import Main_card from '../Components/Main_card'
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import '../Components/components.css'
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function Home(props){

  let navigate = useNavigate()
    const [postLists,setPostList] = useState([])
    const postsCollectionRef = collection(db,"posts")

    let reloadUI = 0;

   useEffect(()=>{
    const getPosts = async () =>{
        const data = await getDocs(postsCollectionRef)
        console.log("useEffect ran")
        setPostList(data.docs.map((doc)=> ({...doc.data(),id:doc.id})))
    }
    getPosts()

   },[reloadUI])

 const deletePost = async (id)=>{

    const postDoc = doc(db,"posts",id)
     await deleteDoc(postDoc);
     reloadUI++

 }
    return(

 <div className="latest--posts">
  {postLists.map((post)=>{

    return(
      <Main_card 
      title={post.title}
      post={post.postText}
      name={post.author.name}
      autherId={post.author.id}
      key={post.id}
      id={post.id}
      deletePost={deletePost}
      auth={props.auth}      
      />
    )

  })}



</div>
  
    )
}

export default Home