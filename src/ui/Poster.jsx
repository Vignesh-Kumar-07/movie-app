import { useNavigate, useParams } from "react-router-dom";
import { AiTwotoneCloseCircle } from "react-icons/ai";

function Poster() {
  const navigate = useNavigate();
  const { poster } = useParams();

  return (
    <div className="poster">
      <img
        src={`https://test.create.diagnal.com/images/${
          poster === "posterthatismissing.jpg"
            ? "placeholder_for_missing_posters.png"
            : poster
        }`}
        alt=""
      />
      {/* <button  className ='btn' onClick={() => navigate(-1)}>back</button> */}
      <AiTwotoneCloseCircle className="btn" onClick={() => navigate(-1)} />
    </div>
  );
}

export default Poster;
