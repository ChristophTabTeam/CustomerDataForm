import './App.scss';
import React, { useState } from 'react'
import { Start } from './components/TextContent'

function App() {
  const [count, setCount] = useState()
  const [addEmail, setAddEmail] = useState(false)
  const [addPhone, setAddPhone] = useState(false)

  function TextBox() {
    if (count === 0) {
      return <Start/>
    }
  }

  return (
    <div>
      <Start>
        <button onClick={() => {
          setCount(0)
        }} className='initiate-button'>zum Formular</button>
      </Start>
      <form method="POST" action="/api/addCustomer">
        <div>
          <h1>Eingabe der Firmendaten</h1>
          {(count === 0) ? <p>Geben Sie hier Ihren Firmennamen und die allgemeine E-Mail Adresse sowohl als auch beispielsweise die Telefonnummer Ihrer Zentrale an</p> : <p>Geben Sie hier die Standortdaten Ihres Unternehmens ein</p>}
        </div>
        <label>
          <input type="text" className="input" name="companyName"/>
          <span className="input-name">Firmenname</span>
        </label>
        <label>
          <input type="text" className="input" name="website"/>
          <span className="input-name">Webseite</span>
        </label>
        <label>
          <input type="email" className="input" name="email1" />
          <span className="input-name">Allgemeine E-Mail Adresse</span>
        </label>
        <label>
          <input type="text" className="input" name="email1Tag" />
          <span className="input-name">E-Mail Bezeichnung</span>
        </label>
        <label>
          <input type="text" className="input" name="phone1" />
          <span className="input-name">Allgemeine Telefonnummer</span>
        </label>
        <label>
          <input type="text" className="input" name="phone1Tag" />
          <span className="input-name">Allgemeine Telefonnummer</span>
        </label>
        <label>
          <input type="text" className="input" name="streetName" />
          <span className="input-name">Straße</span>
        </label>
        <label>
          <input type="text" className="input" name="streetNumber" />
          <span className="input-name">Hausnummer</span>
        </label>
        <label>
          <input type="text" className="input" name="cityZip" />
          <span className="input-name">Postleitzahl</span>
        </label>
        <label>
          <input type="text" className="input" name="cityName"/>
          <span className="input-name">Stadt</span>
        </label>
        <label>
          <input type="text" className="input" name="country" />
          <span className="input-name">Land</span>
        </label>
        <div>
          <h1>Hinzufügen eines Ansprechpartners</h1>
        </div>
        <label>
          <input type="text" className="input" name="firstName" />
          <span className="input-name">Vorname</span>
        </label>
        <label>
          <input type="text" className="input" name="lastName"/>
          <span className="input-name">Nachname</span>
        </label>
        <label>
          <input type="text" className="input" name="position" />
          <span className="input-name">Position</span>
        </label>
        <label>
          <input type="email" className="input" name="email2" />
          <span className="input-name">E-Mail</span>
        </label>
        <label>
          <input type="text" className="input" name="email2Tag" />
          <span className="input-name">E-Mail Bezeichnung</span>
        </label>
        {(addEmail === false) ? <button onClick={() => {
          setAddEmail(true)
        }}>Weitere E-Mail Adresse hinzufügen</button> : <>
          <label>
            <input type="email" className="input" name="email3" />
            <span className="input-name">E-Mail</span>
          </label>
          <label>
            <input type="text" className="input" name="email3Tag" />
            <span className="input-name">E-Mail Bezeichnung</span>
          </label>
        </>}
        <label>
          <input type="text" className="input" name="phone2" />
          <span className="input-name">Telefonnummer</span>
        </label>
        <label>
          <input type="text" className="input" name="phone2Tag" />
          <span className="input-name">Telefonnummer Bezeichnung</span>
        </label>
        {(addPhone === false) ? <button onClick={() => {
          setAddPhone(true)
        }}>Weitere Telefonnummer hinzufügen</button> : <>
          <label>
            <input type="text" className="input" name="phone3" />
            <span className="input-name">Telefonnummer</span>
          </label>
          <label>
            <input type="text" className="input" name="phone3Tag" />
            <span className="input-name">Telefonnummer Bezeichnung</span>
          </label>
        </>}
        <button type="submit">Abschließen</button>
      </form>
    </div>
  );
}

export default App;
