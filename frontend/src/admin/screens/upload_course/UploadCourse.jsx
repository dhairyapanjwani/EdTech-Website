import React,{useState,useEffect} from "react";
import { useHistory } from 'react-router-dom';
import AdminNavbar from "../../screens/navbar/Navbar";
import Axios from 'axios'

export default function Example() {
    const history = useHistory();
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState("");
    const [category, setCategory]=useState("");
    const [amount, setAmount]=useState(0);
    const [coverFile,setCoverFile]=useState(null)
    const [attachmentFile,setAttachmentFile]=useState(null)

    const changeCover=(event)=>{
      setCoverFile(event.target.files[0])
      
    }

    const changeAttachment=(event)=>{
      setAttachmentFile(event.target.files[0])
      console.log(event.target.files[0])
    }

    const handleSubmission=(event)=>{
      event.preventDefault()
      console.log("submitted")
      const formData = new FormData();
      formData.append('coverFile', coverFile);
      formData.append('title', title);
      formData.append('description', description);
      formData.append('cover_name', coverFile.name);
      formData.append('amount', amount);
      formData.append('category', category);
      Axios.post("http://localhost:3001/api/uploadcourse/cover", formData, {
          headers: {
            'Content-Type': `multipart/form-data; 
            'Authorization': 'JWT fefege...',
            'accept': 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',boundary=${formData._boundary}`,
          }
        })
        .then((response)=>{
        const formData1 = new FormData();
        formData1.append('attachmentFile', attachmentFile);
        formData1.append('attachment_name', attachmentFile.name);
        formData1.append('courseId', response.data.course._id);
        Axios.post("http://localhost:3001/api/uploadcourse/attachment", formData1, {
          headers: {
            'Content-Type': `multipart/form-data; 
            'Authorization': 'JWT fefege...',
            'accept': 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',boundary=${formData1._boundary}`,
          }
        })
        .then((response)=>{
          console.log(response.data)
        })
      })
    }

    return (        
      <>
      <AdminNavbar/>
        <div className="bg-gray-100 dark:bg-gray-800">
        
        <div className="text-indigo-500 text-md pl-12 pt-8 mb-4" onClick={() => history.goBack()}>
            <i className="fas fa-arrow-left"></i> Back
        </div>
          <div className="md:grid md:grid-cols-2 md:gap-6 px-40">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 dark:text-gray-100">Upload a new course</h1>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form encType="multipart/form-data" onSubmit={handleSubmission}>
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div>
                      <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                        Title
                      </label>
                      <div className="mt-1">
                        <textarea
                          value={title}
                          onChange={(event)=>{setTitle(event.target.value)}}
                          id="about"
                          name="about"
                          rows={3}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="Title..."
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <div className="mt-1">
                        <textarea
                          value={description}
                          onChange={(event)=>{setDescription(event.target.value)}}
                          id="about"
                          name="about"
                          rows={3}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="Description..."
                          defaultValue={''}
                        />
                      </div>
                    </div>


                    <div className="inline-block relative w-64">
                      <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" value={category} onChange={(event)=>{setCategory(event.target.value)}}>
                        <option>Select Category</option>
                        <option>ReactJS</option>
                        <option>NodeJS</option>
                        <option>Python Django</option>
                        <option>Fullstack Django</option>
                        <option>Fullstack Node</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        
                      </div>
                    </div>



                    <div>
                      <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                        Price
                      </label>
                      <div className="mt-1">
                        <textarea
                          value={amount} onChange={(event)=>{setAmount(event.target.value)}}
                          id="about"
                          name="about"
                          rows={3}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="Price..."
                          defaultValue={''}
                        />
                      </div>
                    </div>
    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Upload cover photo</label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                              <input id="file-upload" filename="coverFile" type="file" className="form-control" 
                              onChange={changeCover}/>
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                        

                        </div>
                        
                      </div>
                    </div>


                    <div>
                      <label className="block text-sm font-medium text-gray-700">Upload study material</label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                              <input 
                              type="file" 
                              filename="attachmentFile" 
                              onChange={changeAttachment}/>
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                        

                        </div>
                        
                      </div>
                    </div>



                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
  
      </>
    )
  }
  