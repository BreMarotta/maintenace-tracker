# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

1.times do |i|
    Design.create(banner: "https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467__340.jpg", accent: "#81c784", main: "#455a64", background: "#90a4ae")
end
