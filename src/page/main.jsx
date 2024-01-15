import React, { useEffect, useState, useRef } from "react";
import { Formik, Field, Form } from "formik";
// UI
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// css
import "../assets/css/header.css";
import "../assets/css/page.main.css";
// swiper cusotom stylithed
import "../assets/css/swiper.custom.css";
//
// events & animations
//
import {
  tabClick,
  tabSlider,
  scroll,
  corpsHoverEvent,
  corpsResponsive,
} from "../scripts/events";
// icons
import Burger from "../components/icons/burger";
import Report from "../components/icons/report";
import { CaretUpFill, PlayCircleFill, XLg } from "react-bootstrap-icons";
// img
import bigP from "../assets/img/big_p1.webp";
import p1 from "../assets/img/p1.png";
import p1Child from "../assets/img/p1_dot.png";
import s1 from "../assets/img/slide1.webp";
import s2 from "../assets/img/slide2.webp";
//
import map1 from "../assets/img/map1.png";
// import choose from "../assets/img/choose.png";
import choose1 from "../assets/img/choose1.png";
import choose2 from "../assets/img/choose2.png";
import c1 from "../assets/img/c1.png";
import in2 from "../assets/img/in2.svg";
import overview from "../assets/img/overview.png";
import info from "../assets/img/info.png";
import SvgWhatsapp from "../components/icons/svgWhatsapp";
import SvgTelegram from "../components/icons/svgTelegram";
import SvgArrowLeft from "../components/icons/svgArrowLeft";
import SvgArrowL from "../components/icons/svgArrowL";
import SvgArrowRight from "../components/icons/svgArrowRight";
import SvgArrowR from "../components/icons/svgArrowR";
// map
import SvgMapF0 from "../components/icons/svgMapF0";
import SvgMapF1 from "../components/icons/svgMapF1";
import SvgMapF2 from "../components/icons/svgMapF2";
import SvgMapF3 from "../components/icons/svgMapF3";
import SvgMapF4 from "../components/icons/svgMapF4";
import SvgMapF5 from "../components/icons/svgMapF5";

