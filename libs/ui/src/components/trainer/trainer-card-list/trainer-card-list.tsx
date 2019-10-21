import { Component, h, Prop, Host } from '@stencil/core';

@Component({
    tag: 'fit-ui-trainer-card-list',
    styleUrl: 'trainer-card-list.scss',
    shadow: true
})
export class TrainerCardList {

    @Prop() trainers: any[];

    private renderTrainers() {
        const trainers = [];
        this.trainers.forEach(trainer => {
            trainers.push(
                <fit-ui-trainer-card
                        src={trainer.src}
                        name={trainer.name}
                        rating={trainer.rating}
                        category={trainer.category}
                        active={trainer.active}
                        twitterHandle={trainer.twitterHandle}
                        facebookUrl={trainer.facebookUrl}></fit-ui-trainer-card>
            );
        });
        return trainers;
    }

    render() {
        return (
            <Host>
                {this.renderTrainers()}
            </Host>
        );
    }

}
