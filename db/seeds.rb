# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!({username: 'demo_user',
              email: 'demo@gmail.com',
              password: 'password'})

Business.create!({
              name: 'App Academy Diner',
              address: '159 W 25th St, New York, NY 10001',
              map_lat: 40.7453156,
              map_lng: -73.9940007,
              price: 1,
              owner_id: 1,
              website: 'https://www.appacademy.io/',
              hours: 24,
              delivery: false,
              take_out: false,
              accepts_credit_cards: true,
              wifi: false})
