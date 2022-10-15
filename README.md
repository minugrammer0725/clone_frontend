Doordash Clone


1) Folder Structure:

/src
  /app
    /Components
    /Services
    /Pipes 
  /assets
    /images
  main.ts
  index.html
  styles.css
  favicon.ico


2) Pages & Components

Main Page
<App />

  <Header />
    Icon/Name  
    Asap to ___
      Display User address (if any) 
    <SearchBar/>
      Input to take in term to look for (categories, included in item name, etc)
      Updates other component when search term changes
    <Orders/>
      If User is authenticated, user can navigate to Ordedr page
    <Cart/>
      Display side panel <aside> to show user's cart (if logged in)
      Allow users to check out => navigate to Order page.
      Toggle (modify, delete) cart items


  <Products/>
    <Filter />
      <ListofCategories/>
        (chicken, desserts, asian, fastfood)
        Category filter overrides the search bar results (reload all dishes)
      <RestaurantFilter/>
        (rating, delivery time, delivery fee, etc)
        Filter comes second in priority (after either search bar/category)
    <Carousel/>
      By Default, Display all restaurants in carousel.
      (Under $2 Delivery Fee, Wallet Friendly, Most Popular, Fastest near you, something new, etc)
    If user applies any filter, remove the carousels and display all results(Not carousel).


  <Footer/>
    Get to Know Us - About Us, Careers, Investors, Company Blog, Promitions, Gift Cards, etc
    Let Us Help You - Account Details, Order History, Help
    Doing Business - Become a Dasher, Be a Partner Restaurant, Get Dashers for Deliveries

    App Store, Google Play Images
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Restaurant Page
<Restaurant/>
  <Header/> - Search bar (No need for search here)
  Restaurant Image, Info
  Featured Items => List all image thumbnails(click will open Dish details)
  List of Reviews
  All Dishes(click will open Dish details)
    <Dish/>
      Can Add to Cart
  <Footer/>

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Orders Page
  Only available for authenticated users
  If there is any 'pending' order, display it with info (Order, delivery, ETA)
  Otherwise, display all past order history ('delivered')
    If there is none => 'Start your first order!' => navigate to home page.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Signup Page
  Go to Sign up page
  <Signup/> 
    Two-step form.
    1) username, email, password
    2) address
    => Upon creation, attach cart and address info.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Signin Page
  Go to Sign in page
  <Signin/> 
    Sign in using 1) email, 2) password
  => Upon signin, provide jwt to user.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
404 Page
  404 => redirect to home


