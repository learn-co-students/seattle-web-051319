State.destroy_all
City.destroy_all

wa = State.create({name: "Washington", motto: "Aliki"})
oregon = State.create({name: "Oregon", motto: "She flies by her own wings"})
ca = State.create({name: "California", motto: "Eureka!"})

City.create(name: "Seattle", population: 700_000, state_id: wa.id)
City.create(name: "Portland", population: 600_000, state_id: oregon.id)
City.create(name: "Oregon", population: 800_000, state_id: ca.id)