import { centered } from '@storybook/addon-centered/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

storiesOf('Design System|Typography/Section Header', module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Default', () => ({
        template: `
            <fit-ui-section-header>
                Today
                <fit-ui-icon slot="icon"
                    color="gray"
                    name="heartbeat"></fit-ui-icon>
            </fit-ui-section-header>
        `,
    }));

