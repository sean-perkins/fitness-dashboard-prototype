import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'fit-ui-calendar-card-list',
    styleUrl: 'calendar-card-list.scss',
    shadow: true
})
export class CalendarCardList {

    @Prop() items: any[];

    private renderItems() {
        const items = [];
        this.items.forEach(item => {
            items.push(
                <fit-ui-calendar-card
                    heading={item.heading}
                    subheading={item.subheading}
                    color={item.color}
                    startTime={item.startTime}
                    endTime={item.endTime}></fit-ui-calendar-card>
            );
        });
        return items;
    }

    render() {
        return (
            <Host>
                {this.renderItems()}
            </Host>
        );
    }

}
