import { Component, h, Prop, Host } from "@stencil/core";
import { Color } from "../../interface";

@Component({
    tag: 'fit-ui-stat-card',
    styleUrl: 'stat-card.scss',
    shadow: true
})
export class StatCard {
    /**
     * The displayed heading of the statistic
     */
    @Prop() heading: string;
    /**
     * The value of the statistic being displayed.
     */
    @Prop() value: number | string;
    /**
     * The unit of measurement. Used as a display label.
     */
    @Prop() unit = 'BPM';
    /**
     * The name of the icon to display.
     */
    @Prop() icon: string;
    /**
     * The color of the heading.
     */
    @Prop() headingColor: Color;
    /**
     * The color of the statistic fill.
     */
    @Prop() color: Color;
    /**
     * The percentage to fill the statistic.
     */
    @Prop() percent: number | string;

    render() {
        const style = {
            '--background-color': `var(--app-color-${this.color}-tint)`,
            '--background-color-shade': `var(--app-color-${this.color}-shade)`
        };
        return (
            <Host style={style}>
                <div class='inner-container'>
                    <div class='heading'>
                        <fit-ui-label color={this.headingColor} bold>{this.heading}</fit-ui-label>
                        <fit-ui-icon color='gray' name={this.icon}></fit-ui-icon>
                    </div>
                    <div class='measurement'>
                        <fit-ui-label xl bold>{this.value}</fit-ui-label>
                        <fit-ui-label color='gray'>{this.unit}</fit-ui-label>
                    </div>
                </div>
                <div class='stat-column'>
                    <div style={{
                        height: `${this.percent}%`
                    }}
                        class='fill'></div>
                    <fit-ui-label sm>{this.percent}%</fit-ui-label>
                </div>
            </Host>
        );
    }
}
