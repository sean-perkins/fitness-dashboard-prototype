import { Component, h, Host, Prop } from "@stencil/core";


@Component({
    tag: 'fit-ui-nav-item',
    styleUrl: 'nav-item.scss',
    shadow: true
})
export class NavItem {
    /**
     * `true` if the nav item is active
     */
    @Prop({ reflect: true }) active: boolean;

    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }

}
