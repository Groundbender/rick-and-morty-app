import React from "react";
import styles from "./Card.module.scss";
import { Character } from "types";
import { Link } from "react-router-dom";
interface CardProps extends Character {}

const Card: React.FC<CardProps> = ({ status, name, image, gender, id }) => {
  return (
    <>
      <Link
        to={`/${id}`}
        className="col-lg-4 col-md-6  position-relative mb-4 mt-4 text-decoration-none text-primary"
        // style={{ textDecoration: "none" }}
      >
        <div
          className={`${styles.card} d-flex flex-column justify-content-center`}
        >
          <img className={`${styles.img} img-fluid`} src={image} alt="" />
          <div className={styles.content}>
            <div className="fs-5 fw-bold mb-4">{name}</div>
            <div className="">
              <div className="fs-6 fw-normal text-black ">Gender </div>
              <div className="fs-5 text-black">{gender} </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.badge} text-bg-${
            status === "Alive"
              ? "success"
              : status === "Dead"
              ? "danger"
              : "secondary"
          } position-absolute p-1 rounded`}
        >
          {status}
        </div>
      </Link>
    </>
  );
};

export default Card;
