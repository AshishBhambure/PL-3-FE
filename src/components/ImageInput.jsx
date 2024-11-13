import React, { useState } from 'react';
import axios from 'axios';

const ImageInput = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); 
  };

  const handleImageUpload = async () => {
    if (!image) {
      alert("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append('file', image); // Append image as 'file'

    try {
      const response = await axios.post('http://localhost:4000/uploadImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log("Image uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="file"
        onChange={handleImageChange}
        className="file-input border rounded-lg p-2"
      />
      <button
        onClick={handleImageUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Upload Image
      </button>
    </div>
  );
};

export default ImageInput;
