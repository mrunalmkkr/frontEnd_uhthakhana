

import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { LanguageContext } from "../components/languageContext";
import { AuthContext } from "./AuthContext";

export default function Dhamadeshana() {
  const { lang } = useContext(LanguageContext);
  const { user } = useContext(AuthContext);

  // TEXT STATE
  const [textEN, setTextEN] = useState("");
  const [textHI, setTextHI] = useState("");

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

  const DEFAULT_HI = (
    <>
      <h2>धमदेशना</h2>

      <p>
       धमदेशना का अर्थ है बुद्ध धर्म का उपदेश और व्याख्या।

       ये शिक्षाएँ मानव जीवन को ज्ञान, नैतिकता और
       मानसिक अनुशासन की ओर मार्गदर्शन करती हैं।
      </p>

      <p>
        बुद्ध ने दुख से मुक्ति और शांति प्राप्त करने के मार्ग के रूप में आर्य अष्टांगिक मार्ग का उपदेश दिया।
      </p>

      <ul>
        <li>सही दृष्टिकोण और सही इरादा</li>
        <li>सही वाणी और सही कर्म</li>
        <li>सही आजीविका</li>
        <li>सही प्रयास, जागरूकता और एकाग्रता</li>
      </ul>
    </>
  );

  /* ---------------- LOAD DATA ---------------- */

  useEffect(() => {
    // Load text
    setTextEN(localStorage.getItem("dhammaEN") || "");
    setTextHI(localStorage.getItem("dhammaHI") || "");

    // Load uploads
    const data =
      JSON.parse(localStorage.getItem("dhamadeshanaUploads")) || [];
    setUploads(data);
  }, []);

  /* ---------------- TEXT ACTIONS ---------------- */

  const saveText = () => {
    localStorage.setItem("dhammaEN", textEN);
    localStorage.setItem("dhammaHI", textHI);
    alert("Dhamadeshana text saved");
  };

  const resetText = () => {
    localStorage.removeItem("dhammaEN");
    localStorage.removeItem("dhammaHI");
    setTextEN("");
    setTextHI("");
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
  const hasHI = textHI.trim().length > 0;

  return (
    <Container style={{ marginLeft: "10%" }}>
      <div className="leaflet">
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
              value={textHI}
              onChange={(e) => setTextHI(e.target.value)}
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
          ? hasEN ? <div
          style={{
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            overflowWrap: "break-word"
          }}
        >
          {textEN}
        </div> : DEFAULT_EN
          : hasHI ?  (
        <div
          style={{
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            overflowWrap: "break-word"
          }}
        >
          {textHI}
        </div>
      )  : DEFAULT_HI}
      </div>

      {/* -------- UPLOADS (LIKE HOME.JS) -------- */}
      <hr />
     

        
       
    </Container>
  );
}

