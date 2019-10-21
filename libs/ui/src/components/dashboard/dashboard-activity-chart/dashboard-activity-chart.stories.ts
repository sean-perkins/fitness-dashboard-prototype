import { withKnobs } from '@storybook/addon-knobs';
import { centered } from '@storybook/addon-centered/angular';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

storiesOf('Design System|Dashboard/Dashboard Activity Chart', module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Default', () => ({
        template: `
            <fit-ui-dashboard-activity-chart></fit-ui-dashboard-activity-chart>
        `,
    }));

