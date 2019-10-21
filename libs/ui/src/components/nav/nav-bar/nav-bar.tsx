import { Component, Host, h } from "@stencil/core";

@Component({
    tag: 'fit-ui-nav-bar',
    styleUrl: 'nav-bar.scss',
    shadow: true
})
export class NavBar {

    render() {
        return (
            <Host>
                <div class='logo'>
                    <slot name='logo'></slot>
                </div>
                <div class='menu-items'>
                    <slot></slot>
                </div>
            </Host>
        );
    }

}
