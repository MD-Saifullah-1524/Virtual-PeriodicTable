// This script fetches element data from a JSON file and populates the HTML elements with the data.
// It assumes the JSON file is structured with element names as keys and their properties as values.
  const params = new URLSearchParams(window.location.search);
  const fileName = params.get('element');        // "1" | "2" | …

  fetch('../data/very_short_description.json') // adjust path if needed
    .then(response => response.json())
    .then(data => {
      const element = data[fileName];
      if (!element) return;

      document.querySelector('.element_name').textContent = element.name;
      document.querySelector('.element_symbol').textContent = "Symbol: "+element.symbol;
      document.querySelector('.element_no').textContent = "Atomic number: "+element.atomicNumber;
      document.querySelector('.element_mass').textContent = "Atomic Mass: "+element.atomicMass;
      document.querySelector('.element_valencies').textContent = "Valencies: "+element.valencies.join(', ');
      document.querySelector('.element_classification').textContent ="Classification: " +element.classification;
      document.querySelector('.element_electronic_configuration').textContent ="Electronic Configuration: "+ element.electronicConfiguration;
      document.querySelector('.definition').textContent = element.definition;
      const link = document.querySelector('.definition_source_link');
      link.textContent = element.definitionSourceLink;
      link.href = element.definitionSourceLink;
    });