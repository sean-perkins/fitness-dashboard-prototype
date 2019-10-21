# fit-ui-dashboard-drawer



<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [fit-ui-dashboard-page](../../pages/dashboard)

### Depends on

- [fit-ui-icon-btn](../../icon-btn)
- [fit-ui-icon](../../icon)
- [fit-ui-label](../../typography/label)
- [fit-ui-avatar](../../avatar)
- [fit-ui-section-header](../../typography/section-header)
- [fit-ui-calendar-card-list](../../calendar/calendar-card-list)
- [fit-ui-trainer-card-list](../../trainer/trainer-card-list)

### Graph
```mermaid
graph TD;
  fit-ui-dashboard-drawer --> fit-ui-icon-btn
  fit-ui-dashboard-drawer --> fit-ui-icon
  fit-ui-dashboard-drawer --> fit-ui-label
  fit-ui-dashboard-drawer --> fit-ui-avatar
  fit-ui-dashboard-drawer --> fit-ui-section-header
  fit-ui-dashboard-drawer --> fit-ui-calendar-card-list
  fit-ui-dashboard-drawer --> fit-ui-trainer-card-list
  fit-ui-section-header --> fit-ui-label
  fit-ui-calendar-card-list --> fit-ui-calendar-card
  fit-ui-calendar-card --> fit-ui-label
  fit-ui-calendar-card --> fit-ui-icon
  fit-ui-trainer-card-list --> fit-ui-trainer-card
  fit-ui-trainer-card --> fit-ui-icon
  fit-ui-trainer-card --> fit-ui-avatar
  fit-ui-trainer-card --> fit-ui-label
  fit-ui-dashboard-page --> fit-ui-dashboard-drawer
  style fit-ui-dashboard-drawer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
