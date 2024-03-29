import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./page.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Page = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((el, i) => (
        <div key={i}>
          <Swiper
            slidesper={1}
            spaceBetween={30}
            slidesPerGroup={4}
            loop={true}
            loopFillGroupWithBlank={false}
            pagination={{
              clickable: true,
            }}
            style={{ width: "95%" }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            {el.bigposter.map((el, i) => (
              <SwiperSlide key={i + 1}>
                <div>
                  <img width="100%" src={el.src} alt="" />
                </div>
                <button></button>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* 2nd div  */}
          <div className={styles.flex}>
            {" "}
            <h6>ZEE5 Original Series</h6>
            <a href="/details"> More</a>
          </div>
          <div className={styles.grid}>
            {el.ZeeOriginals.map((el, i) => (
              <Link to={"/details"}>
                {" "}
                <div key={i + 2} className={styles.innerbox}>
                  <img src={el.src} alt="poster" />
                </div>
              </Link>
            ))}
          </div>

          {/* 3rd div  */}
          <div className={styles.flex}>
            {" "}
            <h6>ZEE5 Original Series</h6>
            <a href="/details"> More</a>
          </div>
          <div className={styles.grid}>
            {el.Movies.map((el, i) => (
              <Link to={"/details"}>
                {" "}
                <div key={i + 3} className={styles.innerbox}>
                  <img src={el.src} alt="poster" />
                </div>
              </Link>
            ))}
          </div>

          {/* 4rth div  */}
          <div className={styles.flex}>
            {" "}
            <h6>ZEE5 Original Series</h6>
            <a href="/details"> More</a>
          </div>
          <div className={styles.grid}>
            {el.Marathi.map((el, i) => (
              <Link to={"/details"}>
                {" "}
                <div key={i + 4} className={styles.innerbox}>
                  <img src={el.src} alt="poster" />
                  <p>{el.p}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* 5th div  */}
          <div className={styles.flex}>
            {" "}
            <h6>ZEE5 Original Series</h6>
            <a href="/details"> More</a>
          </div>
          <div className={styles.grid}>
            {el.Hindi.map((el, i) => (
              <Link to={"/details"}>
                {" "}
                <div key={i + 5} className={styles.innerbox}>
                  <img src={el.src} alt="poster" />
                  <p>{el.p}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* 6th div  */}

          <div className={styles.flex}>
            {" "}
            <h6>ZEE5 Original Series</h6>
            <a href="/details"> More</a>
          </div>
          <div className={styles.grid}>
            {el.Top10.map((el, i) => (
              <Link to={"/details"}>
                {" "}
                <div key={i + 6} className={styles.innerbox}>
                  <img src={el.src} alt="poster" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
