

import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { LanguageContext } from "../components/languageContext";
import { AuthContext } from "./AuthContext";

export default function Philosophy() {
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
      <h2>Dr. B. R. Ambedkar’s Philosophy</h2>

      <p>
        Dr. Ambedkar’s philosophy is based on equality, justice,
        liberty, and human dignity.
      </p>

      <p>
        <strong>Social Equality:</strong> He strongly opposed caste
        discrimination and untouchability.
      </p>

      <p>
        <strong>Social Justice:</strong> Justice through law, rights,
        and social reform for oppressed communities.
      </p>

      <p>
        <strong>Education:</strong> Education as the strongest tool
        for empowerment.
      </p>

      <p>
        <strong>Liberty, Equality, Fraternity:</strong> Foundation
        of a just and harmonious society.
      </p>
    </>
  );

  const DEFAULT_MR = (
    <>
      <h2>डॉ. बाबासाहेब आंबेडकरांचे तत्त्वज्ञान</h2>

      <p>
        डॉ. आंबेडकरांचे तत्त्वज्ञान समता, न्याय,
        स्वातंत्र्य आणि मानवी प्रतिष्ठेवर आधारित आहे.
      </p>

      <p>
        <strong>सामाजिक समता:</strong> जातिभेद
        व अस्पृश्यतेला तीव्र विरोध.
      </p>

      <p>
        <strong>सामाजिक न्याय:</strong> कायदे,
        हक्क आणि सामाजिक सुधारणांद्वारे न्याय.
      </p>

      <p>
        <strong>शिक्षण:</strong> सक्षमीकरणाचे
        सर्वात प्रभावी साधन.
      </p>

      <p>
        <strong>स्वातंत्र्य, समता, बंधुता:</strong>
        न्याय्य समाजाची पायाभरणी.
      </p>
    </>
  );

  /* ---------------- LOAD DATA ---------------- */

  useEffect(() => {
    // Load text
    setTextEN(localStorage.getItem("philosophyEN") || "");
    setTextMR(localStorage.getItem("philosophyMR") || "");

    // Load uploads
    const data =
      JSON.parse(localStorage.getItem("philosophyUploads")) || [];
    setUploads(data);
  }, []);

  /* ---------------- TEXT ACTIONS ---------------- */

  const saveText = () => {
    localStorage.setItem("philosophyEN", textEN);
    localStorage.setItem("philosophyMR", textMR);
    alert("Philosophy text saved");
  };

  const resetText = () => {
    localStorage.removeItem("philosophyEN");
    localStorage.removeItem("philosophyMR");
    setTextEN("");
    setTextMR("");
    alert("Reset to default content");
  };

  /* ---------------- UPLOAD ACTIONS ---------------- */

  const deleteUpload = (id) => {
    const filtered = uploads.filter((item) => item.id !== id);
    setUploads(filtered);
    localStorage.setItem(
      "philosophyUploads",
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
            <h4>Edit Ambedkar Philosophy</h4>

            <textarea
              rows={6}
              placeholder="English Philosophy"
              value={textEN}
              onChange={(e) => setTextEN(e.target.value)}
              style={{ width: "100%", marginBottom: "10px" }}
            />

            <textarea
              rows={6}
              placeholder="Marathi Philosophy"
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

      {/* -------- UPLOADS (LIKE HOME & DHAMADESANA) -------- */}
      <hr />
      <h3>Photos & Videos</h3>

      {uploads.length === 0 && <p>No uploads yet</p>}

      {uploads.map((item) => (
        <div key={item.id} style={{ marginBottom: "20px" }}>
          {item.type === "photo" ? (
            <img src={item.url} alt="" width="250" />
          ) : (
            <video src={item.url} controls width="350" />
          )}

          <p>{item.desc}</p>

          {user && (
            <button onClick={() => deleteUpload(item.id)}>
              Delete
            </button>
          )}
        </div>
      ))}
    </Container>
  );
}
