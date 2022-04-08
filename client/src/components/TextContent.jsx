import React, { useState } from 'react'

function TextContent() {
  return (
    <div>
      
    </div>
  )
}

export default TextContent

export const Start = (props) => {
    const [datenschutz, setDatenschutz] = useState(false)
    const [contact, setContact] = useState(false)

    function Props(props) {
        return (
            <>
                {props.children}
            </>
        )
    }

    return (
        <div>
            <h1>Kundendatenerfassung</h1>
            <p>
                <span className='bold larger'>Sehr geehrter Kunde, Sehr geehrte Kundin,</span><br/>
                Sie werden in dem folgendem Formular aufgefordert Ihre Daten einzugeben, damit wir über unsere Datenbank Zugriff auf Kontaktdaten haben. Ihnen wird in jedem Abschnitt eine kurze Erklärung angezeigt.
                Bitte achten Sie stets auf die Rechtschreibung und insbesondere auf die Groß- und Kleinschreibung.
            </p>
            <p>
                Damit wir Ihre Kundendaten erfassen können müssen Sie den folgenden Punkten zustimmen.
            </p>
            <label>
                <input type='checkbox' onChange={() => {setDatenschutz(datenschutz => !datenschutz)}} />
                <p>
                    Sie haben unsere <a href='http://localhost:5050/Datenschutz'>Datenschutzerklärung</a> gelesen und stimmen diesen zu
                </p>
            </label>
            <label>
                <input type='checkbox' onChange={() => {setContact(contact => !contact)}}/>
                <p>
                    Sie stimmen zu, dass wir die von Ihnen angegebenen Kontaktdaten nutzen dürfen um Sie zu kontaktieren
                </p>
            </label>
            {(datenschutz && contact) ? <Props>{props.children}</Props> : null}
        </div>
    )
}