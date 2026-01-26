import { Container } from "react-bootstrap";
import { useState } from "react";

export default function Videos() {
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");

  const uploadVideo = () => {
    if (!file) {
      alert("Select a video");
      return;
    }

    const uploads = JSON.parse(localStorage.getItem("uploads")) || [];

    uploads.push({
      id: Date.now(),
      type: "video",
      url: URL.createObjectURL(file),
      desc: desc
    });

    localStorage.setItem("uploads", JSON.stringify(uploads));
    alert("Video uploaded");

    setFile(null);
    setDesc("");
  };

  return (
    <Container style={{ marginLeft: "10%" }}>
      <div>
        <h3>Upload Videos</h3>

        <input
          type="file"
          accept="video/*"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <textarea
          placeholder="Write description here"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button onClick={uploadVideo}>Upload</button>
      </div>
    </Container>
  );
}
