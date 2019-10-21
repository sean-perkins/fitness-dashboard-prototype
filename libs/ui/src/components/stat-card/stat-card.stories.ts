import { centered } from '@storybook/addon-centered/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

storiesOf('Design System|Statistic Card', module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Heart', () => ({
        template: `
            <fit-ui-stat-card
                heading="Heart"
                heading-color="danger"
                value="119"
                icon="heartbeat"
                unit="bpm"
                percent="82"
                color="success"></fit-ui-stat-card>
        `
    }))
    .add('Running', () => ({
        template: `
            <fit-ui-stat-card
                heading="Running"
                heading-color="success"
                value="3043"
                icon="heartbeat"
                unit="m"
                percent="39"
                color="cyan"></fit-ui-stat-card>
        `
    }))
    .add('Calories', () => ({
        template: `
            <fit-ui-stat-card
                heading="Calories"
                heading-color="warning"
                value="301"
                icon="heartbeat"
                unit="kcal"
                percent="18"
                color="gray"></fit-ui-stat-card>
        `
    }));

