# E-Shop

Dies ist eine Markdown-Datei, die den HTML-Code und JavaScript-Funktionalitäten für einen einfachen E-Shop erklärt.

aren Inhalt der Webseite.
## JavaScript
- Die `showCategory(category)`-Funktion zeigt Produkte einer bestimmten Kategorie an, wenn eine Kategorie aus dem Menü ausgewählt wird.
- Die `addToCart(category, index)`-Funktion fügt ein Produkt zum Warenkorb hinzu, wenn auf den "In den Warenkorb" Button geklickt wird.
- Die `removeFromCart(index)`-Funktion entfernt ein Produkt aus dem Warenkorb, wenn auf den "x"-Button geklickt wird.
- Die `updateCart()`-Funktion aktualisiert den Warenkorb und berechnet den Gesamtpreis.
- Die `generateOffer()`-Funktion generiert ein Angebot mit zufälligen Rabatten für die Produkte im Warenkorb und öffnet ein neues Fenster mit den Angebotsdetails.

## Daten
- Eine JavaScript-Objektvariable `products` enthält die verschiedenen Produktkategorien und ihre Preise.
- Eine leere Array-Variable `cart` dient zur Speicherung der Produkte im Warenkorb.

## Lokaler Speicher
- Das generierte Angebot wird im lokalen Speicher des Browsers gespeichert.
- Beim Generieren eines Angebots werden Angebotsnummer, Datum, Gültigkeitsdauer, Produktinformationen und Gesamtpreis gespeichert.

## Initialisierung
- Die Seite wird mit Produkten aus der Kategorie "Haushalt" initialisiert.

