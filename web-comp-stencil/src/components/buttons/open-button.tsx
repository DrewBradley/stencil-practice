import { Component, h, Prop } from "@stencil/core/internal";

@Component({
    tag: 'uc-open-button',
    styleUrl: './button.css',
    shadow: true,

})

export class OpenButton {
    @Prop() isOpen: boolean;

    openDrawer = () => {
        let drawer = document.querySelector('uc-drawer')
        !drawer.hasAttribute('open') ? drawer.setAttribute('open', '') : drawer.removeAttribute('open')
    }

    render() {
        return (
            <button 
                class="open-button"
                onClick={this.openDrawer}>
                <slot />
            </button>);
    }
}