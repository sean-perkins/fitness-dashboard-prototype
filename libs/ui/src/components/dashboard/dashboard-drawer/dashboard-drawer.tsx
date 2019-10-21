import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'fit-ui-dashboard-drawer',
    styleUrl: 'dashboard-drawer.scss',
    shadow: true
})
export class DashboardDrawer {

    trainers: any[];

    /**
     * The collection of calendar items to render.
     */
    calendarItems: any[] = [];

    componentWillLoad() {
        this.loadTrainers();
        this.loadCalendarItems();
    }

    private loadTrainers() {
        this.trainers = [
            {
                src: 'https://i2.wp.com/www.thewodge.com/wp-content/uploads/2017/08/Cool-Stylish-Hairstyles-Images-for-Boys.jpg',
                name: 'Brandon Jones',
                rating: 3.5,
                category: 'Fitness',
                active: true,
                twitterHandle: '#',
                facebookUrl: '#'
            },
            {
                src: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg',
                name: 'Lee Murphy',
                rating: 3.5,
                category: 'Pole dance',
                active: false,
                facebookUrl: '#'
            },
            {
                src: 'https://nadiazheng.com/wp-content/uploads/2017/01/Montreal-business-portrait-professional-accoutant-linkedin-profile-200x300.jpg',
                name: 'Ted Nguyen',
                rating: 3.5,
                category: 'Crossfit',
                active: false,
                twitterHandle: '#',
                facebookUrl: '#'
            },
            {
                src: 'https://i1.wp.com/bestlifeonline.com/wp-content/uploads/2017/05/shutterstock_529646395.jpg',
                name: 'Marvin Wilson',
                rating: 3.5,
                category: 'Fitness',
                active: false,
                twitterHandle: '#',
                facebookUrl: '#'
            }
        ];
    }

    private loadCalendarItems() {
        this.calendarItems = [
            {
                heading: 'Aerobics',
                subheading: 'Violena Aerobic Club',
                color: 'warning',
                startTime: '08:30',
                endTime: '09:30'
            },
            {
                heading: 'Pilates',
                subheading: 'Lady Fit',
                color: 'primary',
                startTime: '09:30',
                endTime: '10:30'
            },
            {
                heading: 'Box',
                subheading: 'Sport Club Matrix',
                color: 'danger',
                startTime: '12:00',
                endTime: '13:30'
            }
        ];
    }

    render() {
        return (
            <Host>
                <div class='user-bar'>
                    <div class='user-actions'>
                        <fit-ui-icon-btn active={true}>
                            <fit-ui-icon name="notification"></fit-ui-icon>
                        </fit-ui-icon-btn>
                        <fit-ui-icon-btn>
                            <fit-ui-icon name="message"></fit-ui-icon>
                        </fit-ui-icon-btn>
                    </div>
                    <div class='user-details'>
                        <fit-ui-label bold>Max Miles</fit-ui-label>
                        <fit-ui-avatar src="https://66.media.tumblr.com/60b010f2282ddc7983b2897659b33f6a/tumblr_o542sijEV11ubb1beo2_250.png"></fit-ui-avatar>
                    </div>
                </div>
                <fit-ui-section-header>
                    Today
                <fit-ui-icon slot='icon'
                        color='gray'
                        name='calendar'></fit-ui-icon>
                </fit-ui-section-header>

                <fit-ui-calendar-card-list
                    items={this.calendarItems}></fit-ui-calendar-card-list>

                <fit-ui-section-header>
                    Top Trainer
                <fit-ui-icon slot='icon'
                        color='gray'
                        name='search'></fit-ui-icon>
                </fit-ui-section-header>
                <div>
                    <fit-ui-trainer-card-list trainers={this.trainers}></fit-ui-trainer-card-list>
                </div>
            </Host>
        );
    }
}
