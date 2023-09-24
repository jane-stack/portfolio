import React, { useContext } from 'react'
import { AppContext } from '../../App';

function FileForm() {
    const { latestPost, setLatestPost } = useContext(AppContext);

    function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData();

        data.append("project[title]", e.target.title.value);
        data.append("project[description]", e.target.description.value);
        data.append("project[image]", e.target.image.files[0]);
        submitToAPI(data);
    }

    function submitToAPI(data) {
        fetch("http://localhost:3000/projects", {
            method: "POST",
            body: data
        })
        .then(resp => resp.json())
        .then(data => {
            setLatestPost(data.image_url);
        })
        .catch((error) => console.log(error));
    }

  return (
    <div>
        <h3>UPLOAD PROJECTS</h3>
        <form className="upload-form" onSubmit={(e) => handleSubmit}>
            {/* <label htmlFor='title'>Title</label> */}
            <input className='input' type='text' name='title' id='title' placeholder='TITLE' />
            <br />
            {/* <label htmlFor='description'>Description</label> */}
            <textarea className='textarea-input' type='text' name='description' id='description' placeholder='DESCRIPTION' />
            <br />
            {/* <label htmlFor='image'>Image</label> */}
            <input className='input' type='file' name='image' id='image' />
            <br />
            <button className='post-btn' type='submit'>Create Post</button>
        </form>
    </div>
  )
}

export default FileForm