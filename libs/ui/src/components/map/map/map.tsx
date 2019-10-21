import { Component, h, Host } from '@stencil/core';

@Component({
    tag: 'fit-ui-map',
    styleUrl: 'map.scss',
    shadow: true
})
export class Map {

    render() {
        return (
            <Host>
                <iframe
                    style={{
                        border: 'none'
                    }}
                    src="https://snazzymaps.com/embed/193379"
                    width="100%"
                    height="200px"></iframe>
                <div class='overlay'>
                    <slot></slot>
                </div>
            </Host>
        )
    }
}
