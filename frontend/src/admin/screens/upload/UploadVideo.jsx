import React,{useState,useEffect} from 'react'
import Axios from 'axios'
function Upload() {
    const [videoFile,setVideoFile]=useState(null);
    const [thumbnailFile,setThumbnailFile]=useState(null);
    const [attachmentFile,setAttachmentFile]=useState(null);
    const [title,setTitle]=useState("My video");
    const [description,setDescription]=useState("hello hi");
    const [category,setCategory]=useState("MERN");
    const [video,setVideo]=useState(null);

    const changeVideo=(event)=>{
        setVideoFile(event.target.files[0])
    }
    const changeThumbnail=(event)=>{
        setThumbnailFile(event.target.files[0])
    }
    const changeAttachment=(event)=>{
        setAttachmentFile(event.target.files[0])
    }
    
    const handleSubmission = (event) => {
        event.preventDefault()
        const formData1 = new FormData();
		formData1.append('videoFile', videoFile);
        formData1.append('title', title);
        formData1.append('description', description);
        formData1.append('category', category);
        formData1.append('video_name', videoFile.name);

        Axios.post("http://localhost:3001/api/upload/video", formData1, {
            headers: {
            'Content-Type': `multipart/form-data; 
            'Authorization': 'JWT fefege...',
              'accept': 'application/json',
              'Accept-Language': 'en-US,en;q=0.8',boundary=${formData1._boundary}`,
            }
          })
        .then((response) => {
          localStorage.setItem('video',JSON.stringify(response.data.video))
                const formData2 = new FormData();
                formData2.append('thumbnailFile', thumbnailFile);
                formData2.append('videoId', response.data.video._id);
                formData2.append('thumbnail_name', thumbnailFile.name);
              
              Axios.post("http://localhost:3001/api/upload/thumbnail", formData2, {
            headers: {
              'Content-Type': `multipart/form-data; 
              'Authorization': 'JWT fefege...',
              'accept': 'application/json',
              'Accept-Language': 'en-US,en;q=0.8',boundary=${formData2._boundary}`,
            }
          })
          .then(()=>{
            console.log("success")
          })
        })
		.catch((error) => {
				console.error('Error:', error);
			}); 
    }

    const uploadAttach=()=>{
      if(JSON.parse(localStorage.getItem('video'))==null){
        window.alert("Video file not uploaded")
      }
      else{
        const formData3 = new FormData();
        formData3.append('attachmentFile', attachmentFile);
        formData3.append('videoId', JSON.parse(localStorage.getItem('video'))._id);
        formData3.append('attachment_name', attachmentFile.name);
        Axios.post("http://localhost:3001/api/upload/attachment", formData3, {
            headers: {
              'Content-Type': `multipart/form-data; 
              'Authorization': 'JWT fefege...',
              'accept': 'application/json',
              'Accept-Language': 'en-US,en;q=0.8',boundary=${formData3._boundary}`,
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
            <h3>Video</h3><input type="file"  className="form-control" filename="videoFile" onChange={changeVideo} />
            <br/>
            <h3>Thumbnail</h3><input type="file"  className="form-control" filename="thumbnailFile" onChange={changeThumbnail} />
            <input type="submit" value="upload" onClick={handleSubmission}/>
            </form>
            <br/>
            <form encType="multipart/form-data">
            <h3>Attachment</h3><input type="file"  className="form-control" filename="" onChange={changeAttachment} />
            <input type="submit" value="attach" onClick={uploadAttach}/>
            </form>
            <br/>
            
            
        </div>
    )
}

export default Upload
