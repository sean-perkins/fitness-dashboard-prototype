import { centered } from '@storybook/addon-centered/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

storiesOf('Design System|Navigation/NavBar', module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Default', () => ({
        template: `
            <fit-ui-nav-bar></fit-ui-nav-bar>
        `,
    }))
    .add('Slot/Logo', () => ({
        template: `
            <fit-ui-nav-bar>
                <fit-ui-logo slot="logo"></fit-ui-logo>
            </fit-ui-nav-bar>
        `
    }))
    .add('Slot/Default', () => ({
        template: `
            <fit-ui-nav-bar>
                <fit-ui-nav-item active>
                    <fit-ui-icon name="lightning"></fit-ui-icon>
                </fit-ui-nav-item>
                <fit-ui-nav-item>
                    <fit-ui-icon name="message"></fit-ui-icon>
                </fit-ui-nav-item>
                <fit-ui-nav-item>
                    <fit-ui-icon name="wallet"></fit-ui-icon>
                </fit-ui-nav-item>
                <fit-ui-nav-item>
                    <fit-ui-icon name="settings"></fit-ui-icon>
                </fit-ui-nav-item>
            </fit-ui-nav-bar>
        `
    }))
    .add('Implementation', () => ({
        template: `
            <fit-ui-nav-bar>
                <fit-ui-logo slot="logo"></fit-ui-logo>
                <fit-ui-nav-item active>
                    <fit-ui-icon name="lightning"></fit-ui-icon>
                </fit-ui-nav-item>
                <fit-ui-nav-item>
                    <fit-ui-icon name="message"></fit-ui-icon>
                </fit-ui-nav-item>
                <fit-ui-nav-item>
                    <fit-ui-icon name="wallet"></fit-ui-icon>
                </fit-ui-nav-item>
                <fit-ui-nav-item>
                    <fit-ui-icon name="settings"></fit-ui-icon>
                </fit-ui-nav-item>
            </fit-ui-nav-bar>
        `
    }));

