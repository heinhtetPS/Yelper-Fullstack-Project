# [Yelper](https://yelper2017.herokuapp.com/#/)
=================

Yelper is a full stack web application inspired by Yelp.com. It utilizes React.js with Redux on the frontend to produce dynamic content and a PostgreSql database backend. Ruby on rails serves a nice framework that connects the two and provides structure for the app.

## Features and Implementation
================

### Businesses
Yelper's central feature is keeping a database of businesses on the backend and letting users browse or search for the things that they are interested in finding out. Each business holds several attributes that help users locate it or distinguish it from others. These attributes may also describe what kind of experience a customer will get from patronizing that business. For example, the next section will describe our geo location feature in detail, which is a feature that helps customers find the business in the real world.

The database is held in the Rails backend and accessed through asynchronous AJAX calls. When we receive these AJAX calls, they will hit our Business controller in the rails backend, which will determine what kind of action to send back. For example, a GET call will return an index of the businesses available in the database, passing through any filters that the user has specified. Our business model in rails determines what attributes each business has and also handles associating tables together, such as tying businesses with categories or their associated reviews. The business model also handles validation of data, ensuring the integrity of each entry such as preventing the duplication of businesses or validating that each business has essential attributes like name and location.

On the frontend, users interact with React components that format and serve up the data that they have requested. One of the best examples of this is the Business Show component that queries the database for all the data associated with a specific business and builds a page that displays it to the user. This page pulls data from 3 distinct places: the Business attributes table in our database, the GoogleMaps API for geo-location info and our Reviews database. This data is then synthesized and stored in a redux state before being rendered on the page by React components.  


### GoogleMaps Integration  
One of the things I was most excited to tackle was the ability to learn about and utilize the GoogleMaps API to implement maps into this app. In fact, I specifically sought out projects that included maps so that I could engage with this particular technology. In Yelper, maps are one of the central features and one of the most important parts of each business's attributes. This feature, more than any other, lets the user tie the virtual world with the real one because they can immediately visit a nearby business that they see online or travel to seek out specific types of businesses.

This feature is, of course, based on the GoogleMaps API and displayed inside React components on the frontend. First, our React component retrieves location information stored in the backend database through a AJAX requests. This can be in the form of an address or latitude/longitude coordinates that correspond to the real world. These are then fed into the GoogleMaps API where they are parsed and become stored as markers on the map.

The map component also keeps track of its search bounds so that they can be used to filter the results. The user can simply change the area of the map's focus to get completely different results based on those visual bounds. 


### Reviews
The core of Yelper's features and the reason why we are keeping this database of businesses is because we want this information to help inform our decisions. Reviews covers this need by letting customers share their opinions about which businesses they prefer and which ones are or aren't worth the customers' time. Something like this which used to be restricted to word of mouth can now be spread across the world through the power of the internet.

Users who have signed up for our website can leave reviews of businesses that will appear prominently on that business's main show page. Users will leave a star rating (from 1 to 5 stars) representing their general satisfaction with the experience, and they will also leave a personal message describing their experience or elaborating on their scoring.

Reviews are held in thier own table in the database but they are implicitely tied to businesses through database associations. Each review must have a business ID tied to it, which is automatically provided to the database at the time of creation. Each review is also tied to the user who created the review, which is why login or signup is required to leave a review.  



## Future Directions for The Project
===========

### Expanded search features
The current search feature only lets the user filter by categories or location. I plan to expand the power of the search filters to include more of the essential business attributes such as price or average reviews. I also plan to include more dynamic filters such as whether or not the business is open now, which will cross-reference the business's hours with the current time on the user's side. As the database expands, it may also be prudent to include sorting options for those same attributes.


### Create new Businesses
I plan to let business owners or customers add more businesses to the database. Just like reviews, this feature will be restricted to signed in users.
