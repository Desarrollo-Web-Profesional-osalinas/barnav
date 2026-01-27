import React from 'react';

const Login = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">Iniciar Sesión</h2>
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Correo</label>
            <input type="email" className="w-full border border-gray-300 p-2 rounded focus:border-primary focus:outline-none" placeholder="correo@ejemplo.com"/>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Contraseña</label>
            <input type="password" className="w-full border border-gray-300 p-2 rounded focus:border-primary focus:outline-none" placeholder="********"/>
          </div>
          <button className="bg-primary text-white py-2 rounded mt-4 hover:bg-secondary font-bold transition duration-300">
            Entrar
          </button>
        </form>
      </div>
    </section>
  );
};
export default Login;