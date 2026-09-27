"use strict";
// HTML constraints remain available when JavaScript is disabled.
// Enable custom validation only after the script has loaded.
const form = document.querySelector("#join-form");
const status = document.querySelector("#form-status");
const rules = [
  { id: "full-name", error: "name-error", check: el => el.value.trim().length >= 2 && el.value.trim().length <= 80, message: "Enter a name between 2 and 80 characters." },
  { id: "email", error: "email-error", check: el => el.value.trim() !== "" && el.validity.valid, message: "Enter a valid email address, such as name@example.com." },
  { id: "session", error: "session-error", check: el => ["focus", "problem-solving", "reset"].includes(el.value), message: "Choose a session." },
  { id: "goal", error: "goal-error", check: el => el.value.trim().length >= 10 && el.value.trim().length <= 500, message: "Describe your goal in 10–500 characters." },
  { id: "agreement", error: "agreement-error", check: el => el.checked, message: "Please agree to the club’s shared agreements." }
];
function validateField(rule) {
  const field = document.getElementById(rule.id);
  const valid = rule.check(field);
  document.getElementById(rule.error).textContent = valid ? "" : rule.message;
  field.setAttribute("aria-invalid", String(!valid));
  return valid;
}
form.noValidate = true;
form.addEventListener("submit", event => {
  // Cancel navigation: this static classroom demo has no receiving server.
  event.preventDefault();
  const invalid = rules.filter(rule => !validateField(rule));
  if (invalid.length) {
    status.textContent = `Please correct ${invalid.length} field${invalid.length === 1 ? "" : "s"} below.`;
    document.getElementById(invalid[0].id).focus();
    return;
  }
  status.textContent = "Your form passed validation! This is a classroom demonstration; no information was sent or stored.";
  status.focus();
});
rules.forEach(rule => {
  document.getElementById(rule.id).addEventListener("input", () => {
    status.textContent = "";
    if (document.getElementById(rule.id).getAttribute("aria-invalid") === "true") validateField(rule);
  });
});
