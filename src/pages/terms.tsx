import React from "react";
import { address, company_name, phone_number } from "../Genaral/secrete";

const TermsAndConditions = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Terms & Conditions</h1>

      <p style={styles.muted}>
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <p>
        Welcome to <strong>{company_name}</strong>. By accessing or using our
        website, services, or communicating with us via WhatsApp, you agree to
        be bound by these Terms & Conditions. Please read them carefully.
      </p>

      <section>
        <h2>1. About {company_name}</h2>
        <p>
          {company_name} provides genuine business services/products as
          described on this website. We aim to keep all information transparent,
          accurate, and up to date.
        </p>
      </section>

      <section>
        <h2>2. Use of Our Services</h2>
        <p>By using our services, you agree that:</p>
        <ul>
          <li>You will use our services only for lawful purposes</li>
          <li>You will not misuse or attempt to disrupt our website</li>
          <li>You will not copy or resell our content without permission</li>
        </ul>
      </section>

      <section>
        <h2>3. WhatsApp Communication & User Consent</h2>
        <p>
          By submitting your contact details, you explicitly agree (opt-in) to
          receive messages from {company_name} via WhatsApp. These messages may
          include service-related updates, responses to inquiries, or important
          notifications.
        </p>
        <p>
          We do not send spam or misleading messages. You may opt out at any
          time by replying <strong>“STOP”</strong>.
        </p>
      </section>

      <section>
        <h2>4. Data Usage</h2>
        <p>
          Any personal data shared with us is handled responsibly and in
          accordance with our Privacy Policy. We do not sell or misuse your
          personal information.
        </p>
      </section>

      <section>
        <h2>5. Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, and branding,
          belongs to {company_name} unless stated otherwise. Unauthorized use is
          prohibited.
        </p>
      </section>

      <section>
        <h2>6. Limitation of Liability</h2>
        <p>
          {company_name} shall not be held liable for any direct or indirect
          damages arising from the use of our website or services.
        </p>
      </section>

      <section>
        <h2>7. Changes to These Terms</h2>
        <p>
          We may update these Terms & Conditions from time to time. Continued
          use of our services indicates acceptance of the updated terms.
        </p>
      </section>

      <section>
        <h2>8. Contact Us</h2>

        <p>
          If you have any questions regarding these Terms & Conditions, please
          contact us via the details provided on our Contact page.
        </p>
        <p className="text-sm mt-3 leading-relaxed text-white">
          <b>{company_name}</b>
          <br />
          {address.line1}
          <br />
          {address.line2}
          <br />
          {address.city}, {address.district}, {address.pincode}
          <br />
          {address.state}, {address.country}
          <br />
          <a href={`tel:${phone_number}`} className="underline">
            📞 +91 {phone_number}
          </a>
        </p>
        <p>
          <strong>Thank you for using {company_name}!</strong>
        </p>
      </section>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "24px",
    fontFamily: "system-ui, sans-serif",
    lineHeight: 1.7,
    color: "#1f2937",
  },
  title: {
    fontSize: "2.2rem",
    marginBottom: "8px",
  },
  muted: {
    color: "#6b7280",
    marginBottom: "24px",
  },
};

export default TermsAndConditions;
