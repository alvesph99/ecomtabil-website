"use client";

import { useState, type FormEvent } from "react";

export function DiagnosticForm({ whatsapp }: { whatsapp: string }) {
  const [ready, setReady] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const destination = new URL(whatsapp);
    destination.searchParams.set("text", `Olá! Sou de Ibitinga e quero um diagnóstico da minha operação.\nNome: ${String(data.get("name")).trim()}\nCanal principal: ${data.get("channel")}\nMomento da empresa: ${data.get("stage")}`);
    setReady(true);
    window.location.assign(destination.toString());
  }

  return (
    <form className="ibi-form" onSubmit={submit}>
      <h3>Vamos entender sua operação?</h3>
      <p>Três informações para começar a conversa certa.</p>
      <label htmlFor="ibi-name">Como podemos chamar você?</label>
      <input id="ibi-name" name="name" autoComplete="given-name" placeholder="Seu nome" required maxLength={80} pattern=".*\S.*" />
      <label htmlFor="ibi-channel">Onde você mais vende?</label>
      <select id="ibi-channel" name="channel" required defaultValue="">
        <option value="" disabled>Selecione seu principal canal</option>
        {["Mercado Livre", "Shopee", "Amazon", "Loja própria", "Vários marketplaces", "Ainda vou começar", "Outro canal"].map(item => <option key={item}>{item}</option>)}
      </select>
      <label htmlFor="ibi-stage">Em que momento sua empresa está?</label>
      <select id="ibi-stage" name="stage" required defaultValue="">
        <option value="" disabled>Selecione uma opção</option>
        {["Quero abrir minha empresa", "Sou MEI e quero crescer", "Já tenho empresa e contador", "Preciso regularizar minha operação"].map(item => <option key={item}>{item}</option>)}
      </select>
      <button className="button" type="submit">Continuar no WhatsApp <span aria-hidden="true">→</span></button>
      <small>Você revisa e envia a mensagem no WhatsApp. Estes dados não são armazenados neste site.</small>
      <p className="ibi-form-status" role="status">{ready ? "Abrindo o WhatsApp com o resumo da sua operação." : "Sem compromisso. Sem contratação automática."}</p>
    </form>
  );
}
