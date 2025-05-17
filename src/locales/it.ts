const it = {
  main_title: "Chefland Inventory Management System (CIMS) v1.10",
  main_subtitle: "Guida Utente (15 Maggio 2025)",
  welcome: "Benvenuto in CIMS!",
  guide_intro: "Questa guida ti aiuterà a navigare e utilizzare il Chefland Inventory Management System per gestire in modo efficiente l’inventario della tua attività di ristorazione, garantire la sicurezza alimentare tramite un attento monitoraggio dei lotti e delle scadenze, e ottimizzare le operazioni.",
  introduction_title: "1. Introduzione: Perché CIMS?",
  introduction_body: "CIMS è una soluzione completa progettata per le esigenze specifiche del settore della ristorazione. I suoi punti di forza principali includono:",
  introduction_points: [
    "**Sicurezza Alimentare Migliorata:** Tracciamento preciso dei numeri di lotto e delle date di scadenza dalla ricezione all’uscita, per una rapida identificazione e gestione dei prodotti.",
    "**Riduzione degli Sprechi:** Avvisi proattivi e strumenti visivi come il Calendario Scadenze evidenziano i prodotti prossimi alla scadenza, consentendo una rotazione tempestiva delle scorte e riducendo gli sprechi.",
    "**Efficienza Operativa:** Flussi di lavoro ottimizzati per la ricezione merci (gestione lotti in entrata), gestione delle scorte, elaborazione ordini e integrazione con sistemi contabili come Small Invoice.",
    "**Visibilità in Tempo Reale:** Dati di inventario accurati e aggiornati in tempo reale su tutte le sedi, per decisioni informate su acquisti, vendite e pianificazione operativa.",
    "**Tracciabilità Completa:** Mantieni una cronologia completa e verificabile per ogni articolo e lotto, fondamentale per il controllo qualità, la conformità e una risposta rapida in caso di richiamo prodotto."
  ],
  introduction_end: "Questa guida è strutturata per aiutarti a comprendere le funzionalità rilevanti per il tuo ruolo e a padroneggiare i flussi di lavoro CIMS, evidenziando il valore che CIMS apporta alle tue attività quotidiane e al tuo business.",
  getting_started_title: "2. Primi Passi",
  logging_in_title: "2.1 Accesso",
  logging_in_body: "Tutti gli utenti accedono a CIMS tramite Google Sign-In sicuro.",
  logging_in_steps: [
    "Vai all’indirizzo web di CIMS fornito dall’amministratore.",
    'Clicca sul pulsante <strong>"Accedi con Google"</strong>.',
    "Seleziona il tuo account Google autorizzato dall’elenco."
  ],
  logging_in_help: 'Se riscontri problemi di accesso o hai bisogno di autorizzazione, contatta l’amministratore di sistema o <a href="mailto:info@chefland.ch" className="text-secondary hover:underline">info@chefland.ch</a>.',
  navigating_cims_title: "2.2 Navigare in CIMS",
  navigating_cims_body: "Dopo l’accesso, verrai accolto dalla dashboard di CIMS o da una pagina iniziale in base al tuo ruolo. Il menu principale consente l’accesso ai diversi moduli e funzionalità.",
  navigating_cims_mobile: 'CIMS è <strong>mobile-first e reattivo</strong>, quindi puoi usarlo su desktop, tablet o smartphone.',
  roles_permissions_title: "3. Comprendere il Tuo Ruolo e i Permessi",
  roles_permissions_body: "CIMS utilizza il controllo degli accessi basato sui ruoli (RBAC). Il ruolo assegnato determina quali funzionalità puoi utilizzare e quali azioni puoi eseguire.",
  roles_permissions_table: {
    role: "Ruolo",
    responsibilities: "Responsabilità Chiave & Accessi",
    restrictions: "Principali Restrizioni",
    rows: [
      {
        role: "Admin",
        responsibilities: "Supervisione completa del sistema, gestione utenti & clienti, accesso totale a tutte le funzionalità, dashboard & analisi.",
        restrictions: "Nessuna."
      },
      {
        role: "Invoice",
        responsibilities: "Gestisce l’inventario, crea/elabora lotti, gestisce fatture/bolle di consegna, pieno accesso alla dashboard.",
        restrictions: "Non può gestire utenti o impostazioni di sistema."
      },
      {
        role: "Inventory",
        responsibilities: "Gestisce i dati principali di inventario, pieno accesso alla creazione e tracciamento lotti.",
        restrictions: "Nessun accesso a Fatture, Bolle di Consegna o Dashboard."
      },
      {
        role: "Inbound",
        responsibilities: "Si occupa della ricezione e lavorazione lotti (accesso completo), solo visualizzazione dati inventario.",
        restrictions: "Nessun accesso a Fatture, Dashboard o gestione utenti."
      },
      {
        role: "Guest",
        responsibilities: "Solo visualizzazione di Inventario e Lotti.",
        restrictions: "Nessuna operatività, nessun accesso a Dashboard/Fatture."
      },
      {
        role: "Client",
        responsibilities: "Accesso al Portale Clienti dedicato per consultare prodotti ed effettuare ordini.",
        restrictions: "Nessun accesso alle funzionalità interne di gestione o inventario."
      }
    ]
  },
  product_batch_structure_title: "5. Struttura Prodotto & Lotto",
  product_batch_structure_body: "Per garantire tracciabilità e conformità, ogni prodotto e lotto in CIMS è definito da un insieme di campi chiave. Ecco un esempio di record lotto:",
  product_batch_structure_example: 'Esempio Record Lotto (per "Pasta di Aragona - Fusilloni Graganano IGP 500gr"):',
  product_batch_structure_table: {
    field: "Campo",
    value: "Valore Esempio",
    description: "Descrizione",
    rows: [
      { field: "SKU", value: "CFU0500", description: "Identificativo univoco del prodotto" },
      { field: "Nome Prodotto", value: "Pasta di Aragona - Fusilloni Graganano IGP 500gr", description: "Nome prodotto da inventario" },
      { field: "Numero Lotto", value: "324029", description: "Numero lotto/fornitore o interno" },
      { field: "Quantità", value: "20", description: "Numero di unità (se non a peso)" },
      { field: "Peso (kg)", value: "", description: "Peso (se a peso; vuoto se non applicabile)" },
      { field: "Quantità Disponibile", value: "19", description: "Unità o peso attualmente disponibili" },
      { field: "Data Scadenza", value: "2027-01-01", description: "Data oltre la quale il lotto non deve essere utilizzato" },
      { field: "Data Ricezione", value: "2024-12-27", description: "Data di ricezione lotto" },
      { field: "Magazzino", value: "(+25°C)", description: "Luogo di stoccaggio" },
      { field: "Costo Acquisto", value: "CHF 0.00", description: "Costo per unità o kg (per audit/valutazione)" },
      { field: "Motivo Calo", value: "", description: "Se lotto di calo, viene mostrato il motivo" },
      { field: "Base ID", value: "324029", description: "Collega lotto di calo al lotto originale" },
      { field: "Note", value: "", description: "Eventuali note aggiuntive inserite dallo staff" }
    ]
  },
  product_batch_structure_note: "*Puoi visualizzare tutti questi dettagli cliccando su un lotto nel modulo Lotti.",
  core_workflow_title: "4. Flusso Principale del Sistema: Da Merci in Entrata a Cliente Finale",
  core_workflow_body: "Comprendere il flusso di inventario e informazioni in CIMS è fondamentale per utilizzarlo in modo efficace. Il seguente diagramma illustra il ciclo di vita tipico di un prodotto nelle tue operazioni, evidenziando le interazioni per i diversi ruoli.",
  core_workflow_img_alt: "Diagramma del Flusso Principale del Sistema",
  key_features_staff_title: "6. Funzionalità Chiave & Come Fare (Ruoli Staff)",
  inventory_management_title: "6.1 Gestione Inventario",
  inventory_management_roles: "(Utenti Principali: Admin, Fatturazione, Inventario; Solo Visualizzazione: Inbound, Guest)",
  inventory_management_body: "Il modulo Inventario è il tuo archivio centrale per tutti i dati principali dei prodotti.",
  inventory_management_points: [
    '<strong>Accesso:</strong> Vai su <strong>"Inventario"</strong> dal menu principale.',
    '<strong>Visualizzazione Prodotti:</strong> I prodotti sono mostrati in una tabella reattiva (desktop) o in schede (mobile). Usa ricerca, ordinamento (per SKU, nome, ecc.) e filtri per trovare rapidamente gli articoli.'
  ],
  inventory_management_add_title: "Aggiunta di un Nuovo Prodotto (Master Item):",
  inventory_management_add_steps: [
    'Clicca sull’icona <strong>"Aggiungi Prodotto"</strong> o <strong>"+"</strong>.',
    "Compila il modulo:",
    [
      "<code>SKU</code>: Identificativo univoco. Segui le regole di validazione (lettere, numeri, trattini; niente spazi/caratteri speciali).",
      '<code>Nome Prodotto</code>: Nome descrittivo del prodotto (es. "Pasta di Aragona - Fusilloni Graganano IGP 500gr").',
      "<code>Venduto a Peso</code>: Seleziona se venduto a peso (es. formaggi, carne) invece che a unità.",
      "<code>Descrizione</code>: Dettagli aggiuntivi sul prodotto.",
      "<code>IVA</code>: Aliquota IVA applicabile."
    ],
    "Salva il prodotto. Ora è presente nell’elenco master, pronto per essere associato a lotti."
  ],
  inventory_management_edit_title: "Modifica Prodotto:",
  inventory_management_edit_body: 'Trova il prodotto, clicca sull’icona "Modifica", aggiorna i dettagli necessari e salva.',
  inventory_management_csv_title: "Import/Export CSV:",
  inventory_management_csv_points: [
    '<strong>Import:</strong> Per aggiungere o aggiornare prodotti in blocco, usa il pulsante <strong>"Importa Inventario"</strong>. Scarica il template CSV, compilalo e caricalo.',
    '<strong>Export:</strong> Per ottenere l’elenco completo degli articoli, usa <strong>"Esporta Tabella"</strong> o <strong>"Esporta in CSV"</strong>.'
  ],
  // ... (continua per tutte le altre sezioni, usando chiavi per ogni stringa/paragrafo)
  mobile_accessibility_title: "8. Esperienza Mobile & Accessibilità",
  mobile_accessibility_body: "CIMS è progettato per essere usabile su ogni dispositivo.",
  mobile_accessibility_points: [
    "<strong>Design Responsivo:</strong> Tutte le pagine e i componenti si adattano a desktop, tablet e smartphone.",
    "<strong>Flussi Ottimizzati per Mobile:</strong>",
    [
      "Gestione Lotti e Inventario hanno interfacce dedicate e ottimizzate per mobile, permettendo l’inserimento dati direttamente dal magazzino.",
      "Il Portale Clienti è completamente mobile-responsive."
    ],
    "<strong>Accessibilità (A11y):</strong> Navigazione da tastiera, etichette ARIA e compatibilità con screen reader."
  ],
  mobile_accessibility_img_alt: "Vista Mobile CIMS",
  support_troubleshooting_title: "9. Supporto & Risoluzione Problemi",
  support_troubleshooting_body: "Se hai domande o bisogno di aiuto:",
  support_troubleshooting_steps: [
    "Consulta le sezioni di aiuto in-app o i suggerimenti.",
    "Contatta il tuo amministratore di sistema CIMS interno.",
    'Scrivi al supporto CIMS: <a href="mailto:info@chefland.ch" className="text-secondary hover:underline"><strong>info@chefland.ch</strong></a>'
  ],
  support_troubleshooting_alert_title: "Siamo qui per aiutarti!",
  support_troubleshooting_alert_desc: "Ci impegniamo a garantirti un’esperienza fluida e produttiva con CIMS.",
  closing_message: "Grazie per aver scelto Chefland Inventory Management System! Siamo certi che sarà uno strumento prezioso per la tua attività di ristorazione.",
  footer_copyright: "&copy; {year} Chefland. Tutti i diritti riservati.",
  footer_version: "Guida CIMS Chefland v1.10",

  inbound_batch_management_title: "6.2 Gestione Lotti in Entrata (Ricezione Merci)",
  inbound_batch_management_roles: "(Utenti Principali: Admin, Fatturazione, Inventario, Inbound; Solo Visualizzazione: Guest)",
  inbound_batch_management_body: "Qui registri ogni nuova spedizione di prodotti che arriva in struttura. Ogni consegna distinta con propria scadenza e/o lotto va inserita come lotto separato.",
  inbound_batch_management_points: [
    '<strong>Accesso:</strong> Vai su <strong>"Lotti"</strong> dal menu principale.'
  ],
  inbound_batch_management_add_title: "Creazione di un Nuovo Lotto:",
  inbound_batch_management_add_steps: [
    'Clicca su <strong>"Aggiungi Lotto"</strong>.',
    "Compila i dettagli del lotto:",
    [
      "<code>SKU</code>: Seleziona il prodotto dall’inventario master.",
      "<code>Numero Lotto</code>: Inserisci il numero lotto/fornitore. Se assente, usa una numerazione interna coerente.",
      "<code>Quantità</code> / <code>Peso (Kg)</code>: Inserisci la quantità ricevuta.",
      "<code>Data Scadenza</code>: Inserisci la data di scadenza.",
      "<code>Data Ricezione</code>: Di default è la data odierna, ma può essere modificata.",
      "<code>Magazzino</code>: Seleziona il luogo di stoccaggio."
    ],
    "Salva il lotto. L’operazione aggiorna subito la disponibilità dello SKU collegato."
  ],
  inbound_batch_management_edit_title: "Modifica Lotto:",
  inbound_batch_management_edit_body: 'Trova il lotto nell’elenco, clicca su "Modifica", correggi i dati e salva.',
  inbound_batch_management_view_title: "Visualizzazione Lotti:",
  inbound_batch_management_view_body: 'I lotti sono mostrati in viste reattive, di solito ordinati per <code>Data Ricezione</code> (dal più recente). Puoi cercare, filtrare e ordinare per altri criteri.',
  batch_shrinkage_tracking_title: "6.2.1 Tracciamento Calo Lotto",
  batch_shrinkage_tracking_roles: "(Accessibile a: Admin, Fatturazione, Inventario, Inbound)",
  batch_shrinkage_tracking_body: "Registrare correttamente il calo riflette i livelli reali di inventario e aiuta a individuare le cause di perdita.",
  batch_shrinkage_tracking_points: [
    "<strong>Scopo:</strong> Per tracciare inventario perso o inutilizzabile prima della vendita/consumo. Cause comuni: Danni, Scadenza, Smarrimento, Deperimento, Furto, Difetti Fornitore, Altro."
  ],
  batch_shrinkage_tracking_howto_title: "Come Registrare un Calo:",
  batch_shrinkage_tracking_howto_steps: [
    'Clicca su <strong>"Aggiungi Calo"</strong> nella pagina "Lotti" o nei dettagli di un lotto.',
    "<strong>Cerca Lotto Originale:</strong> Usa numero lotto o SKU per trovare il lotto padre. Il sistema mostra la quantità disponibile.",
    "<strong>Inserisci Quantità Persa:</strong> Indica la quantità/peso perso (numero positivo).",
    "<strong>Seleziona Motivo Calo:</strong> Scegli il motivo più appropriato dall’elenco.",
    "Aggiungi eventuali note.",
    "Salva la registrazione del calo."
  ],
  batch_shrinkage_tracking_system_title: "Azione di Sistema:",
  batch_shrinkage_tracking_system_points: [
    "CIMS genera un <em>nuovo lotto collegato</em> (es. <code>SHR-324029-1</code>).",
    "Il lotto di calo registra la quantità/peso perso come <strong>valore negativo</strong>.",
    "È collegato al lotto originale tramite il campo <code>base_id</code>.",
    "La disponibilità dello SKU originale viene aggiornata immediatamente.",
    "<strong>Calcolo Disponibilità:</strong><br /><code>disponibile = quantità_iniziale + somma_cali (negativi) - somma_utilizzi_in_fatture</code>"
  ],

  outbound_management_title: "6.3 Gestione Uscite: Ordini, DDT, Fatture",
  outbound_management_roles: "(Utenti Principali: Admin, Fatturazione)",
  outbound_management_body: "Questa sezione copre la gestione delle merci in uscita dalla struttura.",
  outbound_management_points: [
    '<strong>Accesso:</strong> Vai su <strong>"Fatture"</strong> o <strong>"Ordini"</strong> dal menu.'
  ],
  outbound_management_add_title: "Creazione Ordine/Fattura:",
  outbound_management_add_steps: [
    'Clicca su <strong>"Crea Fattura"</strong>.',
    "Inserisci i dati cliente/azienda, la data e le eventuali note.",
    "<strong>Aggiunta Articoli & Allocazione Lotti:</strong>",
    [
      "Per ogni articolo, seleziona lo SKU (es. \"Pasta di Aragona - Fusilloni Graganano IGP 500gr\").",
      "CIMS mostra i lotti disponibili per quello SKU, evidenziando quelli prossimi a scadenza.",
      "Inserisci la quantità/peso richiesto.",
      "Il sistema preleva la quantità richiesta da uno o più lotti, seguendo la logica FIFO.",
      "La validazione in tempo reale impedisce sovra-allocazioni."
    ],
    "Rivedi e salva. Le quantità allocate vengono scalate dai lotti corrispondenti."
  ],
  outbound_management_integration_title: "Integrazione Small Invoice (DDT):",
  outbound_management_integration_points: [
    "CIMS si integra con l’API Small Invoice per la gestione dei DDT.",
    "<strong>Processo di Import:</strong> I DDT possono essere importati da Small Invoice. Durante l’import:",
    [
      "Gli SKU vengono validati rispetto all’inventario master CIMS.",
      "I numeri DDT vengono normalizzati per formattazione coerente."
    ],
    "<strong>Creazione Fattura Automatica:</strong> I DDT importati possono essere usati per generare fatture di vendita in CIMS, collegandoli ai lotti corretti e aggiornando l’inventario."
  ],

  expiry_calendar_title: "6.4 Calendario Scadenze",
  expiry_calendar_roles: "(Utenti Principali: Admin, Fatturazione, Inventario)",
  expiry_calendar_body: "Uno strumento proattivo per ridurre gli sprechi visualizzando la shelf life dei prodotti.",
  expiry_calendar_points: [
    '<strong>Accesso:</strong> Vai su <strong>"Calendario"</strong>.',
    "<strong>Funzionalità:</strong>",
    [
      "Mostra una vista calendario.",
      "Le date con lotti in scadenza sono evidenziate.",
      "Cliccando su una data si vedono i lotti in scadenza."
    ]
  ],

  dashboard_analytics_title: "6.5 Dashboard & Analisi",
  dashboard_analytics_roles: "(Utenti Principali: Admin, Fatturazione)",
  dashboard_analytics_body: "Il centro per insight operativi e indicatori chiave di performance (KPI).",
  dashboard_analytics_points: [
    '<strong>Accesso:</strong> Vai su <strong>"Dashboard"</strong>.',
    "<strong>Metriche Chiave Visualizzate:</strong>",
    [
      "Valore totale inventario.",
      "Ripartizione valore prodotti in scadenza per finestra temporale (scaduti, 0-30gg, 31-60gg, 61+gg).",
      "Valore prodotti in scadenza per magazzino.",
      "Grafici e report: timeline scadenze, breakdown per sede, analisi costi annua."
    ]
  ],

  notification_system_title: "6.6 Sistema Notifiche",
  notification_system_roles: "(Rilevante per: Admin, Fatturazione; altri ruoli ricevono alert mirati)",
  notification_system_body: "Rimani aggiornato sugli eventi critici di inventario in tempo reale.",
  notification_system_points: [
    '<strong>Accesso:</strong> Tramite <strong>icona campanella</strong> nell’header.',
    "<strong>Tipi di Notifica:</strong>",
    [
      "<strong>Prodotti in Scadenza:</strong> Avvisi per lotti già scaduti o prossimi a scadenza.",
      "<strong>Nuovo Stock:</strong> Avvisi per lotti appena inseriti."
    ],
    "<strong>Interazione:</strong>",
    [
      "Cliccando la campanella si apre un pannello con sezioni \"Prodotti in Scadenza\" e \"Nuovo Stock\".",
      "Ogni sezione può essere espansa/ridotta e segnata come letta.",
      "Aggiornamenti in tempo reale e notifiche sonore."
    ]
  ],

  user_client_management_title: "6.7 Gestione Utenti & Clienti",
  user_client_management_roles: "(Solo Admin)",
  user_client_management_body: "Gestisci chi può accedere a CIMS e cosa può fare.",
  user_client_management_points: [
    '<strong>Accesso:</strong> Vai su <strong>"Utenti"</strong> o sezione "Admin".',
    "<strong>Funzionalità:</strong>",
    [
      "<strong>Utenti Staff:</strong> Aggiungi/modifica utenti, assegna ruoli, attiva/disattiva account.",
      "<strong>Account Clienti:</strong> Gestisci account per clienti esterni che accedono al Portale."
    ]
  ],

  data_export_reporting_title: "6.8 Esportazione Dati & Report",
  data_export_reporting_roles: "(Disponibile per: Admin, Fatturazione, Inventario a seconda dei dati)",
  data_export_reporting_points: [
    'La maggior parte delle tabelle offre il pulsante <strong>"Esporta"</strong> o <strong>"Esporta in CSV"</strong>.',
    "Scarica dati filtrati/visualizzati per analisi offline o backup.",
    "Gli admin possono accedere a log di audit e strumenti di reportistica finanziaria."
  ],

  client_portal_features_title: "7. Funzionalità Portale Clienti",
  client_portal_features_body: "CIMS offre un portale sicuro e dedicato ai tuoi clienti.",
  client_access_auth_title: "7.1 Accesso & Autenticazione",
  client_access_auth_points: [
    "I clienti accedono tramite URL dedicato.",
    "Autenticazione tramite Google Sign-In.",
    'Accesso riservato solo agli utenti con ruolo "Cliente".'
  ],
  client_product_search_title: "7.2 Ricerca Prodotti & Consultazione Inventario",
  client_product_search_points: [
    "<strong>Ricerca Avanzata:</strong> Cerca prodotti per nome, SKU o altri attributi (es. \"Pasta di Aragona - Fusilloni Graganano IGP 500gr\").",
    "<strong>Disponibilità in Tempo Reale:</strong> Visualizza stock aggiornato, dettagli lotti e scadenze.",
    "<strong>Prodotti in Evidenza:</strong> Il portale può evidenziare prodotti in scadenza, novità o promozioni."
  ],
  client_cart_checkout_title: "7.3 Carrello & Checkout",
  client_cart_checkout_points: [
    "<strong>Gestione Carrello:</strong> Aggiungi prodotti specificando quantità o peso.",
    "<strong>Carrello Sensibile ai Lotti:</strong> Il sistema preleva dallo stock disponibile seguendo la logica FIFO.",
    "<strong>Flusso Checkout:</strong> Rivedi carrello, conferma dati consegna, accetta termini e invia ordine."
  ],
  client_order_confirmation_title: "7.4 Conferma Ordine & Profilo Cliente (<code>/profile</code>)",
  client_order_confirmation_points: [
    "<strong>Conferma Immediata:</strong> Dopo l’ordine, il cliente vede una pagina riepilogativa.",
    "<strong>Email di Conferma:</strong> Invio automatico email.",
    "<strong>Profilo & Storico Ordini:</strong>",
    [
      "Il cliente può vedere profilo e storico ordini.",
      "Lo storico mostra tutti gli ordini con numero e data.",
      "Cliccando su un ordine si vede il dettaglio."
    ]
  ],
  client_voice_assistant_title: "7.5 Assistente Vocale (Sandra)",
  client_voice_assistant_body: "I clienti possono usare <strong>Sandra</strong>, l’assistente vocale AI, direttamente dal portale.",
  client_voice_assistant_points: [
    "<strong>Conversazione Naturale:</strong> Parla liberamente; Sandra comprende richieste e domande.",
    "<strong>Esperienza Personalizzata:</strong> Sandra adatta l’assistenza in base all’account e agli ordini passati.",
    "<strong>Funzionalità:</strong>",
    [
      '<strong>Verifica Disponibilità:</strong> "Sandra, hai Pasta di Aragona - Fusilloni in stock?"',
      '<strong>Effettua Ordini:</strong> "Sandra, vorrei ordinare 10 confezioni di Pasta di Aragona - Fusilloni."',
      "<strong>Richiedi Aiuto/Info:</strong> Chiedi supporto su navigazione, dettagli prodotto o stato ordine."
    ],
    "<strong>Accesso a Sandra:</strong> Cerca l’icona microfono o il pulsante \"Chiedi a Sandra\"."
  ],
  client_privacy_terms_title: "7.6 Privacy & Termini",
  client_privacy_terms_body: "Il portale offre link a <strong>Privacy Policy</strong> e <strong>Termini & Condizioni</strong>."
};

export default it;