import { Component, h } from "@stencil/core";

@Component({
    tag: 'fit-ui-section',
    styleUrl: 'section.scss',
    shadow: true
})
export class Section {

    render() {
        return (
            <slot />
        );
    }
}
