const faqs = document.querySelectorAll(".faq-box");

faqs.forEach((faq) => {
  const question = faq.querySelector(".question");
  const icon = faq.querySelector(".icon");
  const answer = faq.querySelector(".answer");

  // Attach click event to the question (not the faq-box directly)
  question.addEventListener("click", () => {
    // Toggle active class on icon and answer for this faq
    icon.classList.toggle("active");
    answer.classList.toggle("active");

    // Optional: Close other faq-boxes (accordion effect)
    faqs.forEach((otherFaq) => {
      if (otherFaq !== faq) {
        const otherIcon = otherFaq.querySelector(".icon");
        const otherAnswer = otherFaq.querySelector(".answer");

        otherIcon.classList.remove("active");
        otherAnswer.classList.remove("active");
      }
    });
  });
});
