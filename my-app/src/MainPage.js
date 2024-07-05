import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainPage = () => {
  const [taskType, setTaskType] = useState('');
  const [location, setLocation] = useState('');
  const [deadline, setDeadline] = useState('');

  const handlePostTask = () => {
    // Tutaj dodajemy funkcję do obsługi ogłoszenia zlecenia
    console.log('Task Posted:', { taskType, location, deadline });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Tablica Zadań</h2>
      <div className="form-group mt-4">
        <label>Ogłoś zlecenie:</label>
        <select className="form-control" value={taskType} onChange={(e) => setTaskType(e.target.value)}>
          <option value="">Wybierz typ zlecenia</option>
          <option value="Dostawa zakupów/przedmiotu">Dostawa zakupów/przedmiotu</option>
          <option value="Powrót z imprezy">Powrót z imprezy</option>
          <option value="Pomoc (przy)domowa">Pomoc (przy)domowa</option>
          <option value="Wyprowadzanie psów">Wyprowadzanie psów</option>
          <option value="Wynajem narzędzi">Wynajem narzędzi</option>
        </select>
      </div>
      <div className="form-group mt-3">
        <label>Lokalizacja</label>
        <input type="text" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>
      <div className="form-group mt-3">
        <label>Deadline</label>
        <input type="date" className="form-control" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
      </div>
      <button className="btn btn-primary mt-3" onClick={handlePostTask}>Ogłoś zlecenie</button>
      <div className="auth-buttons mt-4">
        <button className="btn btn-secondary mr-2">Rejestracja</button>
        <button className="btn btn-secondary">Zaloguj się</button>
      </div>
      <button className="btn btn-success mt-4">Przyjmij zlecenie</button>
    </div>
  );
};

export default MainPage;
