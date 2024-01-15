// tabs scroll event
export const scroll = () => {
  const slider = document.getElementById("discover_slider");
  const tabs = document.querySelectorAll("#discover .tabs_container .tabs li");
  const tabs_cnt = document.querySelectorAll("#discover .tabs_container");
  const location = document.getElementById("location");
  const map = document.querySelector("#location #map .flags");
  //   func
  window.addEventListener("scroll", () => {
    let s_top = slider.offsetTop,
      s_h = slider.offsetHeight,
      s_bottom = s_top - s_h;
    let wsy = window.scrollY;
    // let lt_top;
    let active_tab = document.querySelector(
      "#discover .tabs_container .tabs .tab_active"
    );
    if (s_bottom < 200) {
      slider.style.marginBottom = "0px";
    } else if (tabs[tabs.length - 1].className === "tab_active") {
      slider.style.marginBottom = active_tab.offsetHeight + "px";
    } else if (s_bottom > 200) {
      slider.style.marginBottom = "75px";
    }
    if (wsy + window.innerHeight / 2 > location.offsetTop) {
      map.classList.add("flags_on");
    }
  });
};
export const tabSlider = (i) => {
  const container = document.querySelector("#tab_slider .slider_container");
  const btns = document.querySelectorAll("#tab_slider .steps .tabs .btn");
  let active_btn = document.querySelector("#tab_slider .steps .tabs .active");
  // let prevEl, data;
  if (!i) {
    for (let i = 0; i < btns.length; i++) {
      const el = btns[i];
      click(el, i, container);
    }
  } else {
    btnEvent(btns[i], i, container);
  }

  function click(el, i) {
    el.addEventListener("click", () => {
      btnEvent(el, i, container);
    });
  }
  function btnEvent(el, i) {
    if (active_btn.dataset.value) {
      active_btn.classList.add("selected");
    } else {
      active_btn.classList.remove("selected");
    }
    for (let i = 0; i < btns.length; i++) {
      btns[i].classList.remove("active");
    }
    el.classList.add("active");
    active_btn = el;
    // const x = 397;
    // container.style.transform = `translateX(-${x * i}px)`;
  }
};
export const tabClick = () => {
  const feh = document.getElementById("first_section").offsetHeight;
  const sect = document.getElementById("discover");
  const slider = document.getElementById("discover_slider");
  const tabs = document.querySelectorAll("#discover .tabs_container .tabs li");
  // let active_tab = tabs[0];
  let s_h = slider.offsetHeight;
  if (s_h === 0) {
    s_h = 393;
  }
  const sect_top = sect.offsetTop;

  tabs.forEach((el, i) => {
    event(el, i);
  });

  function event(el, i) {
    el.addEventListener("click", () => {
      activate(el, i);
    });
  }
  function activate(t, ti) {
    for (let i = 0; i < tabs.length; i++) {
      const el = tabs[i];
      el.classList.remove("tab_active");
    }
    t.classList.add("tab_active");
  }
};

// gallery

export const corpsHoverEvent = () => {
  let svg = document.querySelector("#choose #corps_select");
  let rects = document.querySelectorAll("#choose #corps_select .corp");
  rects.forEach((rect) => {
    rect.addEventListener("click", (e) => {
      svg.appendChild(rect);
    });
    rect.addEventListener("mouseenter", (e) => {
      svg.appendChild(rect);
    });
  });
};

// corps
//
//
export const corpsResponsive = () => {
  const corps = document.getElementById("corps_select");
  const corpsBody = document.getElementById("corps_body");
  const minWindowWidth = 300;
  const maxWindowWidth = 500;

  const updateCorpsStyles = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth < maxWindowWidth && minWindowWidth < windowWidth) {
      const scale = 2.25 - maxWindowWidth / windowWidth;
      const corpsWidth = corpsBody.offsetWidth;

      corps.style.transform = `scale(${scale})`;

      if (windowWidth < 400) {
        corps.style.marginLeft = corpsWidth / 7.5 + "px";
      } else {
        corps.style.marginLeft = corpsWidth / 6 + "px";
      }
    }
  };

  window.addEventListener("resize", updateCorpsStyles);
  updateCorpsStyles();
};
