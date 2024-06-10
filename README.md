# E-Shop

Dies ist eine Markdown-Datei, die den HTML-Code und JavaScript-Funktionalitäten für einen einfachen E-Shop erklärt.

aren Inhalt der Webseite.
## JavaScript
- Die `showCategory(category)`-Funktion zeigt Produkte einer bestimmten Kategorie an, wenn eine Kategorie aus dem Menü ausgewählt wird.
- Die `addToCart(category, index)`-Funktion fügt ein Produkt zum Warenkorb hinzu, wenn auf den "In den Warenkorb" Button geklickt wird.
- Die `removeFromCart(index)`-Funktion entfernt ein Produkt aus dem Warenkorb, wenn auf den "x"-Button geklickt wird.
- Die `updateCart()`-Funktion aktualisiert den Warenkorb und berechnet den Gesamtpreis.
- Die `generateOffer()`-Funktion generiert ein Angebot mit zufälligen Rabatten für die Produkte im Warenkorb und öffnet ein neues Fenster mit den Angebotsdetails.

### `generateOffer()`-Funktion
Die `generateOffer()`-Funktion spielt eine zentrale Rolle im E-Shop, indem sie dem Benutzer die Möglichkeit bietet, ein Angebot für die im Warenkorb befindlichen Produkte zu erhalten. Hier ist eine detailliertere Erklärung:

1. **Öffnen eines neuen Browserfensters**: Die Funktion öffnet ein neues Browserfenster, um das Angebot anzuzeigen. Dies ermöglicht es dem Benutzer, das Angebot neben der Hauptseite zu betrachten, ohne diese zu verlassen.

2. **Generieren einer zufälligen Angebotsnummer**: Durch die Verwendung von `Math.random()` wird eine eindeutige Angebotsnummer erzeugt, um das Angebot zu identifizieren. Diese Nummer ist wichtig für die Nachverfolgung und Referenzierung des Angebots.

3. **Ermitteln des aktuellen Datums und der Gültigkeitsdauer des Angebots**: Die Funktion verwendet die `Date()`-Klasse, um das aktuelle Datum zu ermitteln. Die Gültigkeitsdauer des Angebots wird ebenfalls berechnet, indem dem aktuellen Datum 30 Tage hinzugefügt werden.

4. **Erstellen des HTML-Inhalts für das Angebotsfenster**: Mithilfe von `document.write()` werden HTML-Tags erstellt, um das Angebot im neuen Fenster anzuzeigen. Dies umfasst den Angebotskopf, die Angebotsnummer, den Gruß, die Produktinformationen, die Zwischensumme, das Erstellungsdatum, die Gültigkeitsdauer und andere geschäftsbezogene Informationen.

5. **Berechnen der rabattierten Preise**: Für jedes Produkt im Warenkorb wird ein zufälliger Rabatt zwischen 1% und 30% berechnet. Der rabattierte Preis wird dann entsprechend berechnet und zur Zwischensumme hinzugefügt.

6. **Speichern des Angebots im lokalen Speicher**: Das generierte Angebot wird im lokalen Speicher des Browsers gespeichert, damit der Benutzer später darauf zugreifen kann. Dadurch wird sichergestellt, dass das Angebot auch nach dem Schließen des Fensters oder dem Neuladen der Seite verfügbar bleibt.

7. **Aktualisierung der Angebotsliste im lokalen Speicher**: Das Angebot wird der Liste aller Angebote hinzugefügt, die bereits im lokalen Speicher gespeichert sind. Dadurch wird ein Verlauf von Angeboten erstellt, auf den der Benutzer zugreifen kann.

### Lokaler Speicher
Der lokale Speicher des Browsers wird verwendet, um Angebote zu speichern, sodass Benutzer später darauf zugreifen können. Hier sind einige wichtige Punkte zum lokalen Speicher:

- **Persistentes Speichern von Daten**: Der lokale Speicher ermöglicht es, Daten über mehrere Sitzungen hinweg zu speichern, ohne dass sie verloren gehen, wenn die Seite neu geladen oder geschlossen wird.

- **Begrenzter Speicherplatz**: Der lokale Speicher hat jedoch einen begrenzten Speicherplatz, der von Browser zu Browser variieren kann. Daher ist es wichtig, die Daten entsprechend zu verwalten und gegebenenfalls zu bereinigen, um Speicherplatzprobleme zu vermeiden.

- **Sicherheit**: Daten im lokalen Speicher sind nur für die Domain verfügbar, von der aus sie gespeichert wurden. Dies stellt sicher, dass sensible Daten nicht von anderen Websites abgerufen werden können.

### Initialisierung
Nachdem die `generateOffer()`-Funktion definiert wurde, werden die Produkte aus der Kategorie "Haushalt" auf der Seite initialisiert, indem die Funktion `showCategory('Haushalt')` aufgerufen wird. Dadurch werden dem Benutzer beim Laden der Seite sofort Produkte aus dieser Kategorie angezeigt.

## Daten
- Eine JavaScript-Objektvariable `products` enthält die verschiedenen Produktkategorien und ihre Preise.
- Eine leere Array-Variable `cart` dient zur Speicherung der Produkte im Warenkorb.

## Lokaler Speicher
- Das generierte Angebot wird im lokalen Speicher des Browsers gespeichert.
- Beim Generieren eines Angebots werden Angebotsnummer, Datum, Gültigkeitsdauer, Produktinformationen und Gesamtpreis gespeichert.

## Initialisierung
- Die Seite wird mit Produkten aus der Kategorie "Haushalt" initialisiert.

