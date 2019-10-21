import { Component, h, Host, Prop, State } from "@stencil/core";


@Component({
    tag: 'fit-ui-date-btn',
    styleUrl: 'date-btn.scss',
    shadow: true
})
export class DateBtn {

    @Prop() value = new Date();

    @State() dateString: string;

    componentWillLoad() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        this.dateString = this.value.toLocaleDateString('en-US', options);
    }

    render() {
        return (
            <Host>
                <fit-ui-label sm>{this.dateString}</fit-ui-label>
                <fit-ui-icon name='calendar'></fit-ui-icon>
            </Host>
        );
    }
}
