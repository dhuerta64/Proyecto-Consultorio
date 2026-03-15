import React from "react";
import "./contacto.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact_left">
        <h2>Contáctanos</h2>
        <p>
          Si tienes alguna pregunta o deseas agendar una cita, no dudes en
          comunicarte con nosotros.
        </p>

        <ul className="contact_info">
          <li><strong>Teléfono:</strong> +505 8390'0983</li>
          <li><strong>Email:</strong> consultoriomedicoregina20@gmail.com</li>
          <li><strong>Dirección:</strong> Barrio Monseñor Lezcano, de donde fue ek banco popular 1 cuadra al norte, 1 1/2 cuadra al oeste a mano derecha</li>
        </ul>

        <form className="contact_form">
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu correo" required />
          <textarea placeholder="Tu mensaje" rows="5" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>

      <div className="contact_right">
        {/* Google Maps Embed */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.1272599661762!2d-86.29905376297117!3d12.145707705677776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f71579c24023e45%3A0x60492df4920b1055!2sClinica%20m%C3%A9dica%20y%20laborator%C3%ADo!5e0!3m2!1ses-419!2sni!4v1773380601346!5m2!1ses-419!2sni" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  );
}
