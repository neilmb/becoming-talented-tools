class IntervalCycles extends HTMLElement {

  constructor() {
    super();
    this.interval = "2nds";
    this.direction = "Ascending";
    this.starting_note = "Do";

  static get observedAttributes() {
      return ["interval", "direction", "starting_note"];
  }

  attributeChangedCallback(property, oldValue, newValue) {
      if (oldValue === newValue) return;
      this[ property ] = newValue;
      render();
  }

  // connect component
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    render();
  }

  render() {
    template_content = `<p>${this.direction} ${this.interval} starting from ${this.starting_note}</p>`
    this.shadowRoot.innerHTML = template_content;
  }
}

customElements.define( 'interval-cycles', IntervalCycles );
