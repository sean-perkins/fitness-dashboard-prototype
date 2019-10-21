import { Component, Prop, h, Host, State, Event, EventEmitter } from '@stencil/core';
import { Color } from '../../../interface';

@Component({
    tag: 'fit-ui-calendar-card',
    styleUrl: 'calendar-card.scss',
    shadow: true
})
export class CalendarCard {
    /**
     * The color of the indicator on the card
     */
    @Prop() color: Color = 'primary';
    /**
     * The heading of the calendar card
     */
    @Prop() heading: string;
    /**
     * The sub heading of the calendar card
     */
    @Prop() subheading: string;
    /**
     * The display format for the start time.
     */
    @Prop() startTime: string;
    /**
     * The display format for the end time.
     */
    @Prop() endTime: string;

    @Event() more: EventEmitter;

    @State() expanded: boolean;

    onItemClick = () => {
        this.expanded = !this.expanded;
    }

    render() {
        const style = {
            '--indicator-color': `var(--app-color-${this.color})`
        }
        return (
            <Host class={{
                expanded: this.expanded
            }}
                style={style}>
                <div class='item' onClick={this.onItemClick}>
                    <div class='inner-item'>
                        <fit-ui-label bold>{this.heading}</fit-ui-label>
                        <fit-ui-label sm color='gray'>{this.subheading}</fit-ui-label>
                    </div>
                    <div class='line'></div>
                    <div class='time'>
                        <div class='clock-icon'>
                            <fit-ui-icon color='white' name='clock'></fit-ui-icon>
                        </div>
                        <fit-ui-label bold>{this.startTime}</fit-ui-label>
                        <fit-ui-label sm color='gray'>{this.endTime}</fit-ui-label>
                    </div>
                </div>
                <div class='actions'>
                    <fit-ui-icon
                        onClick={() => this.more.emit()}
                        color='white'
                        name='more'></fit-ui-icon>
                </div>
            </Host>
        );
    }
}
