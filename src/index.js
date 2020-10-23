let nav = document.querySelector(".nav");
let menu__icon__open = document.querySelector(".menu-icon__open");
let menu__icon__close = document.querySelector(".menu-icon__close");
let menu__icons = document.querySelector(".menu-icons");
let body = document.querySelector("body");

console.log(nav);
// MENU TOGGLE FUNCTIONALITY
menu__icons.addEventListener("click", () => {
  menu__icon__close.classList.toggle("hidden");
  menu__icon__open.classList.toggle("hidden");
  nav.classList.toggle("hidden");
  body.classList.toggle("lock");
});

// ACCORDION FUNCTIONALITY

let collaspe_icon = Array.from(
  document.querySelectorAll(".faqs-accordion__collaspe-icon")
);
let accordion__answers = Array.from(
  document.querySelectorAll(".faqs-accordion__answer")
);

let accordion__questions = Array.from(
  document.querySelectorAll(".faqs-accordion__question")
);
accordion__questions.forEach((question) => {
  let icon = question.children[1].children[0];
  let accordion_answer = question.nextElementSibling;
  let answer_attr = accordion_answer.dataset.number;

  question.addEventListener("click", () => {
    reset_accordion_item(answer_attr);
    accordion_answer.classList.toggle("collaspe");
    if (accordion_answer.classList.contains("collaspe")) {
      accordion_answer.style.height = accordion_answer.scrollHeight + "px";
      icon.classList.add("rotate_icon");
    } else {
      accordion_answer.style.height = "0px";
      icon.classList.remove("rotate_icon");
    }
  });
});

let reset_accordion_item = (answer_attr) => {
  // reset collasped answers
  accordion__answers.forEach((answer) => {
    if (answer.dataset.number != answer_attr) {
      answer.classList.remove("collaspe");
      answer.style.height = "0px";
    }
  });
  // reset icons
  collaspe_icon.forEach((icon_) => {
    icon_.firstElementChild.classList.remove("rotate_icon");
  });
};

// FORM VALIDATION
let newsletter_form = document.querySelector(".newsletter-form");
let form__input = document.querySelector(".newsletter-form__input");

newsletter_form.addEventListener("submit", (e) => {
  if (!form__input.validity.valid) {
    check_input_validity(form__input);
  } else {
    fetch_shorten_url();
  }
  e.preventDefault();
});

let check_input_validity = (field) => {
  let validity_value = field.validity.valid;
  let err_msg = field.parentElement.children[1];
  if (field.validity.valueMissing) {
    err_msg.textContent = `Please add a ${field.name}`;
  } else if (field.validity.typeMismatch) {
    err_msg.textContent = "Please input a valid email";
  }

  function display_err(value) {
    if (!value) {
      err_msg.style.display = "block";
    } else {
      err_msg.style.display = "none";
    }
  }
  display_err(validity_value);
};

form__input.addEventListener("input", (e) => {
  check_input_validity(e.target);
});

// TAB FUNCTIONALITY

let tab_item = Array.from(document.querySelectorAll(".tab__item > *"));
let tab_content_item = Array.from(
  document.querySelectorAll(".tab__content-item")
);

tab_item.forEach((item_) => {
  item_.addEventListener("click", (e) => {
    hide_all();
    item_.classList.add("active");
    tab_content_item.forEach((item) => {
      if (`tab_${item_.parentElement.dataset.tab}` == item.id) {
        item.classList.remove("hide");
      }
    });
  });
});
let hide_all = () => {
  tab_content_item.forEach((item) => {
    item.classList.add("hide");
  });
  tab_item.forEach((item) => {
    item.classList.remove("active");
  });
};
