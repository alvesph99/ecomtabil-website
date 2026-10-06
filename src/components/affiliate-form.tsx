"use client";

import { FormEvent, useState } from "react";

export function AffiliateForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="affiliate-form" onSubmit={handleSubmit}>
      <div className="affiliate-form__row">
        <label>
          Nome completo <span aria-hidden="true">*</span>
          <input name="name" type="text" autoComplete="name" placeholder="Digite seu nome completo" required />
        </label>
        <label>
          E-mail <span aria-hidden="true">*</span>
          <input name="email" type="email" autoComplete="email" placeholder="seu@email.com" required />
        </label>
      </div>

      <label>
        Telefone
        <input name="phone" type="tel" autoComplete="tel" placeholder="(00) 00000-0000" />
      </label>

      <label>
        Como conheceu o programa?
        <select name="source" defaultValue="">
          <option value="" disabled>Selecione uma opção</option>
          <option value="instagram">Instagram</option>
          <option value="indicacao">Indicação</option>
          <option value="google">Google</option>
          <option value="outro">Outro</option>
        </select>
      </label>

      <div className="affiliate-form__row">
        <label>
          Cupom de desconto <span aria-hidden="true">*</span>
          <input name="coupon" type="text" placeholder="Crie o nome do seu cupom" required />
        </label>
        <label>
          Qual é a sua área de atuação? <span aria-hidden="true">*</span>
          <select name="area" defaultValue="" required>
            <option value="" disabled>Selecione uma opção</option>
            <option value="ecommerce">E-commerce</option>
            <option value="marketing">Marketing</option>
            <option value="contabilidade">Contabilidade</option>
            <option value="consultoria">Consultoria</option>
            <option value="outro">Outra</option>
          </select>
        </label>
      </div>

      <label className="affiliate-form__terms">
        <input name="terms" type="checkbox" required />
        <span>
          Li e aceito os <a href="#termos">termos e condições</a> do programa de afiliados <b aria-hidden="true">*</b>
        </span>
      </label>

      <div className="affiliate-form__footer">
        <button className="affiliate-form__submit" type="submit">Quero ser afiliado</button>
        {submitted && (
          <p className="affiliate-form__feedback" aria-live="polite">
            Obrigado pelo interesse. Em breve entraremos em contato para concluir seu cadastro.
          </p>
        )}
      </div>
    </form>
  );
}
