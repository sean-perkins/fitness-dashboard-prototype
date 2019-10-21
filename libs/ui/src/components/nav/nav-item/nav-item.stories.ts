import { centered } from '@storybook/addon-centered/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

storiesOf('Design System|Navigation/NavItem', module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Default', () => ({
        template: `
            <fit-ui-nav-item>
                <fit-ui-icon name="lightning"></fit-ui-icon>
            </fit-ui-nav-item>
        `,
    }))
    .add('Active', () => ({
        template: `
            <fit-ui-nav-item active>
                <fit-ui-icon name="lightning"></fit-ui-icon>
            </fit-ui-nav-item>
        `,
    }));

