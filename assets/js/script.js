'use strict';

// element toggle function
const elementToggleFunc = (elem) => {
  elem.classList.toggle('active');
};

// sidebar variables
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

// sidebar toggle functionality for mobile
if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener('click', () => elementToggleFunc(sidebar));
}

/**
 * Testimonials modal
 * (Disabled safely if modal HTML is not present)
 */
const testimonialsItem = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');

const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

const hasTestimonialsModal =
  testimonialsItem.length &&
  modalContainer &&
  modalCloseBtn &&
  overlay &&
  modalImg &&
  modalTitle &&
  modalText;

if (hasTestimonialsModal) {
  const testimonialsModalFunc = () => {
    modalContainer.classList.toggle('active');
    overlay.classList.toggle('active');
  };

  for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener('click', function () {
      const avatar = this.querySelector('[data-testimonials-avatar]');
      const title = this.querySelector('[data-testimonials-title]');
      const text = this.querySelector('[data-testimonials-text]');

      if (avatar) {
        modalImg.src = avatar.src;
        modalImg.alt = avatar.alt || '';
      }

      if (title) modalTitle.innerHTML = title.innerHTML;
      if (text) modalText.innerHTML = text.innerHTML;

      testimonialsModalFunc();
    });
  }

  modalCloseBtn.addEventListener('click', testimonialsModalFunc);
  overlay.addEventListener('click', testimonialsModalFunc);
}

/**
 * Custom select + filters (Portfolio)
 */
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = (selectedValue) => {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === 'all') {
      filterItems[i].classList.add('active');
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add('active');
    } else {
      filterItems[i].classList.remove('active');
    }
  }
};

if (select && selectValue) {
  select.addEventListener('click', function () {
    elementToggleFunc(this);
  });

  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener('click', function () {
      const selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  }
}

// large-screen filter buttons
if (filterBtn.length && selectValue) {
  let lastClickedBtn = filterBtn[0];

  for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener('click', function () {
      const selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      if (lastClickedBtn) lastClickedBtn.classList.remove('active');
      this.classList.add('active');
      lastClickedBtn = this;
    });
  }
}

/**
 * Contact form
 * (Disabled safely if contact form HTML is not present)
 */
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

if (form && formInputs.length && formBtn) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('input', function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute('disabled');
      } else {
        formBtn.setAttribute('disabled', '');
      }
    });
  }
}

/**
 * Skills progress animation
 */
const skillSection = document.querySelector('.skill');
const skillBars = document.querySelectorAll('.skill-progress-fill');

if (skillSection && skillBars.length) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  for (let i = 0; i < skillBars.length; i++) {
    const targetWidth = skillBars[i].style.width || '0%';
    skillBars[i].dataset.targetWidth = targetWidth;

    if (!prefersReducedMotion) {
      skillBars[i].style.width = '0%';
    }
  }

  const revealSkillBars = () => {
    for (let i = 0; i < skillBars.length; i++) {
      skillBars[i].style.width = skillBars[i].dataset.targetWidth;
    }
  };

  if (prefersReducedMotion) {
    revealSkillBars();
  } else if ('IntersectionObserver' in window) {
    const skillsObserver = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].isIntersecting) {
          revealSkillBars();
          observer.unobserve(skillSection);
        }
      },
      { threshold: 0.3 }
    );

    skillsObserver.observe(skillSection);
  } else {
    revealSkillBars();
  }
}

/**
 * Page navigation
 */
/**
 * Page navigation
 */
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener('click', function () {
    const targetPage = this.textContent.trim().toLowerCase();

    for (let j = 0; j < pages.length; j++) {
      pages[j].classList.toggle('active', pages[j].dataset.page === targetPage);
    }

    for (let k = 0; k < navigationLinks.length; k++) {
      navigationLinks[k].classList.toggle(
        'active',
        navigationLinks[k].textContent.trim().toLowerCase() === targetPage
      );
    }

    window.scrollTo(0, 0);
  });
}
