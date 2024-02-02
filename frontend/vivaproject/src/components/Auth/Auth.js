import React, { useState } from 'react';

const Auth = ({ type }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Auth işlemleri burada yapılabilir, örneğin API çağrıları, kontrol vb.

    console.log(`Submitted Form for ${type}`, formData);
  };

  return (
    <div className="auth-container">
      <h2>{type === 'login' ? 'Giriş Yap' : 'Kayıt Ol'}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Kullanıcı Adı</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <label htmlFor="password">Şifre</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">{type === 'login' ? 'Giriş Yap' : 'Kayıt Ol'}</button>
      </form>
    </div>
  );
};

export default Auth;
