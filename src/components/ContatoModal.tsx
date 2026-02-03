"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContatoModal({ onClose }) {
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);

  const wppLink = useMemo(() => {
    const number = "5574999115799";
    const msg = encodeURIComponent("Olá! Gostaria de saber mais sobre os seus serviços.");
    return `https://wa.me/${number}?text=${msg}`;
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSending(true);
    setResult("Enviando...");

    const data = new FormData(e.target);
    data.append("access_key", "e3f0b990-31ba-4ae8-8051-c6c8cbb880f5");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      }).then(r => r.json());

      if (res.success) {
        setResult("Mensagem enviada com sucesso! 🎉");
        e.target.reset();
        setTimeout(onClose, 1500);
      } else {
        setResult("Erro ao enviar. Tente novamente ou fale pelo WhatsApp.");
      }
    } catch {
      setResult("Erro de conexão. Tente novamente mais tarde.");
    }

    setIsSending(false);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white p-8 rounded-2xl max-w-md w-full shadow-lg relative"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-xl"
            aria-label="Fechar modal"
          >
            &times;
          </button>

          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold mb-2">Solicite seu orçamento</h2>
            <p className="text-gray-600 text-sm">
              Pronto para tirar seu projeto do papel? <br />
              Vamos construir algo extraordinário juntos!
            </p>
          </div>

          <a
            href={wppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-[15px] mb-5 w-full flex justify-center items-center gap-2 transition"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12.04 2C6.58 2 2.14 6.44 2.14 11.9c0 1.98.52 3.83 1.52 5.47L2 22l4.78-1.57a9.78 9.78 0 005.26 1.49h.01c5.46 0 9.9-4.44 9.9-9.9 0-5.46-4.44-9.9-9.91-9.9z"/>
            </svg>
            Falar pelo WhatsApp
          </a>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="hidden" name="subject" value="📩 Novo pedido de orçamento - ZunBee Agency" />
            <input type="hidden" name="from_name" value="ZunBee Agency" />
            <input type="hidden" name="replyto" value="cliente" />

            <input name="name" placeholder="Nome" required className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-main outline-none" />
            <input name="email" type="email" placeholder="Email" required className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-main outline-none" />

            <select name="serviceType" required className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-main outline-none">
              <option value="">Tipo de projeto</option>
              <option value="website">Site Institucional</option>
              <option value="landing">Landing Page</option>
              <option value="app">App Mobile</option>
              <option value="software">Software Personalizado</option>
              <option value="other">Outro</option>
            </select>

            <textarea name="message" placeholder="Descreva sua ideia ou problema" required className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-main outline-none" />

            <button
              type="submit"
              disabled={isSending}
              className={`${isSending ? "bg-gray-400" : "bg-main hover:bg-main/90"} text-white font-semibold py-2 px-6 rounded-[15px] transition`}
            >
              {isSending ? "Enviando..." : "Enviar"}
            </button>

            {result && <span className="text-sm text-center text-gray-600 mt-2">{result}</span>}
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
