document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("gallery-lightbox");
  const lightboxImage = document.getElementById("gallery-lightbox-image");
  const lightboxCaption = document.getElementById("gallery-lightbox-caption");
  const closeButton = lightbox?.querySelector(".gallery-lightbox-close");
  const stageButton = document.querySelector(".gallery-open");
  const stageImage = document.getElementById("gallery-stage-image");
  const galleryTabs = [...document.querySelectorAll(".gallery-tab")];
  const galleryControls = document.querySelectorAll("[data-gallery-direction]");
  const lightboxControls = document.querySelectorAll("[data-lightbox-direction]");
  let lastTrigger = null;
  let currentIndex = 0;

  if (!lightbox || !lightboxImage || !lightboxCaption || !closeButton || !stageButton || !stageImage || !galleryTabs.length) return;

  const galleryItems = galleryTabs.map((tab) => ({
    src: tab.dataset.src,
    alt: tab.dataset.alt || "Imagem da galeria Sintetizza"
  })).filter(({ src }) => Boolean(src));

  const normalizeIndex = (index) => (index + galleryItems.length) % galleryItems.length;

  const updateGallery = (index, options = {}) => {
    currentIndex = normalizeIndex(index);
    const item = galleryItems[currentIndex];
    if (!item) return;

    stageImage.src = item.src;
    stageImage.alt = item.alt;
    stageButton.setAttribute("aria-label", `Ampliar imagem: ${item.alt}`);

    galleryTabs.forEach((tab, tabIndex) => {
      const isActive = tabIndex === currentIndex;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      if (isActive && options.scrollTab) {
        tab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    });

    if (lightbox.classList.contains("is-active")) {
      lightboxImage.src = item.src;
      lightboxImage.alt = item.alt;
      lightboxCaption.textContent = item.alt;
    }
  };

  const goToRelativeImage = (direction) => {
    updateGallery(currentIndex + direction, { scrollTab: true });
  };

  const closeLightbox = () => {
    lightbox.classList.remove("is-active");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("gallery-lightbox-open");
    lastTrigger?.focus();
  };

  const openLightbox = () => {
    const item = galleryItems[currentIndex];
    if (!item) return;

    lastTrigger = stageButton;
    lightboxImage.src = item.src;
    lightboxImage.alt = item.alt;
    lightboxCaption.textContent = item.alt;
    lightbox.classList.add("is-active");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("gallery-lightbox-open");
    closeButton.focus();
  };

  galleryTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      updateGallery(index, { scrollTab: true });
    });
  });

  galleryControls.forEach((control) => {
    control.addEventListener("click", () => {
      goToRelativeImage(Number(control.dataset.galleryDirection));
    });
  });

  lightboxControls.forEach((control) => {
    control.addEventListener("click", (event) => {
      event.stopPropagation();
      goToRelativeImage(Number(control.dataset.lightboxDirection));
    });
  });

  stageButton.addEventListener("click", openLightbox);
  closeButton.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    const isLightboxOpen = lightbox.classList.contains("is-active");

    if (event.key === "Escape" && isLightboxOpen) {
      closeLightbox();
    }

    if ((event.key === "ArrowLeft" || event.key === "ArrowRight") && (isLightboxOpen || document.activeElement?.closest("#gallery-viewer"))) {
      event.preventDefault();
      goToRelativeImage(event.key === "ArrowRight" ? 1 : -1);
    }
  });

  updateGallery(0);
});
