import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Character } from "types";
import Spinner from "components/ui/Spinner";
const SingleCharacter = () => {
  const { id } = useParams();
  const [char, setChar] = useState<Character | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://rickandmortyapi.com/api/character/" + id
        );
        setChar(data);
      } catch (error) {
        navigate("/");
      }
    })();
  }, [id]);

  if (!char) {
    return <Spinner />;
  }

  return (
    <div className="container align-middle  ">
      <div
        className=" d-flex flex-lg-row  flex-md-column align-items-center w-50 h-50 gap-3  "
        style={{ margin: "auto" }}
      >
        <div>
          <img className="rounded" src={char.image} alt="character" />
        </div>
        <ul>
          <li className="d-flex justify-content-between w-3 mb-4 gap-3">
            <span>Name:</span> <b className="text-primary">{char.name}</b>
          </li>
          <li className="d-flex justify-content-between w-3 mb-4 gap-3">
            <span>Gender</span> <b className="text-primary">{char.gender}</b>
          </li>
          <li className="d-flex justify-content-between w-3 mb-4 gap-3">
            <span>Status:</span> <b className="text-primary">{char.status}</b>
          </li>
          <li className="d-flex justify-content-between w-3 mb-4 gap-3">
            <span>Species:</span> <b className="text-primary">{char.species}</b>
          </li>
          <li className="d-flex justify-content-between w-3 mb-4 gap-3">
            <span>Origin:</span>{" "}
            <b className="text-primary">{char.origin.name}</b>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SingleCharacter;
