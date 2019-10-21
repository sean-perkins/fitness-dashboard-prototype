import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: 'fit-ui-icon-btn',
    styleUrl: 'icon-btn.scss',
    shadow: true
})
export class IconBtn {
    /**
     * `true` if the active indicator should display
     */
    @Prop({ reflect: true }) active: boolean;

    render() {
        return (
            <slot />
        )
    }
}
