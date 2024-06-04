"use client";
import React, { useState } from "react";

function Dog_form() {
  const [dogName, setDogName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [dogBio, setDogBio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newDog = {
      name: dogName,
      img: imageUrl,
      bio: dogBio,
    };

    alert(`This dog is named ${newDog.name} 
    \n This is the image URL: ${newDog.img}
    \n This is their story: ${newDog.bio}`);

    //now we can clear them with this
    setDogName("");
    setImageUrl("");
    setDogBio("");
  };

  const handleDogName = (e) => {
    setDogName(e.target.value);
  };

  const handleImageUrl = (e) => setImageUrl(e.target.value);
  const handleDogBio = (e) => setDogBio(e.target.value);

  // time of check, onChange, calls the setter, it is then reflected back to the textbox immediately
  // by adding the value there we have access to it elsewhere so that we can clear it for example
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="text-md">Dog Name</label>
        <input required type="text" onChange={handleDogName} value={dogName} />
      </div>
      <div>
        <label className="text-md">Image URL:</label>
        <input type="text" onChange={handleImageUrl} value={imageUrl} />
      </div>
      <div>
        <label className="text-md">Dog Bio:</label>
        <textarea onChange={handleDogBio} value={dogBio}></textarea>
      </div>
      <div>
        <button className="bg-blue-400 active:bg-yellow-300 rounded text-white px-4 py-2">
          Add Dog
        </button>
      </div>
      <div>
        <label>Dog Breed</label>
        <select>
          <option value={"golden_retreiver"}>Golden Retreiver</option>
          <option value={"poodle"}>Poodle</option>
          <option value={"husky"}>Husky</option>
        </select>
      </div>
    </form>
  );
}

export default Dog_form;
