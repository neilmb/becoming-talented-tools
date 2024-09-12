class IntervalCycles extends HTMLElement {

  // connect component
  connectedCallback() {
    this.attachShadow({ mode: 'open' });

    const template = document.getElementById("exercise-template");

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define( 'interval-cycles', IntervalCycles );
