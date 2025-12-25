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
            <h2>Welcome to UNTHAKHANA BHIKHU SANGA</h2>
            <p>
              Unthakhana Bhikhu Sanga is dedicated to spreading the teachings of
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
            <h2>उठखणा भिक्खू संघ मध्ये आपले स्वागत आहे</h2>
            <p>
              उठखणा भिक्खू संघ बुद्धांच्या उपदेशांचा आणि डॉ. बाबासाहेब
              आंबेडकरांच्या तत्त्वज्ञानाचा प्रसार करण्यासाठी कार्यरत आहे.
              समता, करुणा, शांतता आणि सामाजिक न्याय हे आमचे मुख्य उद्दिष्ट आहे.
            </p>
            <p>
              धम्मदेशना, शैक्षणिक उपक्रम, सामाजिक कार्ये आणि सांस्कृतिक
              कार्यक्रमांद्वारे आम्ही समाजाच्या उन्नतीसाठी कार्य करतो.
            </p>
            <p>
              या व्यासपीठावर धम्मविचार, तत्त्वज्ञान, छायाचित्रे, व्हिडिओ
              आणि महत्त्वाच्या सूचना उपलब्ध आहेत.
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
