import { centered } from '@storybook/addon-centered/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

storiesOf('Design System|Section', module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Heart', () => ({
        template: `
            <fit-ui-section>
                Slotted Content Goes Here
            </fit-ui-section>
        `
    }));

