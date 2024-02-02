// Login.js

import React, { useState } from 'react';

const Login = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Burada kullanıcı adı ve şifre ile giriş yapma işlemleri gerçekleştirilebilir
    // Örneğin, bir API çağrısı yapılabilir.

    // Ardından giriş başarılı ise onClose fonksiyonunu çağırarak Login component'ini kapatabiliriz.
    onClose();
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <label>
          Kullanıcı Adı:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Şifre:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
};

export default Login;
