import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'fit-ui-trainer-card',
    styleUrl: 'trainer-card.scss',
    shadow: true
})
export class TrainerCard {
    /**
     * The image source of the trainer's photo.
     */
    @Prop() src: string;
    /**
     * The name of the trainer.
     */
    @Prop() name: string;
    /**
     * The category of fitness the trainer focuses on.
     */
    @Prop() category: string;
    /**
     * The rating of the trainer.
     */
    @Prop() rating: number;
    /**
     * `true` if the trainer is active (online)
     */
    @Prop({ reflect: true }) active: boolean = true;
    /**
     * The twitter handle of the trainer
     */
    @Prop() twitterHandle: string;
    /**
     * The facebook url of the trainer
     */
    @Prop() facebookUrl: string;

    private renderTwitterSocialBtn() {
        if (this.twitterHandle) {
            return (
                <div class='social-btn twitter'>
                    <fit-ui-icon name='twitter'></fit-ui-icon>
                </div>
            );
        }
        return (
            <div class='social-spacer'></div>
        );
    }

    private renderFacebookSocialBtn() {
        if (this.facebookUrl) {
            return (
                <div class='social-btn facebook'>
                    <fit-ui-icon name='facebook'></fit-ui-icon>
                </div>
            )
        }
        return (
            <div class='social-spacer'></div>
        );
    }

    render() {
        return (
            <Host>
                <fit-ui-avatar src={this.src}></fit-ui-avatar>
                <div class='content'>
                    <fit-ui-label bold>{this.name}</fit-ui-label>
                    <fit-ui-label color='gray' xs>{this.category}</fit-ui-label>
                </div>
                <div class='rating'>
                    <fit-ui-icon color='warning' name='star'></fit-ui-icon>
                    <fit-ui-label bold>{this.rating}</fit-ui-label>
                </div>
                <div class='social'>
                    {this.renderTwitterSocialBtn()}
                    {this.renderFacebookSocialBtn()}
                </div>
            </Host>
        );
    }
}
