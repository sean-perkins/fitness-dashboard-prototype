import { centered } from '@storybook/addon-centered/angular';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

storiesOf('Design System|Trainer/Trainer Card', module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Default', () => ({
        template: `
            <fit-ui-trainer-card
                [src]="src"
                [name]="name"
                [category]="category"
                [rating]="rating"
                [active]="active"
                [twitterHandle]="twitterHandle"
                [facebookUrl]="facebookUrl"></fit-ui-trainer-card>
        `,
        props: {
            src: text('src', 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg'),
            name: text('name', 'Lee Murphy'),
            rating: number('rating', 3.5),
            category: text('category', 'Fitness'),
            active: boolean('active', false),
            twitterHandle: text('twitterHandle', '#'),
            facebookUrl: text('facebookUrl', '#')
        }
    }))
    .add('Active', () => ({
        template: `
            <fit-ui-trainer-card
                [src]="src"
                [name]="name"
                [category]="category"
                [rating]="rating"
                [active]="active"
                [twitterHandle]="twitterHandle"
                [facebookUrl]="facebookUrl"></fit-ui-trainer-card>
        `,
        props: {
            src: text('src', 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg'),
            name: text('name', 'Lee Murphy'),
            rating: number('rating', 3.5),
            category: text('category', 'Fitness'),
            active: boolean('active', true),
            twitterHandle: text('twitterHandle', '#'),
            facebookUrl: text('facebookUrl', '#')
        }
    }))
    .add('Social/Only Facebook', () => ({
        template: `
            <fit-ui-trainer-card
                [src]="src"
                [name]="name"
                [category]="category"
                [rating]="rating"
                [active]="active"
                [facebookUrl]="facebookUrl"></fit-ui-trainer-card>
        `,
        props: {
            src: text('src', 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg'),
            name: text('name', 'Lee Murphy'),
            rating: number('rating', 3.5),
            category: text('category', 'Fitness'),
            active: boolean('active', false),
            facebookUrl: text('facebookUrl', '#')
        }
    }))
    .add('Social/Only Twitter', () => ({
        template: `
            <fit-ui-trainer-card
                [src]="src"
                [name]="name"
                [category]="category"
                [rating]="rating"
                [active]="active"
                [twitterHandle]="twitterHandle"></fit-ui-trainer-card>
        `,
        props: {
            src: text('src', 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg'),
            name: text('name', 'Lee Murphy'),
            rating: number('rating', 3.5),
            category: text('category', 'Fitness'),
            active: boolean('active', false),
            twitterHandle: text('twitterHandle', '#')
        }
    }));

