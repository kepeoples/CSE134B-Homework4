// Hello World element (logs to console)
class HelloBox extends HTMLElement {
  connectedCallback() {
    console.log("Hello world!");
  }
}
customElements.define('hello-box', HelloBox);


