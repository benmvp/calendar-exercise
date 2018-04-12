# Calendar App
> A simple, elegant calendar app to keep track of all your events! 

Click on this GIF to watch a full demo!

<a href="https://www.youtube.com/watch?v=KYSEEVT5WLY"><img src="https://i.imgflip.com/289ltk.gif" title="CalendarApp Demo" width="70%" border="10"/></a>

## TechStack

- React
- Redux
- Material-UI

## Completed Specs

- [CSS] Each time slot event should take up the full width and vertically stack on top of each other. On larger screens, when there are multiple events for a time slot, they should be evenly divided on the same row.
- [CSS] Entire page background needs a gradient from white (top) to light gray (bottom)
- [CSS] Add rounded corners on overall grid, time slot events, and event detail overlay
- [CSS] Event color indicator in overlay (small square next to the time time) should match the event color
- [CSS] Remove double border at bottom of the 11PM timeslot
- [JS/CSS] Past events should display faded out
- [JS/CSS] Prevent scrolling in the background when event detail shows
- [JS] Buttons to navigate to previous/next day do not work
- [JS] Implement filtering by day, so that events only appear on their respective dates
- [JS] Improve naively implemented getDisplayDate helper function
- [JS] Improve naively implemented getDisplayHour helper function
- [JS] Hitting ESC key should close event details overlay
- [JS] Clicking outside of an open event details overlay should close the overlay
- [JS] Lint your JS according to the the Eventbrite React ESLint config
- [JS] Use Redux/MobX/etc to store application state
- [HTML/CSS/JS] Create a form for adding a new calendar event

### Configuration for local development environment

From within the root directory:

```sh
npm install
npm start
```