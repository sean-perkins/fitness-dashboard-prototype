import { Component, Host, h } from '@stencil/core';


@Component({
    tag: 'fit-ui-goal-cta',
    styleUrl: 'goal-cta.scss',
    shadow: true
})
export class GoalCta {

    render() {
        return (
            <Host>
                <div class='scrim'></div>
                <div class='content'>
                    <fit-ui-label color='white' medium>You've done<br/>today's goals!</fit-ui-label>
                    <div class='progress'>
                        <fit-ui-label color='success'>100%</fit-ui-label>
                    </div>
                </div>
            </Host>
        );
    }
}
