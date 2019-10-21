import { Component, h, Host } from '@stencil/core';

@Component({
    tag: 'fit-ui-map-hud',
    styleUrl: 'map-hud.scss',
    shadow: true
})
export class MapHud {

    render() {
        return (
            <Host>
                <fit-ui-label class='section-title' color='white' sm>Running</fit-ui-label>
                <div class='content'>
                    <div class='column'>
                        <fit-ui-label color='white' medium>6.43 km</fit-ui-label>
                        <fit-ui-label color='white' sm>Distance</fit-ui-label>
                    </div>
                    <div class='column'>
                        <fit-ui-label color='white' medium>7.51 min</fit-ui-label>
                        <fit-ui-label color='white' sm>Ride time</fit-ui-label>
                    </div>
                </div>
            </Host>
        )
    }
}
