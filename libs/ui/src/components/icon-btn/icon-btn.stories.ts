import { centered } from '@storybook/addon-centered/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

storiesOf('Design System|Icon Btn', module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Default', () => ({
        template: `
            <fit-ui-icon-btn>
                <fit-ui-icon name="notification"></fit-ui-icon>
            </fit-ui-icon-btn>
        `
    }))
    .add('Active', () => ({
        template: `
            <fit-ui-icon-btn [active]="true">
                <fit-ui-icon name="notification"></fit-ui-icon>
            </fit-ui-icon-btn>
        `
    }));

