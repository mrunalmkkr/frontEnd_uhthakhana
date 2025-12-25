import Philosophy from "./pages/philosophy";
import {LanguageProvider} from "./components/languageContext"

export default function Ooute () {
    return (
        <LanguageProvider>
            <Philosophy />
        </LanguageProvider>
    )
}