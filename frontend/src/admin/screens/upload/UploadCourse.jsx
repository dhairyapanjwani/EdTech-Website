import React,{useState,useEffect} from 'react'
import Axios from 'axios'
function UploadCover() {
    const [coverFile,setCoverFile]=useState(null);
    const [title,setTitle]=useState("Advanced ReactJS");
    const [description,setDescription]=useState("This Course is for advanced level");
    const [category,setCategory]=useState("ReactJS");

    
    const changeCover=(event)=>{
        setCoverFile(event.target.files[0])
    }
    
    

    const uploadCover=()=>{
      if(JSON.parse(localStorage.getItem('video'))==null){
        window.alert("Video file not uploaded")
      }
      else{
        const formData = new FormData();
        formData.append('coverFile', coverFile);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('cover_name', coverFile.name);
        formData.append('category', category);
        Axios.post("http://localhost:3001/api/course/upload", formData, {
            headers: {
              'Content-Type': `multipart/form-data; 
              'Authorization': 'JWT fefege...',
              'accept': 'application/json',
              'Accept-Language': 'en-US,en;q=0.8',boundary=${formData._boundary}`,
            }
          })
          .then(()=>{
            console.log("success")
          })
      }
    }

    return (
        <div>
            <form encType="multipart/form-data">
            <h3>Cover</h3><input type="file"  className="form-control" filename="coverFile" onChange={changeCover} />
            <input type="submit" value="attach" onClick={uploadCover}/>
            </form>
            <br/>
            
            
        </div>
    )
}

export default UploadCover
