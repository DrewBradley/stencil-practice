import { Component, h, Prop } from "@stencil/core/internal";

@Component({
    tag: 'uc-drawer',
    styleUrl: './drawer.css',
    shadow: true
})

export class Drawer {
    @Prop() title: string;

    render() {
        return (
            <aside>
                <header>
                    <h1>{this.title}</h1>
                </header>
                <main>
                    <slot></slot>
                </main>
            </aside>);
    }
}