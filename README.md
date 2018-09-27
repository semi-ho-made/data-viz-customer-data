
A data visualization exercise.

Task
- Given a set of raw data design a page to visualize this data.
- create mock and design
- build page
- 5-7 hour test


## Results

<h1 align="center">Customer Comment Data Vis</h1>

The Customer Comment Data Vis provides insight on what are customers are saying.
For example,
- How many comments are relevant?
- How many comments are postive / negative?
- Where are our most vocal users?
- Are there patterns on when users are most vocal?
- From what sectors/industry are users most active?

This is being done by allowing the data vis user to sort through a list of all comments by the various data points collected from each comment (sentiment score, location, time, etc).  In addition a graph is generated for these data points to provided another view of the data.




## Architecture

### Charting
Using [React-Vis](https://uber.github.io/react-vis/) library
- popular among developers and with an active and large community
- provides a lot of the basic chart types one would want to use -- bars graphs, line graphs, scatter plots, pie charts, etc.
- easy to use and for other to pickup and build upon

### Table
Using [React Table](https://react-table.js.org/#/story/readme)
- popular among developers and with an active and large community
- provided key featured needed for table UI -- sorting, pagination
- provided other nice features like mult-sort and server-side rendering
- easy to use


## How to run
run 'npm install'
run 'npm run start'
open http://localhost:3000/



## Project Progress 

## Phase 1 - 80% complete
- create sortable table
- create charts corresponding to each data point to gain additional insight on customer behavior 


Incomplete (In progress)
- time chart
- needs finishing touches like responsive chart width and chart x-axis display
- Filter menu

## Phase 2 
Talk to users to determine how else data can be useful and what customer behavior is more important to investigate and build futher
For example
- If location is important add a map with heatmap of various data points
- Would be more helpfule to be able to filter out customer by sentiment score? relevance score?
