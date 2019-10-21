import { centered } from '@storybook/addon-centered/angular';
import { withKnobs, object } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

storiesOf('Design System|Calendar/Calendar Card List', module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Default', () => ({
        template: `
            <fit-ui-calendar-card-list
                [items]="items"></fit-ui-calendar-card-list>
        `,
        props: {
            items: object('items', [
                {
                    heading: 'Aerobics',
                    subheading: 'Violena Aerobic Club',
                    color: 'warning',
                    startTime: '08:30',
                    endTime: '09:30'
                },
                {
                    heading: 'Pilates',
                    subheading: 'Lady Fit',
                    color: 'primary',
                    startTime: '09:30',
                    endTime: '10:30'
                },
                {
                    heading: 'Box',
                    subheading: 'Sport Club Matrix',
                    color: 'danger',
                    startTime: '12:00',
                    endTime: '13:30'
                }
            ])
        }
    }));

