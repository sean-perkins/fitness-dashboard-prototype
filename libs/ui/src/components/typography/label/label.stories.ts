import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

storiesOf('Typography|Label', module)
    .addDecorator(withKnobs)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Size/Default', () => ({
        template: `
            <fit-ui-label>The quick brown fox jumps over the lazy dog.</fit-ui-label>
        `
    }))
    .add('Size/Small', () => ({
        template: `
            <fit-ui-label small>The quick brown fox jumps over the lazy dog.</fit-ui-label>
        `
    }))
    .add('Color/Primary', () => ({
        template: `
            <fit-ui-label color="primary">The quick brown fox jumps over the lazy dog.</fit-ui-label>
        `
    }))
    .add('Color/Danger', () => ({
        template: `
            <fit-ui-label color="danger">The quick brown fox jumps over the lazy dog.</fit-ui-label>
        `
    }))
    .add('Capitalize', () => ({
        template: `
            <fit-ui-label capitalize>The quick brown fox jumps over the lazy dog.</fit-ui-label>
        `
    }))
    .add('Uppercase', () => ({
        template: `
            <fit-ui-label uppercase>The quick brown fox jumps over the lazy dog.</fit-ui-label>
        `
    }))
    .add('Lowercase', () => ({
        template: `
            <fit-ui-label lowercase>The quick brown fox jumps over the lazy dog.</fit-ui-label>
        `
    }));
