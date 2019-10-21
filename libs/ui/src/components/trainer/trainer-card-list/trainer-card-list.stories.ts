import { centered } from '@storybook/addon-centered/angular';
import { withKnobs, object } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

storiesOf('Design System|Trainer/Trainer Card List', module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Default', () => ({
        template: `
            <fit-ui-trainer-card-list
                [trainers]="trainers"></fit-ui-trainer-card-list>
        `,
        props: {
            trainers: object('trainers', [
                {
                    src: 'https://i2.wp.com/www.thewodge.com/wp-content/uploads/2017/08/Cool-Stylish-Hairstyles-Images-for-Boys.jpg',
                    name: 'Brandon Jones',
                    rating: 3.5,
                    category: 'Fitness',
                    active: true,
                    twitterHandle: '#',
                    facebookUrl: '#',
                },
                {
                    src: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg',
                    name: 'Lee Murphy',
                    rating: 3.5,
                    category: 'Pole dance',
                    active: false,
                    facebookUrl: '#',
                },
                {
                    src: 'https://nadiazheng.com/wp-content/uploads/2017/01/Montreal-business-portrait-professional-accoutant-linkedin-profile-200x300.jpg',
                    name: 'Ted Nguyen',
                    rating: 3.5,
                    category: 'Crossfit',
                    active: false,
                    twitterHandle: '#',
                    facebookUrl: '#',
                },
                {
                    src: 'https://i1.wp.com/bestlifeonline.com/wp-content/uploads/2017/05/shutterstock_529646395.jpg',
                    name: 'Marvin Wilson',
                    rating: 3.5,
                    category: 'Fitness',
                    active: false,
                    twitterHandle: '#',
                    facebookUrl: '#',
                }
            ])
        }
    }));

