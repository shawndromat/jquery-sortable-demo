# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
awesome = List.create(title: "Reasons I'm awesome")
important = List.create(title: "Important Ideas/Questions")

Card.create(list_id: awesome.id, rank: 1, title: "I spit dope rhymes")
Card.create(list_id: awesome.id, rank: 2, title: "I knit a mean sweater")
Card.create(list_id: awesome.id, rank: 3, title: "I get down with the get down")
Card.create(list_id: awesome.id, rank: 4, title: "My sparkling personality")

Card.create(list_id: important.id, rank: 1, title: "Why don't they make white chocolate milk?")
Card.create(list_id: important.id, rank: 2, title: "Mo money, mo problems. But also, mo Reese's Peanut Butter Cups.")
Card.create(list_id: important.id, rank: 3, title: "Gravity: Essential planetary force or American anti-communist conspiracy")
Card.create(list_id: important.id, rank: 4, title: "Who would win in a fight: curtains or dignity?")
Card.create(list_id: important.id, rank: 4, title: "Shorty how you get so fly?")
