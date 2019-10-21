import { Component, h, Host } from '@stencil/core';


@Component({
    tag: 'fit-ui-section-header',
    styleUrl: 'section-header.scss',
    shadow: true
})
export class SectionHeader {

    render() {
        return (
            <Host>
                <fit-ui-label bold>
                    <slot></slot>
                </fit-ui-label>
                <slot name='icon'></slot>
            </Host>
        )
    }

}
