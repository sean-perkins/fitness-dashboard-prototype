import { Component, h, State, Host } from "@stencil/core";
import Chartist from 'chartist';

let graphId = 0;

@Component({
    tag: 'fit-ui-dashboard-activity-chart',
    styleUrl: 'dashboard-activity-chart.scss'
})
export class DashboardActivityChart {

    @State() id = graphId++;

    @State() chart: any;

    componentDidLoad() {
        new Chartist.Bar(`#ct-chart-${this.id}`, {
            labels: ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
            series: [
                [15, 15, 15, 0, 0, 0, 15, 0, 30, 15, 15, 0, 30, 15],
                [0, 30, 60, 45, 90, 30, 10, 15, 45, 15, 30, 0, 30, 60],
                [0, 0, 15, 30, 0, 0, 30, 0, 15, 30, 0, 15, 10, 0],
            ],
        }, {
            stackBars: true,
            showPoint: false,
            axisX: {
                showGrid: false,
            },
            axisY: {
                showGrid: false
            },
            chartPadding: {
                top: 15,
                right: 15,
                bottom: 15,
                left: 10
            }
        }).on('draw', function (data) {
            if (data.type === 'bar') {
                data.element.attr({
                    style: `
                        stroke-width: 5px;
                    `
                });
            }
        });
    }

    render() {
        return (
            <Host>
                <fit-ui-label bold>Activity</fit-ui-label>
                <div class='chart' id={'ct-chart-'+this.id}></div>
            </Host>
        );
    }
}
