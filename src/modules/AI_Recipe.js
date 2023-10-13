//Beispiel KI Rezept JSON, da Anzahl der API Calls begrenzt ist
let aiResult = {
  ingredients: [
    {
      amount: "200",
      name: "Cashews",
      unit: "g",
    },
    {
      amount: "200",
      name: "Datteln",
      unit: "g",
    },
    {
      amount: "100",
      name: "Mandelmehl",
      unit: "g",
    },
    {
      amount: "100",
      name: "Kokosöl",
      unit: "g",
    },
    {
      amount: "4",
      name: "Eier",
      unit: "",
    },
    {
      amount: "1",
      name: "Backpulver",
      unit: "TL",
    },
    {
      amount: "1",
      name: "Vanilleextrakt",
      unit: "TL",
    },
    {
      amount: "1",
      name: "Salz",
      unit: "Prise",
    },
  ],
  portions: 8,
  steps: [
    "Den Ofen auf 180 Grad Celsius vorheizen.",
    "Die Cashews und Datteln in einem Mixer fein mahlen.",
    "Das Mandelmehl, Kokosöl, Eier, Backpulver, Vanilleextrakt und Salz hinzufügen und zu einem Teig verrühren.",
    "Den Teig in eine gefettete Kuchenform geben und glattstreichen.",
    "Den Kuchen für ca. 30-35 Minuten backen, bis er goldbraun ist.",
    "Den Kuchen aus dem Ofen nehmen und abkühlen lassen.",
    "Nach Belieben mit Puderzucker bestäuben und servieren.",
  ],
  title: "Zuckerfreier Cashewkuchen",
  totalTime: 3600,
};

/* {
  "ingredients": [
    {
      "amount": "200",
      "name": "Cashews",
      "unit": "g"
    },
    {
      "amount": "200",
      "name": "Datteln",
      "unit": "g"
    },
    {
      "amount": "100",
      "name": "Mandelmehl",
      "unit": "g"
    },
    {
      "amount": "100",
      "name": "Kokosöl",
      "unit": "g"
    },
    {
      "amount": "4",
      "name": "Eier",
      "unit": ""
    },
    {
      "amount": "1",
      "name": "Backpulver",
      "unit": "TL"
    },
    {
      "amount": "1",
      "name": "Vanilleextrakt",
      "unit": "TL"
    },
    {
      "amount": "1",
      "name": "Salz",
      "unit": "Prise"
    }
  ],
  "portions": 8,
  "steps": [
    "Den Ofen auf 180 Grad Celsius vorheizen.",
    "Die Cashews und Datteln in einem Mixer fein mahlen.",
    "Das Mandelmehl, Kokosöl, Eier, Backpulver, Vanilleextrakt und Salz hinzufügen und zu einem Teig verrühren.",
    "Den Teig in eine gefettete Kuchenform geben und glattstreichen.",
    "Den Kuchen für ca. 30-35 Minuten backen, bis er goldbraun ist.",
    "Den Kuchen aus dem Ofen nehmen und abkühlen lassen.",
    "Nach Belieben mit Puderzucker bestäuben und servieren."
  ],
  "title": "Zuckerfreier Cashewkuchen",
  "totalTime": 3600
} */

export { aiResult };
