import React, { useEffect, useState } from 'react';
// import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { useQuill } from 'react-quilljs';
import useAuth from '../../../Hooks/useAuth';


const Upload = () => {
  // States //
const {user}=useAuth()
  const [data, setData] = useState(null)
  const [heading, setheading] = useState('')
  const [error, setError] = useState()

  // Quil JS for Blog Text editor ///
  const { quill, quillRef } = useQuill("type");

  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        // console.log('Text change!');
        // console.log(quill.getText()); // Get text only
        // console.log(quill.getContents()); // Get delta contents
        // console.log(quill.root.innerHTML); // Get innerHTML using quill
        setData(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
      });
    }
  }, [quill, quillRef]);



  // Get BLog Heading ///

  const handlechange = e => {
    setheading(e.target.value);
    console.log(e.target.value);

  }
  //   parser(data)
  const handleSubmit = e => {
    e.preventDefault()

    if (data == null) {

      setError("Please Write something in blog")
      return
    }
    else {
      // Create Form data to send it into server ///
      const formData = new FormData()
  console.log(formData);
      // apppend data one by one to formdata ///


      formData.append('blog', data)
      formData.append("heading", heading);
      formData.append("username", user.displayName);
      formData.append("email", user.email);

      // Post Blog to the server //

      fetch("http://localhost:9000/blogs", {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: formData
      }).then(res => console.log(formData))


        // catch any errors ///

        .catch((err => console.log(err)))


    }
    alert("Your Blog Posted Successfully")

  }


  return (
    <div className='container bg-zinc-800  p-5 shadow-2xl'>

      <form onSubmit={handleSubmit} action="">

       
    

        {/* Quil js Blog Text editor interface  */}
        <div >
        <div >
          <input required style={{ width: "100%", margin: "20px", padding: "3px" }} placeholder=' Write Your blog Title' onChange={handlechange} name='blogtitle' type="text" />
        </div>
          <div
          
           style={{height:"200px"}}  aria-required ref={quillRef} />
        </div>


        {/* submit Button  */}
        <button style={{ float: 'right' }} className='btn btn-wide my-10' type="submit">Post Your Blog</button>
      </form>


    </div>



  );
};

export default Upload;