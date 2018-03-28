# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
# User.create!({username: 'demo_user',
#               email: 'demo@gmail.com',
#               password: 'password'})
# User.create!({username: 'user1',
#               email: 'user1@gmail.com',
#               password: 'password'})
# User.create!({username: 'user2',
#               email: 'user2@gmail.com',
#               password: 'password'})
# Business.destroy_all
# a = Business.new({
#               name: 'App Academy Diner',
#               address: '159 W 25th St, New York, NY 10001',
#               map_lat: 40.7449978,
#               map_lng: -73.9937579,
#               price: 1,
#               owner_id: 1,
#               website: 'https://www.appacademy.io/',
#               pictures: ["https://s3-media2.fl.yelpcdn.com/bphoto/u3RjQ0E6K8viHxse8qkKjw/o.jpg",
#               "https://s3-media1.fl.yelpcdn.com/bphoto/YBePGUWTyKEXG-48vQ5KEQ/o.jpg",
#               "https://s3-media3.fl.yelpcdn.com/bphoto/X2RwIiwSmvwXGVlg7heH7w/o.jpg"],
#               hours: 24,
#               delivery: false,
#               take_out: false,
#               accepts_credit_cards: true,
#               wifi: false})
#               a1 = Category.new(name: "Education")
#               a2 = Category.new(name: "Restaurant")
#               a.categories.push(a1)
#               a.categories.push(a2)
#               a.save!
# b = Business.new({
#               name: 'Sunset Pub 2',
#               address: '501-509 44th St, Brooklyn, NY 11220',
#               map_lat: 40.6483354,
#               map_lng: -74.0078366,
#               price: 3,
#               owner_id: 1,
#               website: 'https://www.google.com/',
#               pictures: ["https://s3-media3.fl.yelpcdn.com/bphoto/vrYLTug9lxlIptT7pfs7vw/o.jpg",
#               "http://blog.propcy.com/wp-content/uploads/2015/11/cover-2.jpg",
#               "http://images.nymag.com/images/2/realestate/neighborhoods/2010/sunsetpark100420_lede.jpg"],
#               hours: 4,
#               delivery: true,
#               take_out: true,
#               accepts_credit_cards: true,
#               wifi: false})
#               b1 = Category.new(name: "Nightlife")
#               b.categories.push(a2)
#               b.categories.push(b1)
#               b.save!
# c = Business.new({
#               name: 'Brooklyn Bridge Cafe',
#               address: 'Brooklyn Bridge, New York, NY 10038',
#               map_lat: 40.7042293,
#               map_lng: -73.9965586,
#               price: 2,
#               owner_id: 1,
#               website: 'https://www.google.com/',
#               pictures: ["http://www.history.com/s3static/video-thumbnails/AETN-History_VMS/21/205/tdih-may24-HD_still_624x352.jpg",
#               "https://www.nycgo.com/images/made/images/uploads/articles/Guide_to_the_Brooklyn_Bridge_/Brooklyn-Bridge-Julienne-Schaer_900_601_70.jpg",
#               "https://cdn.vox-cdn.com/uploads/chorus_asset/file/7242569/30141787176_563493a63b_o.jpg"],
#               hours: 4,
#               delivery: false,
#               take_out: false,
#               accepts_credit_cards: true,
#               wifi: false})
#               c1 = Category.new(name: "Shopping")
#               c.categories.push(b1)
#               c.categories.push(c1)
#               c.save!
# d = Business.new({
#                             name: 'Peppers Diner',
#                             address: '104 Chestnut St, Newark, NJ 07105',
#                             map_lat: 40.726185523600634,
#                             map_lng: -74.17156040668488,
#                             price: 1,
#                             owner_id: 1,
#                             website: 'https://www.google.com/',
#                             pictures: ["https://media-cdn.tripadvisor.com/media/photo-p/07/f2/86/57/peppers-diner-2.jpg",
#                             "https://s3-media4.fl.yelpcdn.com/bphoto/K2ZA5xjNSCXhMIDMvlzj3A/o.jpg",
#                             "https://s3-media4.fl.yelpcdn.com/bphoto/b9Sdx4rskTSv9AKQxTatwg/o.jpg"],
#                             hours: 4,
#                             delivery: false,
#                             take_out: false,
#                             accepts_credit_cards: true,
#                             wifi: false})
#                             d.categories.push(a2)
#                             d.save!
# e = Business.new({
#                     name: 'GameCity Pool Hall',
#                     address: '5389 Merrick Rd, Massapequa Park, NY 11762',
#                     map_lat: 40.668327,
#                     map_lng: -73.437757,
#                     price: 2,
#                     owner_id: 1,
#                     website: 'https://www.google.com/',
#                     pictures: ["http://yangonlife.cdn3.mspiral.biz/cdn/farfuture/3vtOjj0IgrXEID9eMRykwj7089eXhrNchU4hQQM9PGo/mtime:1407586619/sites/yangonlife.com.mm/files/styles/directory_detail_image/public/directory_photo/2013-10-25_10913.jpg?itok=4ki-gH2K",
#                     "https://s3-media1.fl.yelpcdn.com/bphoto/1AqC83RyDWuYs8Aw45yOYw/o.jpg",
#                     "https://s3-media1.fl.yelpcdn.com/bphoto/w2RvGQqLzc9qcl1LKKPCBQ/o.jpg"],
#                     hours: 4,
#                     delivery: false,
#                     take_out: false,
#                     accepts_credit_cards: true,
#                     wifi: false})
#                     e.categories.push(b1)
#                     e.save!
# e = Business.new({
#                               name: 'Shack By the Sea',
#                               address: '204 Old Montauk Hwy, Montauk, NY 11954',
#                               map_lat: 41.054414,
#                               map_lng: -71.875071,
#                               price: 1,
#                               owner_id: 1,
#                               website: 'https://www.google.com/',
#                               pictures: ["https://www.dphotographer.co.uk/users/8226/thm1024/1410795428_Shack%20by%20the%20Sea%3DKRM.jpg",
#                               "https://media.wired.com/photos/5926779faf95806129f4f8ad/master/w_4972,c_limit/bizet_didier_03.jpg",
#                               "https://s3-media1.fl.yelpcdn.com/bphoto/9j34GWMBUMty6L_s74E1_g/o.jpg"],
#                               hours: 4,
#                               delivery: false,
#                               take_out: false,
#                               accepts_credit_cards: true,
#                               wifi: false})
#                               e.categories.push(a2)
#                               e.categories.push(c1)
#                               e.save!
# Review.destroy_all
# r1 = Review.create(
#     author_id: 1,
#     business_id: 1,
#     rating: 4.5,
#     body: "So good!! Ordered off of Uber Eats and the wings & seasoned fries were so good. The way they packaged the food was very nice as well.
#     I haven't been in person yet but will continue ordering it off of UberEATS.
#     Also it's black owned & they have some dope wing flavors on the menu that I've never seen before."
# )
# r2 = Review.create(
#     author_id: 2,
#     business_id: 1,
#     rating: 2,
#     body: "Really cute ambiance and delicious food.
#     The daily soup and the biscuits and the potato wedges were all delicious. The space is very big and trendy.
#     Unfortunately, I am giving a one star because they charged me more than what I had written on their receipt.
#     I hate restaurants who do this. I always keep my receipt so I know when they covertly charge me extra."
# )
# r3 = Review.create(
#     author_id: 3,
#     business_id: 1,
#     rating: 5,
#     body: "Great place to dine! I love how you have a nice view and eat at the same time.
#     Inside of the resturant is also very clean and arsty. The far best restaurant I've been to in New York."
# )
# r4 = Review.create(
#     author_id: 1,
#     business_id: 2,
#     rating: 3.5,
#     body: "Beautiful place and busy as can be.
#   Food seemed inspired and drinks were well made. The chefs seems young but confident and people were frequently turned away.
#   I walked in and asked for an opening. 45 minutes or bar were the options, so I opted for bar.   Pasta was great and  would go back for more.
#   Unfortunately they seemed rather busy and politely unaccommodating.   I witness some patrons getting air kisses while others just told no seating ready and at least two groups told the outdoor tables (which were empty) were closed by 9 pm so they could not eat there."
# )
# r5 = Review.create(
#     author_id: 2,
#     business_id: 2,
#     rating: 3,
#     body: "Good place for a casual dinner. I enjoyed the atmosphere and food. Had Salmon Crudo, beef tartare and a stake.
#     Everything was good. Stake is overpriced for the quality. Not enough deserts. ;)"
# )
# r6 = Review.create(
#     author_id: 2,
#     business_id: 3,
#     rating: 1.5,
#     body: "Nice location, great place, the Greatest ambience but portions are small, expensive and flavorless."
# )
# r7 = Review.create(
#     author_id: 2,
#     business_id: 4,
#     rating: 3,
#     body: "There's always a bunch of rowdy Highschool kids here making a lot of noise and causing a lot of discomfort for me and my family. These hooligans are smoking indoors and walking around as if they owned the place. The food is quite good though. "
# )
#
# r8 = Review.create(
#     author_id: 2,
#     business_id: 5,
#     rating: 3,
#     body: "We came here last Friday with a bunch of friends for my BF bday. We had an awesome time there's tons of games so we were occupied and it was definitely different then your typical bar night. Drinks were a little high for what I expected because it's really not a high end place. Also the bathroom smelled like cat pee and was pretty disgusting but again not high end what do you expect. This is a really fun and great place if you're looking for a different experience than just drinking at a bar. They have a machine to turn dollars into quarters so you can play the games."
# )
#
# r9 = Review.create(
#     author_id: 2,
#     business_id: 6,
#     rating: 5,
#     body: "Execellent sea food, very fresh great servuce, not super expensive but definitely not cheap.clams are the best I've ever had , sauce is good , some pasta dishes could be a little bland, but good and the pasta is ok not the freshist. But any seafood you get will be excellent. High turnover very busy.
#
# Recomend the shrimp randazzo over pasta
# Recomend paying cash
# Drinks are alittle over priced."
# )
#
# r10 = Review.create(
#     author_id: 1,
#     business_id: 6,
#     rating: 5,
#     body: "Anytime of the year it is a great place to stop for seafood.  My daughter loved their lobster salad (lobster roll).  It's right on the water in Sheepshead Bay.  You can eat inside or outside to watch the fishing boats.   Hasn't changed much over the years, which is a good thing,"
# )

# f = Business.new({
#                     name: Faker::Company.name,
#                     address: '51-04 Skillman Ave, Flushing, NY 11377',
#                     map_lat: 40.745862,
#                     map_lng: -73.913227,
#                     price: Random.new.rand(1..4),
#                     owner_id: 1,
#                     website: 'https://www.google.com/',
#                     pictures: ["http://yangonlife.cdn3.mspiral.biz/cdn/farfuture/3vtOjj0IgrXEID9eMRykwj7089eXhrNchU4hQQM9PGo/mtime:1407586619/sites/yangonlife.com.mm/files/styles/directory_detail_image/public/directory_photo/2013-10-25_10913.jpg?itok=4ki-gH2K",
#                     "https://s3-media1.fl.yelpcdn.com/bphoto/1AqC83RyDWuYs8Aw45yOYw/o.jpg",
#                     "https://s3-media1.fl.yelpcdn.com/bphoto/w2RvGQqLzc9qcl1LKKPCBQ/o.jpg"],
#                     hours: 4,
#                     delivery: true,
#                     take_out: true,
#                     accepts_credit_cards: true,
#                     wifi: false})
#                     f1 = Category.new(name: "Beauty")
#                     f.categories.push(f1)
#                     f.save!
