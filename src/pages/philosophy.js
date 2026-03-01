

import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { LanguageContext } from "../components/languageContext";
import { AuthContext } from "./AuthContext";

export default function Philosophy() {
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

  const DEFAULT_HI = (
    <>
      <h2>डॉ. बी. आर. अंबेडकर का दर्शन</h2>

      <p>
        डॉ. अंबेडकर का दर्शन समानता, न्याय,
        स्वतंत्रता और मानवीय गरिमा पर आधारित है।
      </p>

      <p>
        <strong>सामाजिक समानता:</strong> उन्होंने जातिगत
भेदभाव और अस्पृश्यता का पुरजोर विरोध किया।
      </p>

      <p>
        <strong>सामाजिक न्याय:</strong> शोषित समुदायों के लिए कानून, अधिकारों और
                     सामाजिक सुधारों के माध्यम से न्याय।
      </p>

      <p>
        <strong>शिक्षा:</strong> सशक्तिकरण के लिए शिक्षा सबसे शक्तिशाली साधन है।
      </p>

      <p>
        <strong>स्वतंत्रता, समानता, बंधुत्व</strong>
         एक न्यायपूर्ण और सामंजस्यपूर्ण समाज की नींव।
      </p>
    </>
  );

  /* ---------------- LOAD DATA ---------------- */

  useEffect(() => {
    // Load text
    setTextEN(localStorage.getItem("philosophyEN") || "");
    setTextHI(localStorage.getItem("philosophyMR") || "");

    // Load uploads
    const data =
      JSON.parse(localStorage.getItem("philosophyUploads")) || [];
    setUploads(data);
  }, []);

  /* ---------------- TEXT ACTIONS ---------------- */

  const saveText = () => {
    localStorage.setItem("philosophyEN", textEN);
    localStorage.setItem("philosophyHI", textHI);
    alert("Philosophy text saved");
  };

  const resetText = () => {
    localStorage.removeItem("philosophyEN");
    localStorage.removeItem("philosophyHI");
    setTextEN("");
    setTextHI("");
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
  const hasHI = textHI.trim().length > 0;

  return (
    <Container style={{ marginLeft: "10%" }}>
      <div className="leaflet">

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

     

        {/* -------- EDIT MODE (TEXT ONLY) -------- */}
        {  user && (
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
              placeholder="Hindi Philosophy"
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
        )  }

        {/* -------- DISPLAY TEXT -------- */}
        {lang === "EN"
          ? hasEN ? <p>{textEN}</p> : DEFAULT_EN
          : hasHI ? <p>{textHI}</p> : DEFAULT_HI}
      </div>

      {/* -------- UPLOADS (LIKE HOME & DHAMADESANA) -------- */}
      <hr />
      
    </Container>
  );
}
