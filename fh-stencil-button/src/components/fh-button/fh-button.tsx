import { Component, h, Prop } from "@stencil/core/internal";

@Component({
    tag: 'fh-stencil-button',
    styleUrl: './fh-button.css',
    shadow: true
})

export class FhButton {
    @Prop() slot: string;
    @Prop() danger: boolean;

    render() {
        if (this.danger) {
            return (
            <button class="danger">
                {this.slot}
            </button>)
        } else {
        return (
            <button>
                {this.slot}
            </button>
        )}
    }
}