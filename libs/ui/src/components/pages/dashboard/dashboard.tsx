import { Component, h, Host } from "@stencil/core";

@Component({
    tag: 'fit-ui-dashboard-page',
    styleUrl: 'dashboard.scss',
})
export class Dashboard {

    render() {
        return (
            <Host>
                <fit-ui-nav-bar>
                    <fit-ui-logo slot="logo"></fit-ui-logo>
                    <fit-ui-nav-item active>
                        <fit-ui-icon name="lightning"></fit-ui-icon>
                    </fit-ui-nav-item>
                    <fit-ui-nav-item>
                        <fit-ui-icon name="message"></fit-ui-icon>
                    </fit-ui-nav-item>
                    <fit-ui-nav-item>
                        <fit-ui-icon name="wallet"></fit-ui-icon>
                    </fit-ui-nav-item>
                    <fit-ui-nav-item>
                        <fit-ui-icon name="settings"></fit-ui-icon>
                    </fit-ui-nav-item>
                </fit-ui-nav-bar>
                <div class='container'>
                    <div class='inner-container'>
                        <div class='row align-center space-between'>
                            <div>
                                <fit-ui-label lg color='primary' bold>Hello, Max</fit-ui-label>
                                <fit-ui-label color='gray'>Here is your daily statistics</fit-ui-label>
                            </div>
                            <fit-ui-date-btn></fit-ui-date-btn>
                        </div>

                        <div class='statistics row space-between'>
                            <fit-ui-stat-card
                                heading="Heart"
                                heading-color="danger"
                                value="119"
                                icon="heartbeat"
                                unit="bpm"
                                percent="82"
                                color="success"></fit-ui-stat-card>
                            <fit-ui-stat-card
                                heading="Running"
                                heading-color="success"
                                value="3043"
                                icon="heartbeat"
                                unit="m"
                                percent="39"
                                color="cyan"></fit-ui-stat-card>
                            <fit-ui-stat-card
                                heading="Calories"
                                heading-color="warning"
                                value="301"
                                icon="heartbeat"
                                unit="kcal"
                                percent="18"
                                color="gray"></fit-ui-stat-card>
                        </div>
                        <fit-ui-section class="section-activity">
                            <div class='row space-between'>
                                <fit-ui-dashboard-activity-chart></fit-ui-dashboard-activity-chart>
                                <fit-ui-goal-cta></fit-ui-goal-cta>
                            </div>
                        </fit-ui-section>

                        <fit-ui-map>
                            <fit-ui-map-hud></fit-ui-map-hud>
                        </fit-ui-map>
                    </div>
                    <fit-ui-dashboard-drawer></fit-ui-dashboard-drawer>
                </div>
            </Host>
        );
    }
}
