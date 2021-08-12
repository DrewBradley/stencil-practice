class FhButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
            button {
                margin: 2rem;
                font-family: 'Source Sans Pro', "Helvetica Neue", Helvetica, Arial, sans-serif !important;
                padding: 6px 15px;
                font-family: "Source Sans Pro", sans-serif;
                font-weight: 600;
                background-color: #007575;
                color: #fff;
                border: 0;
                border-radius: 3px;
                font-size: 15px;
                line-height: 20px;
                transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
                cursor: pointer;
            }
            
            button:focus,
            button.focus,
            button:hover,
            button.hover {
                box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
                outline: none;
            }
            
            button:active,
            button.active {
                background-color: #351417;
            }
            .danger {
                background-color: #BE3B19;
            }
        </style>
        <button>
            <slot></slot>
        </button>
        `;
        this._confirmButton = this.shadowRoot.querySelector('button');
        this._confirmButton.addEventListener('click', this._showParagraph)
    }

    connectedCallback() {
        if (this.hasAttribute('danger')) {
            this._confirmButton.classList.add("danger");
        }
    }

    _showParagraph = () => {
        let message = document.createElement('p');
        message.innerText = "Let me find you some help!"
        if (this.hasAttribute('danger')) {
            message.innerText = "It's all gonna explode!"
        }
        this.shadowRoot.appendChild(message)
    }
}

customElements.define('fh-button', FhButton);