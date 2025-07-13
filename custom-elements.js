// Hello World element (logs to console)
class HelloBox extends HTMLElement {
  connectedCallback() {
    console.log("Hello world!");
  }
}
customElements.define('hello-box', HelloBox);

// Semantic CSS element (like a footer)
class MyFooter extends HTMLElement {}
customElements.define('my-footer', MyFooter);
