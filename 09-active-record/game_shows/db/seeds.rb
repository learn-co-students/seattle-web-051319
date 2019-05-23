require_relative '../config/environment'

the_price_is_right = Gameshow.create(name: 'The Price is Right')
who_wants_to_be_a_millionaire = Gameshow.create(name: 'Who Wants to Be a Millionare')

bob = Host.create(name: 'Barb Bobker', gameshow: the_price_is_right)
regis = Host.create(name: 'Regis Philbun', gameshow: who_wants_to_be_a_millionaire)