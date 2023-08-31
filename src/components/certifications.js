import certificationsdata from "../data/certificationsdata";
import Card1 from "./card1";
export default function Certifications() {
return (
    <div className="card-container" >
        <div style={{textAlign:"center"}} id="achievments">
        <h1 >Achievments</h1>
        <h3>Here are some of my Achievments & Certifications</h3>
        <div >
            {certificationsdata.map((certification) => (
                <Card1
                    key={certification.id}
                    title={certification.title}
                    company={certification.company}
                    date={certification.date}
                    credential={certification.credential}
                    image={certification.image}
                />
            ))}
            </div>
                </div>
    </div>
);
}