

import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { LanguageContext } from "../components/languageContext";
import { AuthContext } from "./AuthContext";

export default function Dhamadeshana() {
  const { lang } = useContext(LanguageContext);
  const { user } = useContext(AuthContext);

  // TEXT STATE
  const [textEN, setTextEN] = useState("");
  const [textMR, setTextMR] = useState("");

  // UPLOAD STATE
  const [uploads, setUploads] = useState([]);

  /* ---------------- DEFAULT CONTENT ---------------- */

  const DEFAULT_EN = (
    <>
      <h2>Dhamadeshana</h2>

      <p>
        Dhamadeshana means the teaching and explanation of Buddha Dhamma.
        These teachings guide human life towards wisdom, morality, and
        mental discipline.
      </p>

      <p>
        The Buddha taught the Noble Eightfold Path as the way to overcome
        suffering and attain peace.
      </p>

      <ul>
        <li>Right View and Right Intention</li>
        <li>Right Speech and Right Action</li>
        <li>Right Livelihood</li>
        <li>Right Effort, Mindfulness, and Concentration</li>
      </ul>
    </>
  );

  const DEFAULT_MR = (
    <>
      <h2>धम्मदेशना</h2>

      <p>
        धम्मदेशना म्हणजे बुद्ध धम्माचे उपदेश व त्याचे स्पष्टीकरण.
        हे उपदेश मानवाला प्रज्ञा, शील आणि समाधीच्या मार्गावर नेतात.
      </p>

      <p>
        दुःखाच्या निरोधासाठी आणि शांततेसाठी बुद्धांनी
        अष्टांगिक मार्ग सांगितला.
      </p>

      <ul>
        <li>सम्यक दृष्टि आणि संकल्प</li>
        <li>सम्यक वाचा आणि कर्म</li>
        <li>सम्यक आजीविका</li>
        <li>सम्यक प्रयास, स्मृती आणि समाधी</li>
      </ul>
    </>
  );

  /* ---------------- LOAD DATA ---------------- */

  useEffect(() => {
    // Load text
    setTextEN(localStorage.getItem("dhammaEN") || "");
    setTextMR(localStorage.getItem("dhammaMR") || "");

    // Load uploads
    const data =
      JSON.parse(localStorage.getItem("dhamadeshanaUploads")) || [];
    setUploads(data);
  }, []);

  /* ---------------- TEXT ACTIONS ---------------- */

  const saveText = () => {
    localStorage.setItem("dhammaEN", textEN);
    localStorage.setItem("dhammaMR", textMR);
    alert("Dhamadeshana text saved");
  };

  const resetText = () => {
    localStorage.removeItem("dhammaEN");
    localStorage.removeItem("dhammaMR");
    setTextEN("");
    setTextMR("");
    alert("Reset to default content");
  };

  /* ---------------- UPLOAD ACTIONS ---------------- */

  const deleteUpload = (id) => {
    const filtered = uploads.filter((item) => item.id !== id);
    setUploads(filtered);
    localStorage.setItem(
      "dhamadeshanaUploads",
      JSON.stringify(filtered)
    );
  };

  const hasEN = textEN.trim().length > 0;
  const hasMR = textMR.trim().length > 0;

  return (
    <Container style={{ marginLeft: "10%" }}>
      <div className="leaflet">

        {/* -------- EDIT MODE (TEXT ONLY) -------- */}
        {user && (
          <>
            <h4>Edit Dhamadeshana</h4>

            <textarea
              rows={6}
              placeholder="English Dhamadeshana"
              value={textEN}
              onChange={(e) => setTextEN(e.target.value)}
              style={{ width: "100%", marginBottom: "10px" }}
            />

            <textarea
              rows={6}
              placeholder="Hindi Dhamadeshana"
              value={textMR}
              onChange={(e) => setTextMR(e.target.value)}
              style={{ width: "100%", marginBottom: "10px" }}
            />

            <button onClick={saveText}>Save</button>
            <button onClick={resetText} style={{ marginLeft: "10px" }}>
              Reset
            </button>

            <hr />
          </>
        )}

        {/* -------- DISPLAY TEXT -------- */}
        {lang === "EN"
          ? hasEN ? <p>{textEN}</p> : DEFAULT_EN
          : hasMR ? <p>{textMR}</p> : DEFAULT_MR}
      </div>

      {/* -------- UPLOADS (LIKE HOME.JS) -------- */}
      <hr />
     

        
       
    </Container>
  );
}

