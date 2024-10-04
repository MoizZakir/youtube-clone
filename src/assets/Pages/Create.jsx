import React, { useRef, useState } from 'react';
import '../Styles/create.css'

const Create = () => {
  const [formData, setFormData] = useState({
    title: '',
    keywords: '',
    description: '',
    thumbnail: null,
    video: null,
  });
  const name=useRef()
  name.current='cdssd'
  
  console.log(name,)

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission (e.g., send to server)
  };

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <h2>Upload a New Video</h2>
      <p>Fill out the form to add a new video to your library.</p>
      
      <div className="form-group">
        <label htmlFor="title">Video Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter a title for your video"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="keywords">Keywords</label>
        <input
          type="text"
          id="keywords"
          name="keywords"
          value={formData.keywords}
          onChange={handleChange}
          placeholder="Enter keywords separated by commas"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Provide a description for your video"
          required
        />
      </div>

      <div className="form-group file-input">
        <label htmlFor="thumbnail">Thumbnail</label>
        <input
          type="file"
          id="thumbnail"
          name="thumbnail"
          accept="image/*"
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group file-input">
        <label htmlFor="video">Video File</label>
        <input
          type="file"
          id="video"
          name="video"
          accept="video/*"
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Upload Video</button>
    </form>
  );
};

export default Create;
