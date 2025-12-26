import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { LanguageContext } from "../components/languageContext";
import { AuthContext } from "./AuthContext";

export default function Home() {
  const { lang } = useContext(LanguageContext);
  const { user } = useContext(AuthContext);

  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("uploads")) || [];
    setUploads(data);
  }, []);

  const deleteUpload = (id) => {
    const filtered = uploads.filter((item) => item.id !== id);
    setUploads(filtered);
    localStorage.setItem("uploads", JSON.stringify(filtered));
  };

  return (
    <Container style={{ marginLeft: "10%" }}>
      {/* EXISTING CONTENT */}
      <div className="leaflet">
        {lang === "EN" ? (
          <>
            <h2>Welcome to symbol of Knowledge Babasaheb Dr. B.R. Ambedkar Seminary, Nagpur</h2>
            <p>
              symbol of Knowledge Babasaheb Dr. B.R. Ambedkar Seminary, Nagpur is dedicated to spreading the teachings of
              Buddha and the philosophy of Dr. B. R. Ambedkar. Our mission is to
              promote equality, peace, compassion, and social harmony.
            </p>
            <p>
              Through dhamma discourses, educational activities, social
              programs, and cultural initiatives, we work for the upliftment
              of society.
            </p>
            <p>
              This platform provides access to dhamma messages, philosophical
              writings, photos, videos, and important updates.
            </p>
          </>
        ) : (
          <>
            <h2>ज्ञान के प्रतीक बाबासाहेब डॉ. बी. आर. आंबेडकर सेमिनरी, नागपुर में आपका स्वागत है</h2>
            <p>
              ज्ञान के प्रतीक बाबासाहेब डॉ. बी. आर. आंबेडकर सेमिनरी, नागपुर
बुद्ध के उपदेशों और डॉ. बाबासाहेब आंबेडकर के दर्शन का प्रसार करने के लिए कार्यरत है।
समता, करुणा, शांति और सामाजिक न्याय हमारे मुख्य उद्देश्य हैं।
            </p>
            <p>
              धम्मदेशना, शैक्षणिक गतिविधियों, सामाजिक कार्यों और सांस्कृतिक कार्यक्रमों के माध्यम से हम समाज की उन्नति के लिए कार्य करते हैं।
            </p>
            <p>
              इस मंच पर धम्मविचार, दर्शनशास्त्र, तस्वीरें, वीडियो और महत्वपूर्ण सूचनाएँ उपलब्ध हैं।
            </p>
          </>
        )}
      </div>

      {/* UPLOADED PHOTOS & VIDEOS */}
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

          {/* DELETE OPTION ONLY FOR LOGGED USERS */}
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
