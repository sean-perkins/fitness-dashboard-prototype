import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

storiesOf('Design System|Map/Map', module)
    .addDecorator(withKnobs)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Default', () => ({
        template: `
            <fit-ui-map></fit-ui-map>
        `,
    }))
    .add('Slot', () => ({
        template: `
            <fit-ui-map>
                <fit-ui-map-hud></fit-ui-map-hud>
            </fit-ui-map>
        `,
    }));

