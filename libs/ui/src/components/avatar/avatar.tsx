import { Component, Prop, Host, h } from '@stencil/core';

@Component({
    tag: 'fit-ui-avatar',
    styleUrl: 'avatar.scss',
    shadow: true
})
export class Avatar {
    /**
     * The source of the image to render.
     */
    @Prop() src: string;

    render() {
        return (
            <Host style ={{
                'background-image': `url('${this.src}')`
            }}>
            </Host>
        );
    }
}