// import SvgCar from "../components/icons/svgCar";
import SvgArrow from "../components/icons/svgArrow";
// movie
import video_ao from "../assets/video/ao.webm";
//
import Corps from "../components/corps/corps";
import Corps2 from "../components/corps2/corps";
//
import SvgQRcode from "../components/qr/qrcode";
//
//
//
const DisablePinchZoom = () => {
  document.addEventListener("gesturestart", function (e) {
    e.preventDefault();
    // special hack to prevent zoom-to-tabs gesture in safari
    document.body.style.zoom = 0.99;
  });

  document.addEventListener("gesturechange", function (e) {
    e.preventDefault();
    // special hack to prevent zoom-to-tabs gesture in safari
    document.body.style.zoom = 0.99;
  });

  document.addEventListener("gestureend", function (e) {
    e.preventDefault();
    // special hack to prevent zoom-to-tabs gesture in safari
    document.body.style.zoom = 0.99;
  });
};
//
//
//
//
//
// body
const Main = () => {
  const [selectData, setSelectData] = useState({
    corp: null,
    view: null,
    layout: null,
  });
  const [btnSubT2, setBtnSubT2] = useState("Шаг2");
  const [btnSubT3, setBtnSubT3] = useState(null);
  const [swiper, setSwiper] = React.useState(null);
  const [l_swiper, setL_swiper] = React.useState(null);
  const [apartment_swiper, setApartmentSwiper] = React.useState(null);
  const [pc_swiper, setPc_swiper] = React.useState(null);
  const [investment_slider, setInvestment_slider] = useState(null);
  useEffect(() => {
    scroll();
    tabSlider();
    tabClick();
    corpsSelect();
    corpsHoverEvent();
    DisablePinchZoom();
    corpsResponsive();
    const fetchData = async () => {
      setTimeout(() => {
        const preloader = document.getElementById("preloader");
        preloader.classList.remove("preloader_active");
      }, 2100);
    };

    fetchData();
  }, []);

  function slideNextTo() {
    swiper.slideNext();
  }

  function slidePrevTo() {
    swiper.slidePrev();
  }

  function invSliding(i) {
    investment_slider.slideTo(i);

    const btns = document.querySelectorAll(".investment .tabs .btn");
    btns.forEach((el) => el.classList.remove("active"));
    btns[i].classList.add("active");
  }
  const corpsSelect = (s) => {
    const corps = document.querySelectorAll("#corps_select .corp");
    const btns = document.querySelectorAll("#tab_slider .steps .tabs .btn");
    let active = corps[0];
    for (let i = 0; i < corps.length; i++) {
      const el = corps[i];
      el.addEventListener("click", () => {
        active.classList.remove("selected");
        el.classList.add("selected");
        active = el;
        btns[0].dataset.value = `${i + 1}`;
        if (s && s.__swiper__) {
          s?.slideTo(1);
          tabSlider(1);
        }
      });
    }
  };
  function viewSelect(i) {
    const btns = document.querySelectorAll("#tab_slider .steps .tabs .btn");
    if (btns !== undefined) {
      btns[1].dataset.value = i;
      selectData.view = i;
      if (i === 1) {
        setBtnSubT2("море");
      } else if (i === 2) {
        setBtnSubT2("горы");
      } else {
        setBtnSubT2("шаг 2");
      }
    }
    tabSlider(2);
    apartment_swiper?.slideTo(2);
  }

  function layoutSelect(s) {
    const btns = document.querySelectorAll("#tab_slider .steps .tabs .btn");
    let i = s.activeIndex + 1;
    setBtnSubT3(i);
    btns[2].dataset.value = i;
  }
  // Modals
  function toggleLayoutGallery() {
    const modal = document.getElementById("layout_gallery");
    let c = modal.classList.contains("layout_gallery_active");
    if (!c) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "visible";
    }
    modal.classList.toggle("layout_gallery_active");
  }
  //
  function toggleLayoutPrice() {
    const modal = document.getElementById("layout_price");
    let c = modal.classList.contains("layout_price_active");
    if (!c) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "visible";
    }
    modal.classList.toggle("layout_price_active");
  }
  //
  // modalVideo
  const videoRef = useRef(null);
  const replayVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Set the current time to the beginning
      videoRef.current.play();
    }
  };
  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  const modalVideoToggle = () => {
    const modal_video = document.getElementById("modal_video");

    let c = modal_video.classList.contains("modal_video_active");
    if (!c) {
      replayVideo();
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      pauseVideo();
      document.getElementsByTagName("body")[0].style.overflow = "visible";
    }
    modal_video.classList.toggle("modal_video_active");
  };
  //
  //
  // modalRequest
  function toggleRequestModal() {
    const modal = document.getElementById("request_modal");
    const overlay = document.querySelector(".pc .overlay");
    modal.classList.toggle("modal_active");
    overlay.classList.toggle("overlay_active");
  }
  return (
    <main className="main_page container">
      {/* / */}
      {/* header */}
      {/* / */}
      <div id="preloader" className="preloader preloader_active">
        <h1 className="title">Loading</h1>
      </div>
      <header id="main_header">
        <div className="container">
          <div className="wrap">
            <button className="burger_btn">
              <Burger />
            </button>
            <span className="phone">+7 999 123 45 67</span>
          </div>
        </div>
      </header>
      <div className="container mobile">
        {/* / */}
        {/* first_content */}
        {/* / */}
        <section id="first_section" className="first_section">
          <img className="bg_img bg_img1" src={p1Child} alt="p1Child" />
          <img className="bg_img bg_img2" src={p1} alt="p1" />
          <h1 className="_title">
            this is <br />
            gorizont
          </h1>
          <div className="window">
            <div className="content">
              <div className="section_title">
                <h1>This is gorizont of your dreams</h1>
                <p>*это горизонт вашей мечты</p>
              </div>
              <span className="text">
                Окунитесь в неповторимую атмосферу элитного отдыха в самом
                сердце туристического центра Сочи!
              </span>
              {/* btn */}
              <a href="#request" className="request_btn">
                Оставить заявку
              </a>
            </div>
          </div>
          <div className="img_dot"></div>
        </section>

        {/* / */}
        {/* discover */}
        {/* / */}

        <section id="discover" className="discover">
          <div className="section_title">
            <h1>DISCOVER A NEW GORIZONT</h1>
            <p>*ОТКРОЙТЕ НОВЫЙ ГОРИЗОНТ</p>
          </div>
          <div className="tabs_container">
            {/* / */}
            {/* swiper */}
            {/* / */}
            <Swiper
              // install Swiper modules
              speed={1000}
              modules={[Pagination]}
              spaceBetween={1}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSwiper={(s) => {
                setSwiper(s);
              }}
              id="discover_slider"
            >
              <button
                className="control_btn l_btn"
                onClick={() => slidePrevTo()}
              >
                <SvgArrowLeft />
              </button>
              <button
                className="control_btn r_btn"
                onClick={() => slideNextTo()}
              >
                <SvgArrowRight />
              </button>
              <SwiperSlide>
                <img src={s2} alt="slide" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={s2} alt="slide" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={s2} alt="slide" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={s2} alt="slide" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={s2} alt="slide" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={s2} alt="slide" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={s2} alt="slide" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={s2} alt="slide" />
              </SwiperSlide>
            </Swiper>
            {/* / */}
            {/* # */}
            {/* / */}
            <ul className="tabs">
              <li className="tab_active">
                <div className="content">
                  <div className="title">
                    <div className="order">
                      01/<span>11</span>
                    </div>
                    <h2>Комплекс</h2>
                  </div>
                  <div className="subtext">
                    Комплекс расположен в 40 метрах от моря в центре Адлерского
                    района, из окон открываются непревзойденные виды на морской
                    горизонт.
                  </div>
                </div>
              </li>
              {/* / */}
              <li>
                <div className="content">
                  <div className="title">
                    <div className="order">
                      02/<span>11</span>
                    </div>
                    <h2>ОТДЕЛКА</h2>
                  </div>
                  <div className="subtext">
                    Комплекс расположен в 40 метрах от моря в центре Адлерского
                    района, из окон открываются непревзойденные виды на морской
                    горизонт.
                  </div>
                </div>
              </li>
              <li>
                <div className="content">
                  <div className="title">
                    <div className="order">
                      03/<span>11</span>
                    </div>
                    <h2>Пляжи</h2>
                  </div>
                  <div className="subtext">
                    Комплекс расположен в 40 метрах от моря в центре Адлерского
                    района, из окон открываются непревзойденные виды на морской
                    горизонт.
                  </div>
                </div>
              </li>
              <li>
                <div className="content">
                  <div className="title">
                    <div className="order">
                      04/<span>11</span>
                    </div>
                    <h2>Туристический центр</h2>
                  </div>
                  <div className="subtext">
                    Комплекс расположен в 40 метрах от моря в центре Адлерского
                    района, из окон открываются непревзойденные виды на морской
                    горизонт.
                  </div>
                </div>
              </li>
              <li>
                <div className="content">
                  <div className="title">
                    <div className="order">
                      05/<span>11</span>
                    </div>
                    <h2>Рестораны и кафе</h2>
                  </div>
                  <div className="subtext">
                    Комплекс расположен в 40 метрах от моря в центре Адлерского
                    района, из окон открываются непревзойденные виды на морской
                    горизонт.
                  </div>
                </div>
              </li>
              <li>
                <div className="content">
                  <div className="title">
                    <div className="order">
                      06/<span>11</span>
                    </div>
                    <h2>Бары и клубы</h2>
                  </div>
                  <div className="subtext">
                    Комплекс расположен в 40 метрах от моря в центре Адлерского
                    района, из окон открываются непревзойденные виды на морской
                    горизонт.
                  </div>
                </div>
              </li>
              <li>
                <div className="content">
                  <div className="title">
                    <div className="order">
                      07/<span>11</span>
                    </div>
                    <h2>ТЦ и финансы</h2>
                  </div>
                  <div className="subtext">
                    Комплекс расположен в 40 метрах от моря в центре Адлерского
                    района, из окон открываются непревзойденные виды на морской
                    горизонт.
                  </div>
                </div>
              </li>
              <li>
                <div className="content">
                  <div className="title">
                    <div className="order">
                      08/<span>11</span>
                    </div>
                    <h2>Школы и д/с</h2>
                  </div>
                  <div className="subtext">
                    Комплекс расположен в 40 метрах от моря в центре Адлерского
                    района, из окон открываются непревзойденные виды на морской
                    горизонт.
                  </div>
                </div>
              </li>
              <li>
                <div className="content">
                  <div className="title">
                    <div className="order">
                      09/<span>11</span>
                    </div>
                    <h2>Соц. инфраструктура</h2>
                  </div>
                  <div className="subtext">
                    Комплекс расположен в 40 метрах от моря в центре Адлерского
                    района, из окон открываются непревзойденные виды на морской
                    горизонт.
                  </div>
                </div>
              </li>
              <li>
                <div className="content">
                  <div className="title">
                    <div className="order">
                      10/<span>11</span>
                    </div>
                    <h2>Красота и здоровье</h2>
                  </div>
                  <div className="subtext">
                    Комплекс расположен в 40 метрах от моря в центре Адлерского
                    района, из окон открываются непревзойденные виды на морской
                    горизонт.
                  </div>
                </div>
              </li>
              <li>
                <div className="content">
                  <div className="title">
                    <div className="order">
                      11/<span>11</span>
                    </div>
                    <h2>Супермаркеты</h2>
                  </div>
                  <div className="subtext">
                    Комплекс расположен в 40 метрах от моря в центре Адлерского
                    района, из окон открываются непревзойденные виды на морской
                    горизонт.
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="img_dot"></div>
        </section>

        {/* / */}
        {/* Location */}
        {/* / */}

        <section id="location" className="location">
          <div className="section_title">
            <h1>WONDERFUL LOCATION</h1>
            <p>*Превосходная локация</p>
          </div>
          <div className="wrap">
            <div id="map" className="map">
              <img src={map1} alt="map" />
              <div className="flags">
                <span className="dot d1"></span>
                <span className="dot d2"></span>
                <span className="dot d3"></span>
                <span className="crc"></span>
                <SvgArrow className="arrow a1" />
                <SvgArrow className="arrow a2" />
                <SvgMapF0 className="flag f0" />
                <SvgMapF1 className="flag f1" />
                <SvgMapF2 className="flag f2" />
                <SvgMapF3 className="flag f3" />
                <SvgMapF4 className="flag f4" />
                <SvgMapF5 className="flag f5" />
              </div>
            </div>
          </div>
        </section>

        {/* / */}
        {/* choose */}
        {/* / */}
        <div id="layout_gallery" className="layout_gallery">
          <button className="close" onClick={() => toggleLayoutGallery()}>
            <XLg />
          </button>
          <div className="modal m2">
            <Swiper
              // install Swiper modules
              speed={1000}
              modules={[Pagination]}
              spaceBetween={5}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSwiper={(s) => {
                setL_swiper(s);
              }}
            >
              <button
                className="control_btn l_btn"
                onClick={() => l_swiper.slidePrev()}
              >
                <SvgArrowLeft />
              </button>
              <button
                className="control_btn r_btn"
                onClick={() => l_swiper.slideNext()}
              >
                <SvgArrowRight />
              </button>
              <SwiperSlide>
                <img src={s2} alt="p" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={s1} alt="p" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={s2} alt="p" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={s1} alt="p" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div id="layout_price" className="layout_price">
          <button className="close" onClick={() => toggleLayoutPrice()}>
            <XLg />
          </button>
          <div className="modal">
            <iframe src="" frameBorder={"0px"}></iframe>
          </div>
        </div>
        {/* / */}
        {/* / */}
        {/*  */}
        <section id="choose" className="choose">
          <div className="section_title">
            <h1>CHOOSE YOUR DREAM</h1>
            <p>*Выберете апартаменты мечты</p>
          </div>
          <div className="wrap">
            <div id="tab_slider" className="tab_slider">
              {/* slides go here */}
              <Swiper
                className="slider"
                speed={1000}
                simulateTouch={false}
                touchEventsTarget="container" // Disable touch interactions on the whole container
                noSwiping={true} // Disable swiping for all slides
                noSwipingSelector=".no-swipe"
                spaceBetween={0}
                slidesPerView={1}
                centeredSlides={true}
                onSwiper={(s) => {
                  setApartmentSwiper(s);
                  corpsSelect(s);
                }}
              >
                <SwiperSlide className="slide">
                  <div className="step step1 no-swipe">
                    <div className="content">
                      {/* <Corps2 /> */}
                      <div id="corps_body" className="corps_body">
                        <Corps />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                  <div className="step step2 no-swipe">
                    <div className="content">
                      <input
                        type="radio"
                        name="select"
                        id="select_sea"
                        onClick={() => viewSelect(1)}
                      />
                      <label htmlFor="select_sea">
                        <img src={choose1} alt="choose1" />
                        <div className="wrap_w">
                          <div className="window">
                            <span>вид на море</span>
                          </div>
                        </div>
                      </label>
                      <input
                        type="radio"
                        name="select"
                        id="select_mountains"
                        onClick={() => viewSelect(2)}
                      />
                      <label htmlFor="select_mountains">
                        <img src={choose2} alt="choose2" />
                        <div className="wrap_w">
                          <div className="window">
                            <span>вид на горы</span>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                  <div className="step step3 no-swipe">
                    <div className="content">
                      {/* /SubSlider/ */}
                      <Swiper
                        speed={1000}
                        spaceBetween={14}
                        slidesPerView={1.1}
                        centeredSlides={true}
                        onSlideChange={(s) => layoutSelect(s)}
                        id="discover_slider"
                      >
                        <SwiperSlide>
                          <div className="card">
                            <div className="img">
                              <img src={c1} alt="corpuse" />
                            </div>
                            <div className="btns">
                              <button
                                className="btn btn_gallery"
                                onClick={() => toggleLayoutGallery()}
                              >
                                фото
                              </button>
                              <button
                                className="btn btn_price"
                                onClick={() => toggleLayoutPrice()}
                              >
                                цена
                              </button>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="card">
                            <div className="img">
                              <img src={c1} alt="corpuse" />
                            </div>
                            <div className="btns">
                              <button
                                className="btn btn_gallery"
                                onClick={() => toggleLayoutGallery()}
                              >
                                фото
                              </button>
                              <button
                                className="btn btn_price"
                                onClick={() => toggleLayoutPrice()}
                              >
                                цена
                              </button>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="card">
                            <div className="img">
                              <img src={c1} alt="corpuse" />
                            </div>
                            <div className="btns">
                              <button
                                className="btn btn_gallery"
                                onClick={() => toggleLayoutGallery()}
                              >
                                фото
                              </button>
                              <button
                                className="btn btn_price"
                                onClick={() => toggleLayoutPrice()}
                              >
                                цена
                              </button>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              {/* / */}
              {/* / */}
              {/* / */}
              <div className="steps">
                <h1 className="title">
                  <CaretUpFill />
                  выберите корпус
                </h1>
                <div className="tabs">
                  <button
                    className="btn active"
                    data-value=""
                    onClick={() => {
                      apartment_swiper.slideTo(0);
                    }}
                  >
                    корпус
                    <span>
                      {selectData.corp ? `Корпус ${selectData.corp}` : "Шаг 1"}
                    </span>
                  </button>
                  <button
                    className="btn"
                    data-value=""
                    onClick={() => {
                      apartment_swiper.slideTo(1);
                    }}
                  >
                    вид
                    <span>{btnSubT2}</span>
                  </button>
                  <button
                    className="btn"
                    onClick={() => {
                      apartment_swiper.slideTo(2);
                    }}
                    data-value=""
                  >
                    ПЛАНИРОВКА
                    <span>{btnSubT3 ? `Планировка ${btnSubT3}` : "Шаг 3"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* / */}
        {/* overview */}
        {/* / */}
        <section id="overview" className="overview">
          <div className="video">
            <img src={overview} alt="overview" />
          </div>
          <div className="window">
            <button
              id="video_btn"
              className="video_btn"
              onClick={() => {
                modalVideoToggle();
              }}
            >
              <PlayCircleFill className="play_icon" />
            </button>
            <div id="modal_video" className="modal_video">
              <div className="modal">
                <video
                  ref={videoRef}
                  id="video"
                  src={video_ao}
                  loading="lazy"
                  controls
                ></video>
              </div>
              <button className="close" onClick={() => modalVideoToggle()}>
                <XLg />
              </button>
            </div>
            <div className="content">
              <div className="section_title">
                <h1>APARTHotel overview</h1>
                <p>*обзор АПАРТ-ОТЕЛЯ</p>
              </div>
              <span className="text">
                Окунитесь в неповторимую атмосферу элитного отдыха в самом
                сердце туристического центра Сочи, где каждый день начинается с
                улыбки и изумительных видов на море. Отдыхайте и наслаждайтесь
                беззаботной жизнью в одном из лучших премиальных комплексов
                Сочи!
              </span>
            </div>
          </div>
          <div className="img_dot"></div>
        </section>
        {/* / */}
        {/* info */}
        {/* / */}
        <section className="info">
          <div className="section_title">
            <h1>TEXT HEADER</h1>
            <p>*ТЕКСТОВЫЙ ЗАГОЛОВОК</p>
          </div>
          <div className="wrap">
            <img className="img" src={info} alt="info" />

            <div className="content">
              <div className="text">
                <p>
                  Апарт-отель Gorizont находится на финальном этапе
                  строительства,
                  <strong> срок сдачи 4кв. 2024г.</strong>
                </p>
                <a href="#link">
                  Вы можете ознакомиться с ходом строительства.
                  <PlayCircleFill />
                </a>
                <p>
                  Комплекс состоит из 13 корпусов, 14 этажей, 2 подземных этажа,
                  коммерция, парковка, статус апартаменты.
                </p>
                <p>
                  В настоящий момент доступна покупка только за наличный расчет.
                </p>
              </div>
              {/* btn */}
              <button className="btn">ТЕКСТ КНОПКИ</button>
            </div>
          </div>
        </section>
        {/* / */}
        {/* investment */}
        {/* / */}
        <section className="investment">
          <div className="section_title">
            <h1>INVESTMENT IN THE FUTURE</h1>
            <p>*ИНВЕСТИЦИИ В БУДУЩЕЕ</p>
          </div>
          {/* slider */}
          <div className="tab_slider">
            <div className="tabs">
              <button
                className="btn active"
                onClick={() => {
                  invSliding(0);
                }}
              >
                аренда
              </button>
              <button
                className="btn"
                onClick={() => {
                  invSliding(1);
                }}
              >
                перепродажа
              </button>
            </div>

            <Swiper
              speed={1000}
              spaceBetween={0}
              slidesPerView={1}
              centeredSlides={true}
              onSwiper={(s) => {
                setInvestment_slider(s);
              }}
              onSlideChange={(s) => {
                invSliding(s?.activeIndex);
              }}
            >
              <SwiperSlide>
                <div className="slide">
                  <p className="text_title">
                    Пассивный доход с посуточной аренды
                  </p>
                  <p>
                    Комплекс расположен в самом туристическом районе Сочи –{" "}
                    <strong>
                      центр Адлера, это идеальная локация для сдачи недвижимости
                      в аренду.
                    </strong>
                  </p>
                  <p>
                    В центре Адлера постоянный высокий спрос на аренду в летний
                    и зимний период.
                  </p>
                  <p>
                    Благодаря выгодной локации, будет обеспечена высокая
                    доходность со сдачи апартаментов в аренду{" "}
                    <strong>круглый год.</strong>
                  </p>
                  <a href="#request" className="report_btn">
                    <Report />
                    запросить отчет
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide">
                  <p className="text_title">Покупка с целью перепродажи</p>
                  <p>
                    Повседневная практика показывает, что реализация намеченных
                    плановых заданий в значительной степени обуславливает
                    создание модели развития.
                  </p>
                  <img src={in2} alt="in2" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        {/* / */}
        {/* request form */}
        {/* / */}
        <section id="request" className="request">
          {/* form */}
          <Formik
            initialValues={{ name: "", phone: "", message: "" }} // Set initial form values
            onSubmit={(values) => {
              console.log("Form submitted!");
              console.log("Name:", values.name);
              console.log("Phone:", values.phone);
              console.log("Message:", values.message);
              // You can perform additional logic or API calls here
            }}
          >
            <Form id="request_form" name="request" className="form">
              <div className="title">
                <h1>отправьте заявку</h1>
                <p>
                  Для получения консультации по апарт-отелю Gorizont отправьте
                  заявку.
                </p>
              </div>
              <div className="body">
                <Field
                  type="text"
                  minLength={3}
                  required
                  placeholder="Ваше имя"
                  name="name"
                  autoComplete="true"
                />
                <Field
                  type="tel"
                  minLength={10}
                  required
                  placeholder="Контактный телефон"
                  name="phone"
                  autoComplete="true"
                />
                <Field
                  as="textarea"
                  id="form_message"
                  name="message"
                  cols="8"
                  rows="3"
                  placeholder="Ваше сообщение"
                  required
                />
                <button type="submit" className="send_btn">
                  отправить заявку
                </button>
              </div>
            </Form>
          </Formik>
        </section>
        {/* / */}
        {/* contacs */}
        {/* / */}
        <section id="contacts" className="contacts">
          <img className="map" src={map1} alt="map1" />

          <div className="flags">
            <span className="crc"></span>
            <SvgMapF0 className="flag f0" />
          </div>
          <div className="card">
            <div className="section_title">
              <h1>follow your dreams</h1>
              <p>*СДЕЛАЙТЕ ПЕРВЫЙ ШАГ НАВСТРЕЧУ вашей мечте !</p>
            </div>
            <hr />
            <div className="contact_info">
              <span className="t1">АДРЕС:</span>
              <span className="t2">Сочи, ул. Просвещения, д. 24</span>
            </div>
            <div className="contact_info">
              <span className="t1">КОНТАКТНЫЙ телефон:</span>
              <span className="t2">+7 999 123 45 67</span>
            </div>
            <div className="social_links">
              <a href="#whatsapp">
                <SvgWhatsapp /> WhatsApp
              </a>
              <a href="#telegram">
                <SvgTelegram /> Telegram
              </a>
            </div>
          </div>
        </section>
        {/* / */}
      </div>
      {/* PC */}
      <div className="pc">
        <div className="overlay" onClick={() => toggleRequestModal()}></div>
        <div id="request_modal" className="request_modal">
          <button className="close_btn" onClick={() => toggleRequestModal()}>
            <XLg />
          </button>
          <Formik
            initialValues={{ name: "", phone: "", message: "" }} // Set initial form values
            onSubmit={(values) => {
              console.log("Form submitted!");
              console.log("Name:", values.name);
              console.log("Phone:", values.phone);
              console.log("Message:", values.message);
              // You can perform additional logic or API calls here
            }}
          >
            <Form id="request_form" name="request" className="form">
              <div className="title">
                <h1>отправьте заявку</h1>
                <p>
                  Для получения консультации по апарт-отелю Gorizont отправьте
                  заявку.
                </p>
              </div>
              <div className="body">
                <Field
                  type="text"
                  minLength={3}
                  required
                  placeholder="Ваше имя"
                  name="name"
                  autoComplete="true"
                />
                <Field
                  type="tel"
                  minLength={10}
                  required
                  placeholder="Контактный телефон"
                  name="phone"
                  autoComplete="true"
                />
                <Field
                  as="textarea"
                  id="form_message"
                  name="message"
                  cols="8"
                  rows="3"
                  placeholder="Ваше сообщение"
                  required
                />
                <button type="submit" className="send_btn">
                  отправить заявку
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        <Swiper
          // install Swiper modules
          speed={1000}
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(s) => {
            setPc_swiper(s);
          }}
        >
          <SwiperSlide>
            <img src={bigP} alt="slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bigP} alt="slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bigP} alt="slide" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bigP} alt="slide" />
          </SwiperSlide>
        </Swiper>
        <div className="wrap">
          <section className="window">
            <button
              className="control_btn l_btn"
              onClick={() => pc_swiper.slidePrev()}
            >
              <SvgArrowL />
            </button>
            <button
              className="control_btn r_btn"
              onClick={() => pc_swiper.slideNext()}
            >
              <SvgArrowR />
            </button>
            <div className="card">
              <div className="section_title">
                <h1>THIS IS GORIZONT of your dreams</h1>
                <p>*ЭТО ГОРИЗОНТ ВАШЕЙ МЕЧТЫ</p>
              </div>
              <span className="text">
                Окунитесь в неповторимую атмосферу элитного отдыха в самом
                сердце туристического центра Сочи!
              </span>
              <button
                className="request_btn"
                onClick={() => toggleRequestModal()}
              >
                Оставить заявку
              </button>
            </div>
            <div className="qr_code">
              <SvgQRcode className="qr" />
              <small>полная версия сайта, доступна на телефоне.</small>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Main;
