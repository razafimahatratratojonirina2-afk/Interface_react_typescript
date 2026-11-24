import { useState } from "react";
import "./ContactButton.css";
import { Mail } from "lucide-react";
const GMAIL_COMPOSE_URL = "https://mail.google.com/mail/?view=cm&fs=1";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactButtonProps = {
  to?: string;
  subject?: string;
  body?: string;
  label?: string;
};

function ContactButton({
  to,
  subject = "",
  body = "",
  label = "Nous contacter",
}: ContactButtonProps) {
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = () => {
    const recipient = (to || "").trim();

    if (recipient === "") {
      setErrorMessage("L'adresse e-mail du destinataire est absente.");
      return;
    }

    if (!EMAIL_REGEX.test(recipient)) {
      setErrorMessage("L'adresse e-mail du destinataire n'est pas valide.");
      return;
    }

    setErrorMessage("");

    const url =
      `${GMAIL_COMPOSE_URL}` +
      `&to=${encodeURIComponent(recipient)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="contact-wrapper">
      <button type="button" className="contact-button" onClick={handleClick}>
        <span className="contact-button__icon" aria-hidden="true"><Mail /></span>
        {label}
      </button>

      {errorMessage && (
        <p className="contact-error" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export default ContactButton;