import { Container } from "react-bootstrap";
import { useState } from "react";

export default function Photos() {
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");

  const uploadPhoto = () => {
    if (!file) {
      alert("Select a photo");
      return;
    }

    const uploads = JSON.parse(localStorage.getItem("uploads")) || [];

    uploads.push({
      id: Date.now(),
      type: "photo",
      url: URL.createObjectURL(file),
      desc: desc
    });

    localStorage.setItem("uploads", JSON.stringify(uploads));
    alert("Photo uploaded");

    setFile(null);
    setDesc("");
  };

  return (
    <Container style={{ marginLeft: "10%" }}>
      <div>
        <h3>Upload Photos</h3>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <textarea
          placeholder="Write description here"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button onClick={uploadPhoto}>Upload</button>
      </div>
    </Container>
  );
}
