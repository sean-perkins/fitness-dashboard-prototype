import { centered } from '@storybook/addon-centered/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

storiesOf('Design System|Calendar/Calendar Card', module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Color/Warning', () => ({
        template: `
            <fit-ui-calendar-card
                heading="Aerobics"
                subheading="Violena Aerobic Club"
                color="warning"
                start-time="08:30"
                end-time="09:30"></fit-ui-calendar-card>
        `
    }))
    .add('Color/Primary', () => ({
        template: `
            <fit-ui-calendar-card
                heading="Pilates"
                subheading="Lady Fit"
                color="primary"
                start-time="09:30"
                end-time="10:30"></fit-ui-calendar-card>
        `
    }))
    .add('Color/Danger', () => ({
        template: `
            <fit-ui-calendar-card
                heading="Box"
                subheading="Sport Club Matrix"
                color="danger"
                start-time="12:00"
                end-time="13:30"></fit-ui-calendar-card>
        `
    }));

