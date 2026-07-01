"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      usuario === "098.654.897-22" &&
      senha === "123456"
    ) {
      router.push("/profile-selection");
    } else {
      setErro("Usuário e/ou senha errado");
    }
  };

  return (
    <main className="min-h-screen bg-[#D4AF37] flex justify-center">
      <div className="w-full max-w-[390px] min-h-screen flex flex-col items-center px-6">

        <div className="mt-12 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full border-[6px] border-[#2b0000] flex items-center justify-center">
            <span className="text-5xl">🛞</span>
          </div>

          <h1 className="text-5xl font-bold text-black mt-4">
            InfoBus
          </h1>
        </div>

        <h2 className="text-4xl font-bold text-black mt-14">
          Login
        </h2>

        <form
          onSubmit={handleLogin}
          className="bg-[#1f1f1f] w-full rounded-lg mt-10 p-6"
        >
          <div className="mb-5">
            <label className="text-[#d89c00] block mb-2">
              Usuário
            </label>

            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="098.654.897-22"
              className="w-full bg-[#1f1f1f] border border-gray-700 rounded-md p-3 text-white outline-none"
            />
          </div>

          <div>
            <label className="text-[#d89c00] block mb-2">
              Senha
            </label>

            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="************"
              className="w-full bg-[#1f1f1f] border border-gray-700 rounded-md p-3 text-white outline-none"
            />
          </div>

          <div className="h-6 mt-2">
            {erro && (
              <p className="text-red-500 text-sm">
                {erro}
              </p>
            )}
          </div>

          <div className="flex justify-center gap-6 mt-5">
            <button
              type="button"
              className="text-gray-300"
            >
              Cadastrar
            </button>

            <button
              type="submit"
              className="bg-[#c99a00] text-white px-8 py-2 rounded-md"
            >
              Entrar
            </button>
          </div>

          <div className="mt-4">
            <button
              type="button"
              className="text-[#d89c00]"
              onClick={() =>
                alert("Funcionalidade em desenvolvimento")
              }
            >
              Esqueceu a senha?
            </button>
          </div>

          <div className="text-center text-white mt-6">
            ou
          </div>

          <div className="flex justify-center gap-6 mt-5">
            <button
              type="button"
              className="w-12 h-12 bg-white rounded-full"
            >
              G
            </button>

            <button
              type="button"
              className="w-12 h-12 bg-white rounded-full"
            >
              
            </button>

            <button
              type="button"
              className="w-12 h-12 bg-white rounded-full"
            >
              G
            </button>
          </div>
        </form>

        <div className="mt-auto mb-8 flex flex-col items-end w-full">
          <div className="text-3xl">
            🚌
          </div>

          <div className="w-full h-3 bg-black rounded-full"></div>
        </div>
      </div>
    </main>
  );
}